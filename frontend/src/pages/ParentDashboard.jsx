import { Outlet } from 'react-router-dom';
import { Heart, TrendingUp, CheckCircle, DollarSign, Award } from 'lucide-react';

const ParentDashboard = () => {
    return (
        <div className="space-y-6 animate-fade-in w-full max-w-7xl mx-auto">
            {/* Top Stat Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow relative overflow-hidden group">
                    <div className="flex justify-between items-start">
                        <div>
                            <p className="text-sm font-semibold text-gray-500 mb-1">Children Enrolled</p>
                            <h3 className="text-3xl font-extrabold text-gray-900">2</h3>
                            <p className="text-sm font-medium text-gray-500 mt-2">
                                Both active this semester
                            </p>
                        </div>
                        <div className="p-3 bg-blue-50 text-blue-600 rounded-xl group-hover:scale-110 transition-transform">
                            <Heart size={24} />
                        </div>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow relative overflow-hidden group">
                    <div className="flex justify-between items-start">
                        <div>
                            <p className="text-sm font-semibold text-gray-500 mb-1">Avg. GPA</p>
                            <h3 className="text-3xl font-extrabold text-gray-900">3.80</h3>
                            <p className="text-sm font-medium text-emerald-600 mt-2 flex items-center gap-1">
                                <TrendingUp size={14} /> +0.10 from last semester
                            </p>
                        </div>
                        <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl group-hover:scale-110 transition-transform">
                            <TrendingUp size={24} />
                        </div>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow relative overflow-hidden group">
                    <div className="flex justify-between items-start">
                        <div>
                            <p className="text-sm font-semibold text-gray-500 mb-1">Avg. Attendance</p>
                            <h3 className="text-3xl font-extrabold text-gray-900">96.5%</h3>
                            <p className="text-sm font-medium text-emerald-600 mt-2 flex items-center gap-1">
                                <TrendingUp size={14} /> Excellent
                            </p>
                        </div>
                        <div className="p-3 bg-orange-50 text-orange-500 rounded-xl group-hover:scale-110 transition-transform">
                            <CheckCircle size={24} />
                        </div>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow relative overflow-hidden group">
                    <div className="flex justify-between items-start">
                        <div>
                            <p className="text-sm font-semibold text-gray-500 mb-1">Pending Fees</p>
                            <h3 className="text-3xl font-extrabold text-gray-900">$3,650</h3>
                            <p className="text-sm font-medium text-red-500 mt-2 flex items-center gap-1">
                                <TrendingUp size={14} className="rotate-180" /> 2 payments due
                            </p>
                        </div>
                        <div className="p-3 bg-red-50 text-red-500 rounded-xl group-hover:scale-110 transition-transform">
                            <DollarSign size={24} />
                        </div>
                    </div>
                </div>
            </div>

            {/* Children Detail Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow relative overflow-hidden">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-xl font-bold text-blue-600 border border-blue-200">
                            AC
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900">Alex Chen</h2>
                            <p className="text-gray-500 font-medium">Grade 9 - Section B</p>
                        </div>
                        <div className="ml-auto bg-gray-50 px-3 py-1 rounded-full border border-gray-200 text-sm font-semibold text-gray-700">
                            Rank #12/45
                        </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4 mb-8">
                        <div className="text-center p-4 bg-gray-50 rounded-xl border border-gray-100">
                            <div className="text-2xl font-bold text-gray-900">3.72</div>
                            <div className="text-xs font-semibold text-gray-500 uppercase mt-1">GPA</div>
                        </div>
                        <div className="text-center p-4 bg-gray-50 rounded-xl border border-gray-100">
                            <div className="text-2xl font-bold text-gray-900">95%</div>
                            <div className="text-xs font-semibold text-gray-500 uppercase mt-1">Attendance</div>
                        </div>
                        <div className="text-center p-4 bg-gray-50 rounded-xl border border-gray-100">
                            <div className="text-2xl font-bold text-gray-900">#12</div>
                            <div className="text-xs font-semibold text-gray-500 uppercase mt-1">Class Rank</div>
                        </div>
                    </div>

                    <div>
                        <div className="flex justify-between text-sm font-semibold text-gray-700 mb-2">
                            <span>Semester Progress</span>
                            <span className="text-blue-600">65%</span>
                        </div>
                        <div className="w-full bg-gray-100 rounded-full h-2.5">
                            <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '65%' }}></div>
                        </div>
                        <p className="text-xs text-gray-500 mt-2">65% of semester completed</p>
                    </div>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow relative overflow-hidden">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center text-xl font-bold text-indigo-600 border border-indigo-200">
                            MC
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900">Mia Chen</h2>
                            <p className="text-gray-500 font-medium">Grade 6 - Section A</p>
                        </div>
                        <div className="ml-auto bg-gray-50 px-3 py-1 rounded-full border border-gray-200 text-sm font-semibold text-gray-700">
                            Rank #5/42
                        </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4 mb-8">
                        <div className="text-center p-4 bg-gray-50 rounded-xl border border-gray-100">
                            <div className="text-2xl font-bold text-gray-900">3.88</div>
                            <div className="text-xs font-semibold text-gray-500 uppercase mt-1">GPA</div>
                        </div>
                        <div className="text-center p-4 bg-gray-50 rounded-xl border border-gray-100">
                            <div className="text-2xl font-bold text-gray-900">98%</div>
                            <div className="text-xs font-semibold text-gray-500 uppercase mt-1">Attendance</div>
                        </div>
                        <div className="text-center p-4 bg-gray-50 rounded-xl border border-gray-100">
                            <div className="text-2xl font-bold text-gray-900">#5</div>
                            <div className="text-xs font-semibold text-gray-500 uppercase mt-1">Class Rank</div>
                        </div>
                    </div>

                    <div>
                        <div className="flex justify-between text-sm font-semibold text-gray-700 mb-2">
                            <span>Semester Progress</span>
                            <span className="text-blue-600">70%</span>
                        </div>
                        <div className="w-full bg-gray-100 rounded-full h-2.5">
                            <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '70%' }}></div>
                        </div>
                        <p className="text-xs text-gray-500 mt-2">70% of semester completed</p>
                    </div>
                </div>
            </div>

            <Outlet />
        </div>
    );
};

export default ParentDashboard;
