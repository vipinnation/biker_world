import mongoose from 'mongoose'

const couponSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    type: {
        type: String,
        required: true,
        enum: ["FLAT", "PERCENT"]
    },
    discount_amount: {
        type: String
    },
    dicount_percent: {
        type: String
    },
    oncePerUser: {
        type: Boolean,
        default: false
    },
    is_deleted: { type: Boolean, default: false },
    used_by: [{
        type: mongoose.Schema.Types.ObjectId, ref: "user"
    }]
}, { timestamps: true })


export default mongoose.model('coupan', couponSchema)