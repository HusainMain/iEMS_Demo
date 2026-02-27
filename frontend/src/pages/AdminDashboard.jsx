import { Outlet } from 'react-router-dom';
import { Users, UserPlus, BookOpen, DollarSign, TrendingUp } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer, LineChart, Line } from 'recharts';

const AdminDashboard = () => {
    // Mock data for charts
    const enrollmentData = [
        { name: 'Sep', students: 2000 },
        { name: 'Oct', students: 2150 },
        { name: 'Nov', students: 2100 },
        { name: 'Dec', students: 2200 },
        { name: 'Jan', students: 2350 },
        { name: 'Feb', students: 2520 },
    ];

    const revenueData = [
        { name: 'Sep', revenue: 310 },
        { name: 'Oct', revenue: 350 },
        { name: 'Nov', revenue: 320 },
        { name: 'Dec', revenue: 380 },
        { name: 'Jan', revenue: 420 },
        { name: 'Feb', revenue: 450 },
    ];

    return (
        <div className="space-y-6 animate-fade-in w-full max-w-7xl mx-auto">
            {/* Top Stat Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow relative overflow-hidden group">
                    <div className="flex justify-between items-start">
                        <div>
                            <p className="text-sm font-semibold text-gray-500 mb-1">Total Students</p>
                            <h3 className="text-3xl font-extrabold text-gray-900">2,520</h3>
                            <p className="text-sm font-medium text-emerald-600 mt-2 flex items-center gap-1">
                                <TrendingUp size={14} /> +8.2% from last month
                            </p>
                        </div>
                        <div className="p-3 bg-blue-50 text-blue-600 rounded-xl group-hover:scale-110 transition-transform">
                            <Users size={24} />
                        </div>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow relative overflow-hidden group">
                    <div className="flex justify-between items-start">
                        <div>
                            <p className="text-sm font-semibold text-gray-500 mb-1">Active Teachers</p>
                            <h3 className="text-3xl font-extrabold text-gray-900">186</h3>
                            <p className="text-sm font-medium text-emerald-600 mt-2 flex items-center gap-1">
                                <TrendingUp size={14} /> +3 new this month
                            </p>
                        </div>
                        <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl group-hover:scale-110 transition-transform">
                            <UserPlus size={24} />
                        </div>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow relative overflow-hidden group">
                    <div className="flex justify-between items-start">
                        <div>
                            <p className="text-sm font-semibold text-gray-500 mb-1">Active Courses</p>
                            <h3 className="text-3xl font-extrabold text-gray-900">124</h3>
                            <p className="text-sm font-medium text-gray-500 mt-2">
                                12 starting soon
                            </p>
                        </div>
                        <div className="p-3 bg-orange-50 text-orange-500 rounded-xl group-hover:scale-110 transition-transform">
                            <BookOpen size={24} />
                        </div>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow relative overflow-hidden group">
                    <div className="flex justify-between items-start">
                        <div>
                            <p className="text-sm font-semibold text-gray-500 mb-1">Revenue (MTD)</p>
                            <h3 className="text-3xl font-extrabold text-gray-900">$450K</h3>
                            <p className="text-sm font-medium text-emerald-600 mt-2 flex items-center gap-1">
                                <TrendingUp size={14} /> +12.5% from last month
                            </p>
                        </div>
                        <div className="p-3 bg-purple-50 text-purple-600 rounded-xl group-hover:scale-110 transition-transform">
                            <DollarSign size={24} />
                        </div>
                    </div>
                </div>
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="text-lg font-bold text-gray-900">Enrollment Trends</h3>
                        <span className="px-2.5 py-1 bg-gray-100 text-gray-700 text-xs font-semibold rounded-md flex items-center gap-1">
                            <TrendingUp size={12} /> +20%
                        </span>
                    </div>
                    <div className="h-72 w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={enrollmentData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#6B7280', fontSize: 12 }} dy={10} />
                                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#6B7280', fontSize: 12 }} />
                                <RechartsTooltip
                                    cursor={{ fill: '#F3F4F6' }}
                                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                                />
                                <Bar dataKey="students" fill="#0052cc" radius={[4, 4, 0, 0]} barSize={40} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="text-lg font-bold text-gray-900">Revenue Trend</h3>
                        <span className="px-2.5 py-1 bg-gray-100 text-gray-700 text-xs font-semibold rounded-md flex items-center gap-1">
                            <TrendingUp size={12} /> +12.5%
                        </span>
                    </div>
                    <div className="h-72 w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={revenueData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#6B7280', fontSize: 12 }} dy={10} />
                                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#6B7280', fontSize: 12 }} tickFormatter={(value) => `$${value}k`} />
                                <RechartsTooltip
                                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                                    formatter={(value) => [`$${value}k`, 'Revenue']}
                                />
                                <Line type="monotone" dataKey="revenue" stroke="#10B981" strokeWidth={3} dot={{ r: 5, fill: '#10B981', strokeWidth: 2, stroke: '#fff' }} activeDot={{ r: 7 }} />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>

            <Outlet />
        </div>
    );
};

export default AdminDashboard;
