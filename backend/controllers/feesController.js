const asyncHandler = require('express-async-handler');
const Fees = require('../models/Fees');
const Student = require('../models/Student');

// @desc    Add fee record for a student
// @route   POST /api/v1/fees
// @access  Private/Admin
const addFeeRecord = asyncHandler(async (req, res) => {
    const { studentId, amount, status } = req.body;

    const student = await Student.findById(studentId);
    if (!student) {
        res.status(404);
        throw new Error('Student not found');
    }

    const feeRecord = await Fees.create({
        studentId,
        amount,
        status: status || 'Pending'
    });

    res.status(201).json(feeRecord);
});

// @desc    Update fee status (e.g., mark as paid)
// @route   PUT /api/v1/fees/:id/pay
// @access  Private/Admin
const payFees = asyncHandler(async (req, res) => {
    const feeRecord = await Fees.findById(req.params.id);

    if (feeRecord) {
        feeRecord.status = 'Paid';
        feeRecord.transactionDate = new Date();
        const updatedFee = await feeRecord.save();
        res.status(200).json(updatedFee);
    } else {
        res.status(404);
        throw new Error('Fee record not found');
    }
});

// @desc    Get fee records for a student
// @route   GET /api/v1/fees/:studentId
// @access  Private/Admin, Parent, Student
const getFees = asyncHandler(async (req, res) => {
    const feesRecords = await Fees.find({ studentId: req.params.studentId }).sort({ createdAt: -1 });
    res.status(200).json(feesRecords);
});

module.exports = {
    addFeeRecord,
    payFees,
    getFees
};
