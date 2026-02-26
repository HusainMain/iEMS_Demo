import { Outlet } from 'react-router-dom';

const ParentDashboard = () => {
    return (
        <div className="space-y-6 animate-fade-in">
            <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">Parent Portal</h1>
            <p className="text-gray-500 mt-2">Keep track of your child's academic journey.</p>

            <div className="mt-6 bg-white rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-100 p-8">
                <div className="flex items-center gap-4 border-b border-gray-100 pb-6 mb-6">
                    <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center text-xl font-bold text-indigo-600">
                        JS
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold text-gray-800">John Smith</h2>
                        <p className="text-gray-500">Class 10-A • Roll No. 42</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-4 flex justify-between items-center">
                            Recent Performance
                            <span className="text-sm text-indigo-600 hover:text-indigo-800 cursor-pointer">View full report →</span>
                        </h3>
                        <div className="space-y-3">
                            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                                <span className="font-medium text-gray-700">Science Mid-term</span>
                                <span className="font-bold text-emerald-600">88/100</span>
                            </div>
                            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                                <span className="font-medium text-gray-700">English Quiz</span>
                                <span className="font-bold text-emerald-600">18/20</span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-4">Fee Status</h3>
                        <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
                            <div className="flex justify-between items-start">
                                <div>
                                    <p className="text-sm font-medium text-amber-800">Term 2 Fees</p>
                                    <p className="text-2xl font-bold text-amber-900 mt-1">$450.00</p>
                                </div>
                                <span className="px-3 py-1 bg-amber-200 text-amber-800 text-xs font-bold rounded-full uppercase tracking-wider">Pending</span>
                            </div>
                            <button className="mt-4 w-full py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-lg font-medium transition-colors shadow-sm text-sm">
                                Pay Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <Outlet />
        </div>
    );
};

export default ParentDashboard;
