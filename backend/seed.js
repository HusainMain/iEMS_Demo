const mongoose = require('mongoose');
const dotenv = require('dotenv');
const User = require('./models/User');
const connectDB = require('./config/db');

dotenv.config();
connectDB();

const seedAdmin = async () => {
    try {
        await User.deleteMany({ email: 'admin@iems.com' });

        await User.create({
            name: 'System Admin',
            email: 'admin@iems.com',
            password: 'password123',
            role: 'ADMIN'
        });

        console.log('Admin user seeded successfully. You can log in with:');
        console.log('Email: admin@iems.com');
        console.log('Password: password123');
        process.exit();
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};

seedAdmin();
