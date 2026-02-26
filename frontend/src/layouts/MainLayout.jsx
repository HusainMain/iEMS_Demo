import { Outlet, Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { LogOut, User as UserIcon, BookOpen, Clock, Users, Home } from 'lucide-react';

const MainLayout = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    const getNavLinks = () => {
        if (!user) return [];

        const baseLinks = [
            { name: 'Dashboard', path: `/${user.role.toLowerCase()}-dashboard`, icon: Home }
        ];

        switch (user.role) {
            case 'ADMIN':
                return [...baseLinks, { name: 'Users', path: '/admin-dashboard', icon: Users }];
            case 'TEACHER':
                return [...baseLinks, { name: 'Classes', path: '/teacher-dashboard', icon: BookOpen }];
            case 'STUDENT':
                return [...baseLinks, { name: 'Timetable', path: '/student-dashboard', icon: Clock }];
            default:
                return baseLinks;
        }
    };

    return (
        <div className="flex h-screen bg-gray-50">
            {/* Sidebar */}
            <aside className="w-64 bg-white border-r shadow-sm flex flex-col">
                <div className="p-6 border-b flex items-center justify-center">
                    <h1 className="text-2xl font-bold text-indigo-600 tracking-tight">iEMS</h1>
                </div>

                <nav className="flex-1 p-4 space-y-2">
                    {getNavLinks().map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className="flex items-center gap-3 px-4 py-3 text-gray-700 rounded-lg hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
                        >
                            <link.icon size={20} />
                            <span className="font-medium">{link.name}</span>
                        </Link>
                    ))}
                </nav>

                <div className="p-4 border-t">
                    <div className="flex items-center gap-3 px-4 py-3 mb-2 rounded-lg bg-gray-50">
                        <div className="p-2 bg-indigo-100 rounded-full">
                            <UserIcon size={16} className="text-indigo-600" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-sm font-semibold text-gray-800">{user?.name}</span>
                            <span className="text-xs text-gray-500 capitalize">{user?.role?.toLowerCase()}</span>
                        </div>
                    </div>
                    <button
                        onClick={handleLogout}
                        className="w-full flex items-center justify-center gap-2 px-4 py-2 text-red-600 bg-red-50 hover:bg-red-100 rounded-lg transition-colors font-medium text-sm"
                    >
                        <LogOut size={16} />
                        Logout
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 overflow-y-auto">
                <header className="bg-white px-8 py-4 border-b shadow-sm sticky top-0 z-10 flex justify-between items-center">
                    <h2 className="text-xl font-semibold text-gray-800 capitalize">
                        {user?.role?.toLowerCase()} Portal
                    </h2>
                </header>
                <div className="p-8">
                    <Outlet />
                </div>
            </main>
        </div>
    );
};

export default MainLayout;
