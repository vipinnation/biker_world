const mongoose = require('mongoose')


const reviewSchema = mongoose.Schema({

    product: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'product'
    },
    name: {
        type: String
    },
    email: {
        type: String
    },
    review: {
        type: String
    },
    isVerified: {
        type: Boolean
    }
}, { timestamps: true })


module.exports = mongoose.model('review', reviewSchema)