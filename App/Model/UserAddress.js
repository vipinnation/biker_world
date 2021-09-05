const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema({
    user: {
        type: String
    },
    name: {
        type: String,

    },
    streetAddress: {
        type: String,

    },
    city: {
        type: String,

    },
    state: {
        type: String,

    },
    pinCode: {
        type: String,

    },
    mobileNumber: {
        type: String,

    }

}, { timestamps: true })


module.exports = new mongoose.model('UserAddress', addressSchema)
