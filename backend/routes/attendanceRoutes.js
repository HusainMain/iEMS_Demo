const express = require('express');
const router = express.Router();
const {
    markAttendance,
    getAttendance
} = require('../controllers/attendanceController');
const { protect } = require('../middleware/authMiddleware');
const { authorize } = require('../middleware/roleMiddleware');

router.post('/mark', protect, authorize('ADMIN', 'TEACHER'), markAttendance);
router.get('/:studentId', protect, getAttendance);

module.exports = router;
