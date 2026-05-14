const mongoose = require('mongoose');

const ProblemSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    difficulty: { type: String, enum: ['Easy', 'Medium', 'Hard'], required: true },
    tags: { type: [String] },
    companies: { type: [String] },
    constraints: { type: String },
    sampleInput: { type: String },
    sampleOutput: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('Problem', ProblemSchema);
