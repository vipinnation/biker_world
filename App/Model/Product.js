const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    productName: {
        type: String,
        required: true
    },
    productPrice: {
        type: String,
        required: true
    },
    productCategory: {
        type: String,
        required: true
    },
    productSecondaryCategory: {
        type: Array 
    },
    productDescription: {
        type: String,

    },
    productImage: {
        type: String,
        required: true
    },
    productSecondaryImage: {
        type: Array
    },
    productPdf: {
        type: String,

    },
    productSearchingTags: {
        type: String
    },
    productPublisher: {
        type: String
    },
    productEdition: {
        type: String
    },
    productLanguage: {
        type: String
    },
    productRegularPrice: {
        type: String
    },
    productSlug: {
        type: String
    },
    productApplicableModel: {
        type: Array
    },
    productPopularItem: {
        type: Boolean
    }
}, { timestamps: true })

module.exports = new mongoose.model('product', productSchema)