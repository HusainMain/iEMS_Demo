import { Outlet, Link, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { LogOut, User as UserIcon, BookOpen, Clock, Users, Home, GraduationCap, LayoutDashboard, CalendarDays, FileText, Settings, MessageSquare, DollarSign, Award, Heart, Shield, Bell, Search, Menu } from 'lucide-react';

const MainLayout = () => {
    const { user, logout } = useAuth();
    const location = useLocation();

    const handleLogout = () => {
        logout();
    };

    const getNavLinks = () => {
        if (!user) return [];

        const dashboardPath = `/${user.role.toLowerCase()}-dashboard`;
        const isActive = (path) => location.pathname === path || location.pathname.startsWith(`${path}/`);

        const createLink = (name, path, icon) => ({ name, path, icon, active: isActive(path) });

        switch (user.role) {
            case 'ADMIN':
                return [
                    createLink('Dashboard', dashboardPath, LayoutDashboard),
                    createLink('Students', '/students', Users),
                    createLink('Teachers', '/teachers', UserIcon),
                    createLink('Academics', '/academics', BookOpen),
                    createLink('Finance', '/finance', DollarSign),
                    createLink('Reports', '/reports', FileText),
                    createLink('Calendar', '/calendar', CalendarDays),
                    createLink('Messages', '/messages', MessageSquare),
                    createLink('Settings', '/settings', Settings),
                ];
            case 'TEACHER':
                return [
                    createLink('Dashboard', dashboardPath, LayoutDashboard),
                    createLink('My Classes', '/teacher/classes', BookOpen),
                    createLink('Attendance', '/teacher/attendance', Clock),
                    createLink('Grades', '/teacher/grades', FileText),
                    createLink('Schedule', '/teacher/schedule', CalendarDays),
                    createLink('Messages', '/teacher/messages', MessageSquare),
                    createLink('Reports', '/teacher/reports', FileText),
                    createLink('Settings', '/teacher/settings', Settings),
                ];
            case 'STUDENT':
                return [
                    createLink('Dashboard', dashboardPath, LayoutDashboard),
                    createLink('My Courses', '/student/courses', BookOpen),
                    createLink('Grades', '/student/grades', FileText),
                    createLink('Assignments', '/student/assignments', FileText),
                    createLink('Schedule', '/student/schedule', CalendarDays),
                    createLink('Achievements', '/student/achievements', Award),
                    createLink('Messages', '/student/messages', MessageSquare),
                    createLink('Settings', '/student/settings', Settings),
                ];
            case 'PARENT':
                return [
                    createLink('Dashboard', dashboardPath, LayoutDashboard),
                    createLink('My Children', '/parent/children', Heart),
                    createLink('Academics', '/parent/academics', BookOpen),
                    createLink('Attendance', '/parent/attendance', Clock),
                    createLink('Fee Status', '/parent/fees', DollarSign),
                    createLink('Calendar', '/parent/calendar', CalendarDays),
                    createLink('Messages', '/parent/messages', MessageSquare),
                    createLink('Settings', '/parent/settings', Settings),
                ];
            default:
                return [createLink('Dashboard', dashboardPath, Home)];
        }
    };

    const getInitials = (name) => {
        if (!name) return 'U';
        return name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
    };

    return (
        <div className="flex h-screen bg-[#f8f9fc] overflow-hidden">
            {/* Sidebar */}
            <aside className="w-[260px] bg-[#021f3a] text-white flex flex-col hidden md:flex h-full shadow-xl z-20 transition-all duration-300">
                <div className="h-20 flex items-center px-6 gap-3 pt-2">
                    <div className="bg-[#0052cc] p-2 rounded-xl shadow-lg border border-blue-400/20">
                        <GraduationCap size={24} className="text-white" />
                    </div>
                    <span className="text-xl font-bold tracking-wide">iEMS</span>
                </div>

                <div className="flex-1 overflow-y-auto px-4 py-6 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent">
                    <nav className="space-y-1.5">
                        {getNavLinks().map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`flex items-center gap-3.5 px-4 py-3 rounded-xl transition-all duration-200 group relative ${link.active
                                        ? 'bg-[#0066ff] text-white shadow-md'
                                        : 'text-gray-400 hover:bg-white/5 hover:text-white'
                                    }`}
                            >
                                <link.icon size={20} className={link.active ? 'text-white' : 'text-gray-400 group-hover:text-blue-400 transition-colors'} strokeWidth={link.active ? 2.5 : 2} />
                                <span className="font-semibold text-[15px]">{link.name}</span>
                                {link.active && (
                                    <div className="absolute right-2 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-white"></div>
                                )}
                            </Link>
                        ))}
                    </nav>
                </div>

                <div className="p-4 bg-[#01182c] border-t border-white/5">
                    <div className="flex items-center gap-3 mb-4 px-2">
                        <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-sm font-bold text-white shadow-inner flex-shrink-0 border border-blue-400">
                            {getInitials(user?.name)}
                        </div>
                        <div className="flex flex-col min-w-0 overflow-hidden">
                            <span className="text-sm font-bold text-white truncate">{user?.name || 'User Name'}</span>
                            <span className="text-xs text-blue-300 truncate capitalize">{user?.role?.toLowerCase() || 'Role'}</span>
                        </div>
                    </div>
                    <button
                        onClick={handleLogout}
                        className="w-full flex items-center gap-3 px-4 py-2.5 text-gray-400 hover:text-white hover:bg-white/5 rounded-xl transition-colors font-medium text-sm group"
                    >
                        <LogOut size={18} className="group-hover:text-red-400 transition-colors" />
                        Sign Out
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 flex flex-col min-w-0 overflow-hidden relative">
                <header className="h-20 bg-white border-b border-gray-100 flex items-center justify-between px-6 lg:px-10 z-10 shrink-0 sticky top-0">
                    <div className="flex items-center gap-4">
                        <button className="md:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-lg">
                            <Menu size={24} />
                        </button>
                        <h2 className="text-2xl font-bold text-gray-900 hidden sm:block tracking-tight">
                            {user?.role === 'ADMIN' ? 'Admin Dashboard' :
                                user?.role === 'TEACHER' ? 'Teacher Dashboard' :
                                    user?.role === 'STUDENT' ? 'Student Dashboard' :
                                        'Parent Dashboard'}
                            <div className="text-sm font-medium text-gray-500 mt-0.5 tracking-normal">
                                {user?.role === 'ADMIN' ? `Welcome back, ${user?.name || 'Admin'}` :
                                    user?.role === 'TEACHER' ? `Good morning, ${user?.name || 'Teacher'}` :
                                        `Welcome, ${user?.name || 'User'}`}
                            </div>
                        </h2>
                    </div>

                    <div className="flex items-center gap-6">
                        <div className="hidden lg:flex relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                            <input
                                type="text"
                                placeholder="Search..."
                                className="pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all w-64 text-gray-700 font-medium"
                            />
                        </div>
                        <div className="relative cursor-pointer">
                            <Bell className="text-gray-500 hover:text-gray-800 transition-colors" size={24} />
                            <span className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-red-500 text-white text-[11px] font-bold flex items-center justify-center rounded-full border-2 border-white shadow-sm">3</span>
                        </div>
                    </div>
                </header>

                <div className="flex-1 overflow-auto bg-[#f8f9fc] p-6 lg:p-10 scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-transparent">
                    <Outlet />
                </div>
            </main>
        </div>
    );
};

export default MainLayout;
