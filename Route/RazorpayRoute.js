const express = require('express')
const razorpayRouter = express.Router()
const crypto = require('crypto')
const Razorpay = require('razorpay')
const RazorpayDB = require('../App/Model/razorpayschema')
const { v4: uuidv4 } = require('uuid');
const Address = require('../App/Model/UserAddress')
const Order = require('../App/Model/Orders')
const SendEmail = require('../App/Middleware/Email')


var instance = new Razorpay({ key_id: process.env.RAZORPAY_KEY, key_secret: process.env.RAZORPAY_SECRET })


razorpayRouter.post('/razorpay', (req, res) => {

    console.log('RazorPay Payment Intitated ', req.body)
    let totalAmount = (req.body.amount * 100)
    var options = {
        amount: Number(req.session.cart.totalAmount) * 100,  // amount in the smallest currency unit
        currency: "INR",
        receipt: uuidv4()
    };
    instance.orders.create(options, function (err, order) {
        req.session.orderId = order.id
        res.status(200).json(order)
    });
})



razorpayRouter.post('/razorpay/callback', (req, res) => {
    console.log('CallBack Url', req.body)

    if (req.body.razorpay_signature && req.body.razorpay_order_id) {

        const razorPay = new RazorpayDB({
            paymentId: req.body.razorpay_payment_id,
            paymentOrderId: req.body.razorpay_order_id,
            paymentSignature: req.body.razorpay_signature
        })
        console.log('req.session.orderId :- ', req.session.orderId)
        const hash = crypto.createHmac('sha256', process.env.RAZORPAY_SECRET)
            .update(req.session.orderId + '|' + req.body.razorpay_payment_id)
            .digest('hex');
        console.log('HASH', hash);
        if (hash === req.body.razorpay_signature) {
            console.log('Hash Matched')
            res.redirect(`/api/razorpay/process-order/${req.body.razorpay_order_id}`)
            return
        }
    }
})




razorpayRouter.get('/razorpay/process-order/:id', async (req, res) => {

    console.log('Payment process order ', req.session.cart)

    Address.findOne({ user: req.session.user.userId }).then(addressData => {
        console.log("address found", addressData)

        const { items, totalQty, shippingCharge, totalAmount} = req.session.cart
        const { name, streetAddress, state, city, pinCode, mobileNumber } = addressData

        const saveOrder = new Order({
            orderId: req.params.id,
            referCode : req.session.cart.referCode || null,
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
module.exports = razorpayRouter