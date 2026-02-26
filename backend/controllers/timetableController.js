const asyncHandler = require('express-async-handler');
const Timetable = require('../models/Timetable');

// @desc    Create or update a timetable
// @route   POST /api/v1/timetable
// @access  Private/Admin
const processTimetable = asyncHandler(async (req, res) => {
    const { class: className, day, subjects } = req.body;

    let timetable = await Timetable.findOne({ class: className, day });

    if (timetable) {
        timetable.subjects = subjects;
        await timetable.save();
    } else {
        timetable = await Timetable.create({
            class: className,
            day,
            subjects
        });
    }

    res.status(201).json(timetable);
});

// @desc    Get timetable by class
// @route   GET /api/v1/timetable/:className
// @access  Private/Admin, Teacher, Student, Parent
const getTimetable = asyncHandler(async (req, res) => {
    const timetables = await Timetable.find({ class: req.params.className });
    res.status(200).json(timetables);
});

module.exports = {
    processTimetable,
    getTimetable
};
