const express = require('express');
const router = express.Router();
const {
    getStudents,
    getStudentById,
    updateStudent,
    deleteStudent
} = require('../controllers/studentController');
const { protect } = require('../middleware/authMiddleware');
const { authorize } = require('../middleware/roleMiddleware');

router.route('/')
    .get(protect, authorize('ADMIN', 'TEACHER'), getStudents);

router.route('/:id')
    .get(protect, getStudentById)
    .put(protect, authorize('ADMIN'), updateStudent)
    .delete(protect, authorize('ADMIN'), deleteStudent);

module.exports = router;
