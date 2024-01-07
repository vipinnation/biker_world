import mongoose, { Schema } from "mongoose"


const productSchema = new Schema({
    name: {
        type: String,
        trim: true,
        lowercase: true
    },
    price: {
        type: Number
    },
    description: {
        type: String
    },
    isPopularItem: {
        type: Boolean, default: false
    },
    category: [{ type: Schema.Types.ObjectId, ref: "category" }],
    images: [{ type: String }],
    is_deleted: {
        type: Boolean, default: false
    },
    review: [{ type: mongoose.Schema.Types.ObjectId, ref: "review" }]

}, { timestamps: true })

export default mongoose.model("product", productSchema)