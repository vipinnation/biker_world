const mongoose = require('mongoose');


const couponSchema = new mongoose.Schema({
    couponName: {
        type: String,
        required: true
    },
    couponType: {
        type: String,
        required: true
    },
    couponDiscountAmount: {
        type: String
    },
    couponDiscountPercentage: {
        type: String
    },



}, { timestamps: true })


module.exports = new mongoose.model('couponcode', couponSchema)