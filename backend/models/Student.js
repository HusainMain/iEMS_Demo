const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    class: {
        type: String,
        required: true
    },
    section: {
        type: String,
        required: true
    },
    rollNumber: {
        type: String,
        required: true,
        unique: true
    },
    parentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}, { timestamps: true });

const Student = mongoose.model('Student', studentSchema);
module.exports = Student;
