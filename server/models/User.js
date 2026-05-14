const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    college: { type: String, default: '' },
    skills: { type: [String], default: [] },
    rating: { type: Number, default: 0 },
    problemsSolved: { type: Number, default: 0 },
    role: { type: String, enum: ['student', 'admin'], default: 'student' }
}, { timestamps: true });

module.exports = mongoose.model('User', UserSchema);
