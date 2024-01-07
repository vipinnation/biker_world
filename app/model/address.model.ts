import mongoose from 'mongoose'

const addressSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    name: {
        type: String,
    },
    street_address: {
        type: String,
        lowercase: true,
        trim: true
    },
    city: {
        type: String,
        lowercase: true,
        trim: true
    },
    state: {
        type: String,
        lowercase: true,
        trim: true

    },
    pinCode: {
        type: Number,
    },
    mobile_number: {
        type: Number,
    },
    type: {
        type: String,
        default: "Home",
        enum: ['Home', 'Office', 'Other']
    },
    is_default: {
        type: Boolean,
        default: false
    }

}, { timestamps: true })


export default mongoose.model('address', addressSchema)