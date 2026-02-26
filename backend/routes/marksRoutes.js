const express = require('express');
const router = express.Router();
const {
    enterMarks,
    getMarks
} = require('../controllers/marksController');
const { protect } = require('../middleware/authMiddleware');
const { authorize } = require('../middleware/roleMiddleware');

router.route('/')
    .post(protect, authorize('ADMIN', 'TEACHER'), enterMarks);

router.route('/:studentId')
    .get(protect, getMarks);

module.exports = router;
