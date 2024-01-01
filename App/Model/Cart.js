const mongoose = require('mongoose')


const cartSchema = new mongoose.Schema({

    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'user'
    },
    items: {
        type: Object,
        required: true
    },
    totalQty: {
        type: String,
        required: true
    },
    shippingCharge:{
        type:String,
        required:true
    },
    totalAmount: {
        type: String,
        required: true
    },
    orderStatus: {
        type: String,
        default: 'Order_Placed'
    },
    userAddress:{
        type:Object,
        required:true
    }

}, { timestamps: true })


module.exports = new mongoose.model('cart', cartSchema)