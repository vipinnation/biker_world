const mongoose = require('mongoose')

const referWithdrawAmountSchema = new mongoose.Schema({

    user: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    totalEarnedAmount: {
        type: String
    },
    amount: {
        type: String,
        required: true
    },
    bankAccountNumber: {
        type: String,
        required: true
    },
    ifscCode: {
        type: String,
        required: true
    },
    status: {
        type: String,
        default: 'Request_Received'
    }
}, { timestamps: true })


module.exports = new mongoose.model('referamountwithdraw', referWithdrawAmountSchema)