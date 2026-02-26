const mongoose = require('mongoose');

const announcementSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    targetRole: {
        type: String,
        enum: ['ALL', 'TEACHER', 'STUDENT', 'PARENT'],
        default: 'ALL'
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
}, { timestamps: true });

const Announcement = mongoose.model('Announcement', announcementSchema);
module.exports = Announcement;
