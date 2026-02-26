const express = require('express');
const router = express.Router();
const {
    addFeeRecord,
    payFees,
    getFees
} = require('../controllers/feesController');
const { protect } = require('../middleware/authMiddleware');
const { authorize } = require('../middleware/roleMiddleware');

router.route('/')
    .post(protect, authorize('ADMIN'), addFeeRecord);

router.route('/:id/pay')
    .put(protect, authorize('ADMIN'), payFees);

router.route('/:studentId')
    .get(protect, getFees);

module.exports = router;
