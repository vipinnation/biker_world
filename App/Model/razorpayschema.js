const mongoose = require('mongoose');


const razorpayschema = new mongoose.Schema({

    paymentId: {
        type: String
    },
    paymentOrderId: {
        type: String
    },
    paymentSignature: {
        type: String
    }
})


module.exports = new mongoose.model('razorpayment', razorpayschema)