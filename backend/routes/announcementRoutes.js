const express = require('express');
const router = express.Router();
const {
    createAnnouncement,
    getAnnouncements
} = require('../controllers/announcementController');
const { protect } = require('../middleware/authMiddleware');
const { authorize } = require('../middleware/roleMiddleware');

router.route('/')
    .post(protect, authorize('ADMIN', 'TEACHER'), createAnnouncement)
    .get(protect, getAnnouncements);

module.exports = router;
