const mongoose = require('mongoose');

const teacherSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    subjects: [{
        type: String,
        required: true
    }],
    assignedClasses: [{
        type: String, // Example: "10A", "9B"
        required: true
    }]
}, { timestamps: true });

const Teacher = mongoose.model('Teacher', teacherSchema);
module.exports = Teacher;
