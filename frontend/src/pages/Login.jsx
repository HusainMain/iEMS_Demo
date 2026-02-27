import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { LogIn, GraduationCap, Users, Building, Activity, Eye, EyeOff } from 'lucide-react';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('STUDENT');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    const { login, user } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            navigate(`/${user.role.toLowerCase()}-dashboard`);
        }
    }, [user, navigate]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setError('');
            await login(email, password);
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className="min-h-screen flex bg-white">
            {/* Left Side: Branding & Stats (Hidden on small screens) */}
            <div className="hidden lg:flex lg:w-1/2 bg-[#0052cc] text-white p-12 flex-col justify-center relative overflow-hidden">
                {/* Decorative circles */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full translate-x-1/2 -translate-y-1/2 blur-2xl"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-white opacity-5 rounded-full -translate-x-1/4 translate-y-1/4 blur-3xl"></div>

                <div className="relative z-10 max-w-lg mx-auto w-full">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="bg-white/20 p-2 rounded-lg backdrop-blur-sm">
                            <GraduationCap size={28} className="text-white" />
                        </div>
                        <h1 className="text-2xl font-bold tracking-wider">iEMS</h1>
                    </div>

                    <h2 className="text-5xl font-extrabold leading-tight mb-6">
                        Integrated Education Management System
                    </h2>

                    <p className="text-lg text-blue-100 mb-12 leading-relaxed">
                        Streamline student management, academic administration, communication, and data analysis — all in one platform.
                    </p>

                    <div className="grid grid-cols-2 gap-6">
                        <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/10 hover:bg-white/20 transition-all duration-300">
                            <div className="text-3xl font-bold mb-1">12,500+</div>
                            <div className="text-sm text-blue-100 font-medium">Students Managed</div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/10 hover:bg-white/20 transition-all duration-300">
                            <div className="text-3xl font-bold mb-1">85+</div>
                            <div className="text-sm text-blue-100 font-medium">Institutions</div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/10 hover:bg-white/20 transition-all duration-300">
                            <div className="text-3xl font-bold mb-1">1,200+</div>
                            <div className="text-sm text-blue-100 font-medium">Active Teachers</div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/10 hover:bg-white/20 transition-all duration-300">
                            <div className="text-3xl font-bold mb-1">99.9%</div>
                            <div className="text-sm text-blue-100 font-medium">Uptime</div>
                        </div>
                    </div>

                    <div className="mt-12 flex items-center gap-2 text-sm text-blue-200">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                        Enterprise-grade security with 256-bit encryption
                    </div>
                </div>
            </div>

            {/* Right Side: Login Form */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-8 sm:p-12 lg:p-24 bg-gray-50/50 relative">
                {/* Mobile Header elements */}
                <div className="absolute top-8 left-8 flex items-center gap-2 lg:hidden">
                    <div className="bg-[#0052cc] p-1.5 rounded-md">
                        <GraduationCap size={20} className="text-white" />
                    </div>
                    <span className="font-bold text-gray-900 text-lg">iEMS</span>
                </div>

                <div className="w-full max-w-md bg-white p-8 sm:p-10 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-bold text-gray-900 mb-3 tracking-tight">Welcome Back</h2>
                        <p className="text-gray-500">Sign in to your iEMS account to continue</p>
                    </div>

                    <form className="space-y-6" onSubmit={handleSubmit}>
                        {error && (
                            <div className="bg-red-50 border-l-4 border-red-500 text-red-700 p-4 rounded-md text-sm animate-fade-in shadow-sm">
                                {error}
                            </div>
                        )}

                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">Role</label>
                            <div className="relative">
                                <select
                                    className="appearance-none block w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-[#75a3e7] focus:border-transparent sm:text-sm text-gray-700 font-medium transition-all"
                                    value={role}
                                    onChange={(e) => setRole(e.target.value)}
                                >
                                    <option value="STUDENT">Student</option>
                                    <option value="TEACHER">Teacher</option>
                                    <option value="ADMIN">Administrator</option>
                                    <option value="PARENT">Parent</option>
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                </div>
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                            <input
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="block w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#75a3e7] focus:border-transparent sm:text-sm transition-all"
                                placeholder="your.email@institution.edu"
                            />
                        </div>

                        <div>
                            <div className="flex items-center justify-between mb-2">
                                <label className="block text-sm font-semibold text-gray-700">Password</label>
                                <a href="#" className="text-sm font-medium text-[#0052cc] hover:text-[#0042a3] transition-colors">Forgot password?</a>
                            </div>
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="block w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#75a3e7] focus:border-transparent sm:text-sm transition-all"
                                    placeholder="Enter your password"
                                />
                                <button type="button"
                                    className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600 transition-colors"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                </button>
                            </div>
                        </div>

                        <div className="pt-2">
                            <button
                                type="submit"
                                className="w-full flex justify-center py-3.5 px-4 border border-transparent rounded-xl shadow-sm text-sm font-bold text-white bg-[#75a3e7] hover:bg-[#628ecf] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#75a3e7] transition-all transform active:scale-[0.99]"
                            >
                                Sign In
                            </button>
                        </div>
                    </form>

                    <p className="mt-8 text-center text-xs text-gray-500">
                        By signing in, you agree to our <a href="#" className="text-[#0052cc] hover:underline">Terms of Service</a> and <a href="#" className="text-[#0052cc] hover:underline">Privacy Policy</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
