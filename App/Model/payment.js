const mongoose = require('mongoose')

const paymentSchema = new mongoose.Schema({

   
    orderId: {
        type: String
    },
    transactionId: {
        type: String
    },
    transactionAmount: {
        type: String
    },
    paymentMode: {
        type: String
    },
    transactionDate: {
        type: String
    },
    paymentStatus: {
        type: String
    },
    gatewayName: {
        type: String
    },
    bankTransactionId: {
        type: String
    },
    bankName: {
        type: String
    },
    referenceMessage:{
        type:String
    }
})

module.exports = new mongoose.model('payment', paymentSchema)