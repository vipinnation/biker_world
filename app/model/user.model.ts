import mongoose, { Schema } from 'mongoose';
import jwt from 'jsonwebtoken';
import { config } from '../../config/config';

// Email Validation
const validateEmail = function (email: any) {
    const re = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
    return re.test(email);
};


const UserSchema: Schema = new Schema<any>(
    {
        email: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            lowercase: true,
            validate: [validateEmail, 'Please fill a valid email address'],
            match: [/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/, 'Please fill a valid email address']
        },
        password: { type: String, required: true, select: false },
        last_logged_in: { type: Date, default: null },
        status: { type: String, default: 'ROLE_USER', enum: ['ROLE_USER', 'ROLE_ADMIN'] },
        created_by: { type: Schema.Types.ObjectId, ref: 'user' },

    },
    { timestamps: true }
);

// Generate User token for authentication
UserSchema.methods.isSignedToken = function () {
    return jwt.sign({ id: this._id }, config.jwt.JWT_SECRET, {
        expiresIn: config.jwt.JWT_EXPIRE
    });
};

export default mongoose.model<any>('user', UserSchema); 
