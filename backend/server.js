const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const { errorHandler } = require('./middleware/errorMiddleware');

// Load environment variables
dotenv.config();

// Connect to database
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/api/v1/auth', require('./routes/authRoutes'));
app.use('/api/v1/students', require('./routes/studentRoutes'));
app.use('/api/v1/attendance', require('./routes/attendanceRoutes'));
app.use('/api/v1/marks', require('./routes/marksRoutes'));
app.use('/api/v1/timetable', require('./routes/timetableRoutes'));
app.use('/api/v1/fees', require('./routes/feesRoutes'));
app.use('/api/v1/announcements', require('./routes/announcementRoutes'));

app.get('/', (req, res) => {
    res.send('iEMS API is running...');
});

// Error Middleware
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});
