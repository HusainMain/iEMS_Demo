const asyncHandler = require('express-async-handler');
const Marks = require('../models/Marks');
const Student = require('../models/Student');

// @desc    Enter marks for a student
// @route   POST /api/v1/marks
// @access  Private/Teacher/Admin
const enterMarks = asyncHandler(async (req, res) => {
    const { studentId, subject, examType, marksObtained, totalMarks } = req.body;

    const student = await Student.findById(studentId);
    if (!student) {
        res.status(404);
        throw new Error('Student not found');
    }

    // Upsert logic based on exam type and subject
    let marksRecord = await Marks.findOne({
        studentId,
        subject,
        examType
    });

    if (marksRecord) {
        marksRecord.marksObtained = marksObtained;
        marksRecord.totalMarks = totalMarks;
        await marksRecord.save();
    } else {
        marksRecord = await Marks.create({
            studentId,
            subject,
            examType,
            marksObtained,
            totalMarks
        });
    }

    res.status(201).json(marksRecord);
});

// @desc    Get marks for a student
// @route   GET /api/v1/marks/:studentId
// @access  Private/Student, Parent, Teacher, Admin
const getMarks = asyncHandler(async (req, res) => {
    const marksRecords = await Marks.find({ studentId: req.params.studentId });
    res.status(200).json(marksRecords);
});

module.exports = {
    enterMarks,
    getMarks
};
