const asyncHandler = require('express-async-handler');
const Announcement = require('../models/Announcement');

// @desc    Create an announcement
// @route   POST /api/v1/announcements
// @access  Private/Admin/Teacher
const createAnnouncement = asyncHandler(async (req, res) => {
    const { title, message, targetRole } = req.body;

    const announcement = await Announcement.create({
        title,
        message,
        targetRole,
        createdBy: req.user._id
    });

    res.status(201).json(announcement);
});

// @desc    Get announcements based on role
// @route   GET /api/v1/announcements
// @access  Private
const getAnnouncements = asyncHandler(async (req, res) => {
    let query = { targetRole: { $in: ['ALL', req.user.role] } };

    // Admin and Teacher can see all announcements they created or all general ones
    if (req.user.role === 'ADMIN' || req.user.role === 'TEACHER') {
        query = {}; // Or scope it depending on specific logic
    }

    const announcements = await Announcement.find(query)
        .populate('createdBy', 'name role')
        .sort({ createdAt: -1 });

    res.status(200).json(announcements);
});

module.exports = {
    createAnnouncement,
    getAnnouncements
};
