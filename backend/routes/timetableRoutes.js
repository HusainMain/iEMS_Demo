const express = require('express');
const router = express.Router();
const {
    processTimetable,
    getTimetable
} = require('../controllers/timetableController');
const { protect } = require('../middleware/authMiddleware');
const { authorize } = require('../middleware/roleMiddleware');

router.route('/')
    .post(protect, authorize('ADMIN'), processTimetable);

router.route('/:className')
    .get(protect, getTimetable);

module.exports = router;
