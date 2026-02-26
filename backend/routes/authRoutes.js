const express = require('express');
const router = express.Router();
const {
    registerUser,
    loginUser,
    getMe,
} = require('../controllers/authController');
const { protect } = require('../middleware/authMiddleware');
const { authorize } = require('../middleware/roleMiddleware');

router.post('/register', protect, authorize('ADMIN'), registerUser);
router.post('/login', loginUser);
router.get('/me', protect, getMe);

module.exports = router;
