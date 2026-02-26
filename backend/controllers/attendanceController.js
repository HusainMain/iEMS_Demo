const asyncHandler = require('express-async-handler');
const Attendance = require('../models/Attendance');
const Student = require('../models/Student');

// @desc    Mark attendance for a class
// @route   POST /api/v1/attendance/mark
// @access  Private/Teacher/Admin
const markAttendance = asyncHandler(async (req, res) => {
    const { studentId, date, status } = req.body;

    const student = await Student.findById(studentId);
    if (!student) {
        res.status(404);
        throw new Error('Student not found');
    }

    // Check if attendance already exists for this date
    let attendance = await Attendance.findOne({
        studentId,
        date: new Date(date).setHours(0, 0, 0, 0)
    });

    if (attendance) {
        attendance.status = status;
        await attendance.save();
    } else {
        attendance = await Attendance.create({
            studentId,
            class: student.class,
            date: new Date(date).setHours(0, 0, 0, 0),
            status
        });
    }

    res.status(201).json(attendance);
});

// @desc    Get attendance for a student
// @route   GET /api/v1/attendance/:studentId
// @access  Private/Student, Parent, Teacher, Admin
const getAttendance = asyncHandler(async (req, res) => {
    const attendanceRecords = await Attendance.find({ studentId: req.params.studentId }).sort({ date: -1 });
    res.status(200).json(attendanceRecords);
});

module.exports = {
    markAttendance,
    getAttendance
};
