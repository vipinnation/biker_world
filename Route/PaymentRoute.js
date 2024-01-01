const express = require('express')
const paymentRoute = express.Router()
const PaytmChecksum = require('../App/Middleware/PaytmChecksum')
const { v4: uuidv4 } = require('uuid');
const https = require('https');
const Address = require('../App/Model/UserAddress')
const Order = require('../App/Model/Orders')
const SendEmail = require('../App/Middleware/Email')
const Payment = require('../App/Model/payment')

paymentRoute.post('/payment', (req, res) => {

    console.log("Payment initaite transaction Controller")

    const { amount, email, customerId } = req.body;
    const totalAmount = JSON.stringify(amount);
    var params = {};

    params['MID'] = process.env.PAYTM_MID,
        params['WEBSITE'] = process.env.PAYTM_WEBSITE,
        params['CHANNEL_ID'] = process.env.PAYTM_CHANNEL_ID,
        params['INDUSTRY_TYPE_ID'] = process.env.PAYTM_INDUSTRY_TYPE,
        params['ORDER_ID'] = uuidv4(),
        params['CUST_ID'] = customerId,
        params['TXN_AMOUNT'] = totalAmount,
        params['CALLBACK_URL'] = 'https://hirola.in/api/callback',
        params['EMAIL'] = email


    var paytmChecksum = PaytmChecksum.generateSignature(params, process.env.PAYTM_MKEY);
    paytmChecksum.then(function (checksum) {
        let paytmParams = {
            ...params,
            "CHECKSUMHASH": checksum
        }
        res.json(paytmParams)
    }).catch(function (error) {
        console.log(error);
    });

})


paymentRoute.post('/callback', (req, res) => {

    console.log("Payment Status", req.session.cart)


    paytmChecksum = req.body.CHECKSUMHASH;
    delete req.body.CHECKSUMHASH;

    var isVerifySignature = PaytmChecksum.verifySignature(req.body, process.env.PAYTM_MKEY, paytmChecksum);

    if (isVerifySignature) {

        const { ORDERID, TXNID, PAYMENTMODE, TXNDATE, STATUS, GATEWAYNAME, BANKTXNID, BANKNAME, TXNAMOUNT, RESPMSG } = req.body
        const savePayment = new Payment({

            orderId: ORDERID,
            transactionAmount: TXNAMOUNT,
            transactionId: TXNID,
            paymentMode: PAYMENTMODE,
            transactionDate: TXNDATE,
            paymentStatus: STATUS,
            gatewayName: GATEWAYNAME,
            bankTransactionId: BANKTXNID,
            bankName: BANKNAME,
            referenceMessage: RESPMSG
        })
        savePayment.save().then(data => {
            console.log("Payment Status saved", data)
        }).catch(err => console.log(err))

        if (req.body.STATUS == 'TXN_SUCCESS' && req.body.RESPCODE == '01') {
            console.log('Order Confirmed')
            res.redirect(`/api/process-order/${ORDERID}`)
            return
        }



        console.log('Order not Confirmed', req.body.RESPMSG)

        return res.render('../Resources/views/PaymentStatus.ejs', { 'payment': req.body })

    } else {
        console.log("Checksum Mismatched");
        return res.send('<h1>Something went wrong')
    }


})


paymentRoute.get('/process-order/:id', async (req, res) => {
    console.log('Payment process order ', req.session.cart)
    Address.findOne({ user: req.session.user.userId }).then(addressData => {
        console.log("address found", addressData)

        const { items, totalQty, shippingCharge, totalAmount } = req.session.cart
        const { name, streetAddress, state, city, pinCode, mobileNumber } = addressData

        const saveOrder = new Order({
            orderId: req.params.id,
            user: req.session.user.userId,
            items, totalQty, shippingCharge, totalAmount,
            userAddress: { name, streetAddress, city, state, pinCode, mobileNumber }
        })


        saveOrder.save().then(data => {
            console.log("Order Saved")
            SendEmail(req.session.user.userEmail, 'Order', "Order Placed Successfully", data)
            delete req.session.cart
            return res.redirect('/profile')
        }).catch(err => {
            console.log('SaveOrder Error ', err)
        })

    }).catch(err => {
        console.log("Error", err)
    })
})



module.exports = paymentRoute