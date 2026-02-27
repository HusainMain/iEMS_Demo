import { Outlet } from 'react-router-dom';
import { BookOpen, Users, Clock, FileText, TrendingUp, TrendingDown } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';

const TeacherDashboard = () => {
    // Mock data for charts
    const performanceData = [
        { subject: '10A', avg: 82 },
        { subject: '10B', avg: 78 },
        { subject: '11B', avg: 85 },
        { subject: '12A', avg: 76 },
        { subject: '12B', avg: 88 },
        { subject: '12C', avg: 80 },
    ];

    const competencyData = [
        { subject: 'Algebra', A: 90, fullMark: 100 },
        { subject: 'Geometry', A: 85, fullMark: 100 },
        { subject: 'Calculus', A: 70, fullMark: 100 },
        { subject: 'Statistics', A: 80, fullMark: 100 },
        { subject: 'Trigonometry', A: 85, fullMark: 100 },
        { subject: 'Logic', A: 75, fullMark: 100 },
    ];

    return (
        <div className="space-y-6 animate-fade-in w-full max-w-7xl mx-auto">
            {/* Top Stat Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow relative overflow-hidden group">
                    <div className="flex justify-between items-start">
                        <div>
                            <p className="text-sm font-semibold text-gray-500 mb-1">My Classes</p>
                            <h3 className="text-3xl font-extrabold text-gray-900">6</h3>
                            <p className="text-sm font-medium text-gray-500 mt-2">
                                All sections active
                            </p>
                        </div>
                        <div className="p-3 bg-blue-50 text-blue-600 rounded-xl group-hover:scale-110 transition-transform">
                            <BookOpen size={24} />
                        </div>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow relative overflow-hidden group">
                    <div className="flex justify-between items-start">
                        <div>
                            <p className="text-sm font-semibold text-gray-500 mb-1">Total Students</p>
                            <h3 className="text-3xl font-extrabold text-gray-900">187</h3>
                            <p className="text-sm font-medium text-emerald-600 mt-2 flex items-center gap-1">
                                <TrendingUp size={14} /> +4 new enrollments
                            </p>
                        </div>
                        <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl group-hover:scale-110 transition-transform">
                            <Users size={24} />
                        </div>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow relative overflow-hidden group">
                    <div className="flex justify-between items-start">
                        <div>
                            <p className="text-sm font-semibold text-gray-500 mb-1">Avg Attendance</p>
                            <h3 className="text-3xl font-extrabold text-gray-900">92.4%</h3>
                            <p className="text-sm font-medium text-emerald-600 mt-2 flex items-center gap-1">
                                <TrendingUp size={14} /> +1.3% vs last week
                            </p>
                        </div>
                        <div className="p-3 bg-orange-50 text-orange-500 rounded-xl group-hover:scale-110 transition-transform">
                            <Clock size={24} />
                        </div>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow relative overflow-hidden group">
                    <div className="flex justify-between items-start">
                        <div>
                            <p className="text-sm font-semibold text-gray-500 mb-1">Pending Grades</p>
                            <h3 className="text-3xl font-extrabold text-gray-900">23</h3>
                            <p className="text-sm font-medium text-red-500 mt-2 flex items-center gap-1">
                                <TrendingDown size={14} /> 5 due today
                            </p>
                        </div>
                        <div className="p-3 bg-red-50 text-red-500 rounded-xl group-hover:scale-110 transition-transform">
                            <FileText size={24} />
                        </div>
                    </div>
                </div>
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="text-lg font-bold text-gray-900">Class Average Performance</h3>
                    </div>
                    <div className="h-72 w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={performanceData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                                <XAxis dataKey="subject" axisLine={false} tickLine={false} tick={{ fill: '#6B7280', fontSize: 12 }} dy={10} />
                                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#6B7280', fontSize: 12 }} domain={[60, 100]} />
                                <RechartsTooltip
                                    cursor={{ fill: '#F3F4F6' }}
                                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                                />
                                <Bar dataKey="avg" fill="#0052cc" radius={[4, 4, 0, 0]} barSize={40} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="text-lg font-bold text-gray-900">Student Competency by Topic</h3>
                    </div>
                    <div className="h-72 w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <RadarChart cx="50%" cy="50%" outerRadius="70%" data={competencyData}>
                                <PolarGrid stroke="#E5E7EB" />
                                <PolarAngleAxis dataKey="subject" tick={{ fill: '#6B7280', fontSize: 12 }} />
                                <PolarRadiusAxis angle={30} domain={[0, 100]} tick={{ fill: '#9CA3AF', fontSize: 10 }} />
                                <Radar name="Competency" dataKey="A" stroke="#10B981" fill="#10B981" fillOpacity={0.3} />
                                <RechartsTooltip
                                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                                />
                            </RadarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>

            <Outlet />
        </div>
    );
};

export default TeacherDashboard;
