import mongoose from 'mongoose'

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        lowercase: true,
        unique: true,
        trim: true
    }
}, { timestamps: true })


export default mongoose.model("category", categorySchema)