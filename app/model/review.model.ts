import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
    product: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'product'
    },
    name: {
        type: String, required: true, lowercase: true, trim: true
    },
    email: {
        type: String, required: true, lowercase: true, trim: true
    },
    review: {
        type: String, requried: true
    },
    is_verified: {
        type: Boolean, default: true
    }
}, { timestamps: true })


export default mongoose.model('review', reviewSchema)