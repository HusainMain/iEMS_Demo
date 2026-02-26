import { Outlet } from 'react-router-dom';

const TeacherDashboard = () => {
    return (
        <div className="space-y-6 animate-fade-in">
            <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">Teacher Portal</h1>
            <p className="text-gray-500 mt-2">Manage your classes, attendance, and student performance.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                {/* Cards with subtle gradient backgrounds for a premium feel */}
                <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-2xl shadow-sm border border-blue-100 hover:shadow-md transition-all pt-8 relative overflow-hidden">
                    <div className="absolute -right-4 -top-4 w-24 h-24 bg-blue-100 rounded-full opacity-50 blur-xl"></div>
                    <h3 className="text-sm font-medium text-blue-800 uppercase tracking-wider relative z-10">Classes Today</h3>
                    <div className="mt-4 flex items-baseline text-4xl font-extrabold text-blue-600 relative z-10">
                        4
                        <span className="ml-2 text-sm font-medium text-blue-500">remaining</span>
                    </div>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-white p-6 rounded-2xl shadow-sm border border-purple-100 hover:shadow-md transition-all pt-8 relative overflow-hidden">
                    <div className="absolute -right-4 -top-4 w-24 h-24 bg-purple-100 rounded-full opacity-50 blur-xl"></div>
                    <h3 className="text-sm font-medium text-purple-800 uppercase tracking-wider relative z-10">Unmarked Attendance</h3>
                    <div className="mt-4 flex items-baseline text-4xl font-extrabold text-purple-600 relative z-10">
                        2
                        <span className="ml-2 text-sm font-medium text-purple-500">classes</span>
                    </div>
                </div>
            </div>

            <div className="mt-8 bg-white/80 backdrop-blur-md rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col md:flex-row gap-4 items-center justify-between">
                <div>
                    <h3 className="text-xl font-bold text-gray-800">Quick Actions</h3>
                    <p className="text-sm text-gray-500 mt-1">Easily access your most used features.</p>
                </div>
                <div className="flex gap-4 w-full md:w-auto">
                    <button className="flex-1 md:flex-none px-6 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-sm font-medium">Mark Attendance</button>
                    <button className="flex-1 md:flex-none px-6 py-2.5 bg-white border border-gray-200 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors shadow-sm font-medium">Enter Marks</button>
                </div>
            </div>

            <Outlet />
        </div>
    );
};

export default TeacherDashboard;
