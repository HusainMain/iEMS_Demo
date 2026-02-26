const mongoose = require('mongoose');

const feesSchema = new mongoose.Schema({
    studentId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Student'
    },
    amount: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        enum: ['Paid', 'Pending'],
        default: 'Pending',
        required: true
    },
    transactionDate: {
        type: Date
    }
}, { timestamps: true });

const Fees = mongoose.model('Fees', feesSchema);
module.exports = Fees;
