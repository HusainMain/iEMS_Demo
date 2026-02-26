const asyncHandler = require('express-async-handler');
const Student = require('../models/Student');
const User = require('../models/User');

// @desc    Get all students
// @route   GET /api/v1/students
// @access  Private/Admin/Teacher
const getStudents = asyncHandler(async (req, res) => {
    const students = await Student.find().populate('userId', 'name email');
    res.status(200).json(students);
});

// @desc    Get single student
// @route   GET /api/v1/students/:id
// @access  Private/Admin/Teacher/Parent(if their child)
const getStudentById = asyncHandler(async (req, res) => {
    const student = await Student.findById(req.params.id)
        .populate('userId', 'name email')
        .populate('parentId', 'name email');

    if (student) {
        res.status(200).json(student);
    } else {
        res.status(404);
        throw new Error('Student not found');
    }
});

// @desc    Update student profile
// @route   PUT /api/v1/students/:id
// @access  Private/Admin
const updateStudent = asyncHandler(async (req, res) => {
    const student = await Student.findById(req.params.id);

    if (student) {
        student.class = req.body.class || student.class;
        student.section = req.body.section || student.section;
        student.rollNumber = req.body.rollNumber || student.rollNumber;

        const updatedStudent = await student.save();
        res.status(200).json(updatedStudent);
    } else {
        res.status(404);
        throw new Error('Student not found');
    }
});

// @desc    Delete student profile
// @route   DELETE /api/v1/students/:id
// @access  Private/Admin
const deleteStudent = asyncHandler(async (req, res) => {
    const student = await Student.findById(req.params.id);

    if (student) {
        await User.findByIdAndDelete(student.userId); // Also delete their user account
        await student.remove();
        res.status(200).json({ message: 'Student removed' });
    } else {
        res.status(404);
        throw new Error('Student not found');
    }
});

module.exports = {
    getStudents,
    getStudentById,
    updateStudent,
    deleteStudent
};
