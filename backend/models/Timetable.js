const mongoose = require('mongoose');

const timetableSchema = new mongoose.Schema({
    class: {
        type: String,
        required: true
    },
    day: {
        type: String, // e.g., 'Monday', 'Tuesday'
        required: true
    },
    subjects: [{
        subjectName: {
            type: String,
            required: true
        },
        startTime: {
            type: String,
            required: true
        },
        endTime: {
            type: String,
            required: true
        },
        teacherId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Teacher'
        }
    }]
}, { timestamps: true });

const Timetable = mongoose.model('Timetable', timetableSchema);
module.exports = Timetable;
