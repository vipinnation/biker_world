
const Order = require('../Model/Orders')
const SendEmail = require('../Middleware/Email')
module.exports = function orderController() {

    return {

        // Checking Out Order and Saving Order Detail in Database
        checkOut(req, res) {
            console.log('Checkout Controller')

            const { items, totalQty, shippingCharge, totalAmount, referCode } = req.body.cart
            const { name, streetAddress, state, city, pinCode, mobileNumber } = req.body.userData

            const saveOrder = new Order({

                user: req.user._id,
                referCode,
                items, totalQty, shippingCharge, totalAmount,
                userAddress: { name, streetAddress, city, state, pinCode, mobileNumber }
            })


            saveOrder.save().then(data => {
                console.log("Order Saved")
                SendEmail(req.user.email, 'Order', "Order Placed Successfully", data)
                delete req.session.cart
                return res.status(200).json({ 'msg': 'success' })
            }).catch(err => {
                console.log(err)
            })
        },

        // Order Detail For Admin  
        getAdminOrder(req, res) {

            console.log("Admin Order Controller")
            Order.find({}, null, {
                sort: {
                    'createdAt': '-1'
                }
            }).then(data => {
                console.log("Ge Admin Data")
                return res.status(200).json(data)

            }).catch(err => {
                console.log(err)
            })
        },

        // Getting Order Detail for Registered User
        getUserOrder(req, res) {

            console.log("Get User Order Controller")

            const arr = new Array();
            const itemArray = new Array();
            Order.find({ user: req.user._id }, null, { sort: { 'createdAt': '-1' } }).then(data => {

                data.map(e => {
                    for (let item of Object.values(e.items)) {


                        let productObject = {
                            item,
                            orderStatus: e.orderStatus,
                            orderedDate: e.createdAt,
                            orderId: e._id
                        }
                        arr.push(productObject)
                    }

                })
                return res.status(200).json({ data, arr })
            }).catch(err => console.log(err))
        },

        // Updating Order Detail from Admin Panel
        updateOrder(req, res) {

            console.log("Update Order Status by Admin Controller")

            const updateStatus = req.body.status
            Order.findByIdAndUpdate(req.body.product._id, {
                orderStatus: updateStatus
            }).then(result => {
                console.log("Order Updated")
                return res.status(200).json({ 'msg': 'Order Status Updated ' })
            }).catch(err => {
                console.log(err)
            })

        },

        // Get Order Detail  by orderId
        getOrderById(req, res) {

            console.log("Get OrderById controller")
            console.log(req.params.id)

            Order.findById(req.params.id).then(data => {
                console.log(data)

                return res.status(200).json(data)
            }).catch(err => {
                console.log(err)
            })
        }
    }
}


//               