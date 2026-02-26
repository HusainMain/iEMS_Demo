import { Outlet } from 'react-router-dom';

const AdminDashboard = () => {
    return (
        <div className="space-y-6 animate-fade-in">
            <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">Admin Overview</h1>
            <p className="text-gray-500 mt-2">Manage users, schedules, and platform administration.</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                <div className="bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                    <h3 className="text-lg font-semibold text-gray-800">Total Users</h3>
                    <p className="text-3xl font-bold text-indigo-600 mt-2">1,248</p>
                </div>
                <div className="bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                    <h3 className="text-lg font-semibold text-gray-800">Active Classes</h3>
                    <p className="text-3xl font-bold text-green-500 mt-2">42</p>
                </div>
                <div className="bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                    <h3 className="text-lg font-semibold text-gray-800">Pending Fees</h3>
                    <p className="text-3xl font-bold text-red-500 mt-2">156</p>
                </div>
            </div>

            <div className="mt-8 bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Quick Actions</h3>
                <div className="flex gap-4">
                    <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors shadow-sm font-medium">Add User</button>
                    <button className="px-4 py-2 bg-white border border-gray-200 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors shadow-sm font-medium">Manage Timetable</button>
                </div>
            </div>

            <Outlet />
        </div>
    );
};

export default AdminDashboard;
