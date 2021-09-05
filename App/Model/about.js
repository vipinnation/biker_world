const mongoose = require('mongoose');

const aboutSchema = new mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    message: {
        type: String
    }
}, { timestamps: true })


module.exports = new mongoose.model('about', aboutSchema)