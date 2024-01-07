import mongoose from 'mongoose'

const orderSchema = new mongoose.Schema({
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
        type: Number,
        required: true
    },
    shipping_charges: {
        type: Number,
        required: true
    },
    total_amount: {
        type: Number,
        required: true
    },
    order_status: {
        type: String,
        default: 'Order_Placed'
    },
    user_address: {
        type: Object,
        required: true
    },
    order_id: {
        type: String
    },
    referal_code: {
        type: String
    }
}, { timestamps: true })