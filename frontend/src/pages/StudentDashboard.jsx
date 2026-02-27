import { Outlet } from 'react-router-dom';
import { BookOpen, FileText, TrendingUp, Trophy, CalendarClock } from 'lucide-react';
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer } from 'recharts';

const StudentDashboard = () => {
    // Mock data for charts
    const gpaData = [
        { name: 'Sep', gpa: 3.5 },
        { name: 'Oct', gpa: 3.6 },
        { name: 'Nov', gpa: 3.55 },
        { name: 'Dec', gpa: 3.7 },
        { name: 'Jan', gpa: 3.8 },
        { name: 'Feb', gpa: 3.85 },
    ];

    const studyData = [
        { name: 'Mon', hours: 4.5 },
        { name: 'Tue', hours: 3.2 },
        { name: 'Wed', hours: 5.1 },
        { name: 'Thu', hours: 3.8 },
        { name: 'Fri', hours: 4.0 },
        { name: 'Sat', hours: 6.2 },
        { name: 'Sun', hours: 2.5 },
    ];

    return (
        <div className="space-y-6 animate-fade-in w-full max-w-7xl mx-auto">
            {/* Top Stat Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow relative overflow-hidden group">
                    <div className="flex justify-between items-start">
                        <div>
                            <p className="text-sm font-semibold text-gray-500 mb-1">Current GPA</p>
                            <h3 className="text-3xl font-extrabold text-gray-900">3.85</h3>
                            <p className="text-sm font-medium text-emerald-600 mt-2 flex items-center gap-1">
                                <TrendingUp size={14} /> +0.15 from last semester
                            </p>
                        </div>
                        <div className="p-3 bg-blue-50 text-blue-600 rounded-xl group-hover:scale-110 transition-transform">
                            <TrendingUp size={24} />
                        </div>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow relative overflow-hidden group">
                    <div className="flex justify-between items-start">
                        <div>
                            <p className="text-sm font-semibold text-gray-500 mb-1">Enrolled Courses</p>
                            <h3 className="text-3xl font-extrabold text-gray-900">5</h3>
                            <p className="text-sm font-medium text-gray-500 mt-2">
                                All on track
                            </p>
                        </div>
                        <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl group-hover:scale-110 transition-transform">
                            <BookOpen size={24} />
                        </div>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow relative overflow-hidden group">
                    <div className="flex justify-between items-start">
                        <div>
                            <p className="text-sm font-semibold text-gray-500 mb-1">Assignments Due</p>
                            <h3 className="text-3xl font-extrabold text-gray-900">5</h3>
                            <p className="text-sm font-medium text-red-500 mt-2 flex items-center gap-1">
                                <CalendarClock size={14} /> 1 due today
                            </p>
                        </div>
                        <div className="p-3 bg-orange-50 text-orange-500 rounded-xl group-hover:scale-110 transition-transform">
                            <FileText size={24} />
                        </div>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow relative overflow-hidden group">
                    <div className="flex justify-between items-start">
                        <div>
                            <p className="text-sm font-semibold text-gray-500 mb-1">Achievements</p>
                            <h3 className="text-3xl font-extrabold text-gray-900">3</h3>
                            <p className="text-sm font-medium text-purple-600 mt-2">
                                1 more to unlock
                            </p>
                        </div>
                        <div className="p-3 bg-purple-50 text-purple-600 rounded-xl group-hover:scale-110 transition-transform">
                            <Trophy size={24} />
                        </div>
                    </div>
                </div>
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="text-lg font-bold text-gray-900">GPA Trend</h3>
                        <span className="px-2.5 py-1 bg-gray-100 text-gray-700 text-xs font-semibold rounded-md flex items-center gap-1">
                            <TrendingUp size={12} /> Improving
                        </span>
                    </div>
                    <div className="h-72 w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={gpaData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#6B7280', fontSize: 12 }} dy={10} />
                                <YAxis domain={[3.0, 4.0]} axisLine={false} tickLine={false} tick={{ fill: '#6B7280', fontSize: 12 }} />
                                <RechartsTooltip
                                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                                />
                                <Line type="monotone" dataKey="gpa" stroke="#0052cc" strokeWidth={3} dot={{ r: 5, fill: '#0052cc', strokeWidth: 2, stroke: '#fff' }} activeDot={{ r: 7 }} />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="text-lg font-bold text-gray-900">Study Hours This Week</h3>
                        <span className="text-sm font-bold text-gray-700">29.3 hrs</span>
                    </div>
                    <div className="h-72 w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={studyData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                                <defs>
                                    <linearGradient id="colorHours" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#10B981" stopOpacity={0.3} />
                                        <stop offset="95%" stopColor="#10B981" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#6B7280', fontSize: 12 }} dy={10} />
                                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#6B7280', fontSize: 12 }} />
                                <RechartsTooltip
                                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                                />
                                <Area type="monotone" dataKey="hours" stroke="#10B981" strokeWidth={3} fillOpacity={1} fill="url(#colorHours)" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>

            <Outlet />
        </div>
    );
};

export default StudentDashboard;
