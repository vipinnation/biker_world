import mongoose from 'mongoose'

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
    total_quantity: {
        type: String,
        required: true
    },
    shipping_charges: {
        type: String,
        required: true
    },
    total_amount: {
        type: String,
        required: true
    },
    order_status: {
        type: String,
        default: 'Order_Placed'
    },
    user_address: {
        type: Object,
        required: true
    }
}, { timestamps: true })


export default mongoose.model("cart", cartSchema)