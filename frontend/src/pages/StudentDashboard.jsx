import { Outlet } from 'react-router-dom';

const StudentDashboard = () => {
    return (
        <div className="space-y-6 animate-fade-in">
            <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">Student Portal</h1>
            <p className="text-gray-500 mt-2">Welcome back! Here's an overview of your academic progress.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
                {/* Cards with subtle gradient backgrounds for a premium feel */}
                <div className="bg-gradient-to-br from-indigo-50 to-white p-6 rounded-2xl shadow-sm border border-indigo-100 hover:shadow-md transition-all pt-8">
                    <h3 className="text-sm font-medium text-indigo-800 uppercase tracking-wider">Attendance</h3>
                    <div className="mt-4 flex items-baseline text-4xl font-extrabold text-indigo-600">
                        92%
                        <span className="ml-2 text-sm font-medium text-indigo-500">this month</span>
                    </div>
                </div>

                <div className="bg-gradient-to-br from-emerald-50 to-white p-6 rounded-2xl shadow-sm border border-emerald-100 hover:shadow-md transition-all pt-8">
                    <h3 className="text-sm font-medium text-emerald-800 uppercase tracking-wider">Latest Grade</h3>
                    <div className="mt-4 flex items-baseline text-4xl font-extrabold text-emerald-600">
                        A-
                        <span className="ml-2 text-sm font-medium text-emerald-500">Mathematics</span>
                    </div>
                </div>
            </div>

            <div className="mt-8 bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Today's Schedule</h3>
                <div className="space-y-4">
                    <div className="flex items-center p-4 bg-gray-50 rounded-xl border border-gray-100">
                        <div className="flex-shrink-0 w-16 text-center border-r border-gray-200 pr-4">
                            <div className="text-sm font-bold text-gray-800">09:00</div>
                            <div className="text-xs text-gray-500">AM</div>
                        </div>
                        <div className="ml-4">
                            <h4 className="text-lg font-semibold text-gray-900">Physics 101</h4>
                            <p className="text-sm text-gray-500 mt-1">Room 302 • Dr. Smith</p>
                        </div>
                    </div>
                </div>
            </div>

            <Outlet />
        </div>
    );
};

export default StudentDashboard;
