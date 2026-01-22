import { useNavigate, Link } from 'react-router-dom';
import { Shield, Mail, Lock, ArrowRight } from 'lucide-react';

const LoginPage = () => {
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        navigate('/dashboard');
    };

    const handleSSOLogin = () => {
        // Simulate TEP SSO Login
        setTimeout(() => {
            navigate('/dashboard');
        }, 1000);
    };

    return (
        <div className="min-h-screen bg-[var(--color-background)] flex">
            {/* Visual Side */}
            <div className="hidden lg:flex w-1/2 bg-[#e8f5e9] relative items-center justify-center p-12 overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-primary)]/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
                <div className="relative z-10 max-w-lg">
                    <h1 className="text-4xl font-display font-bold text-gray-900 mb-6">Your Safe Space for Healing</h1>
                    <p className="text-lg text-gray-600 leading-relaxed mb-8">
                        "Tulia allows me to speak freely without fear. The counselors are kind, professional, and truly understand."
                    </p>
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-white border-2 border-white shadow-md overflow-hidden">
                            <img src="https://i.pravatar.cc/150?img=32" alt="User" />
                        </div>
                        <div>
                            <p className="font-bold text-gray-900">Sarah K.</p>
                            <p className="text-sm text-gray-500">Verified User</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Login Form Side */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-white dark:bg-zinc-900">
                <div className="max-w-md w-full">
                    <div className="text-center mb-10">
                        <div className="w-16 h-16 bg-[var(--color-primary)]/10 rounded-full flex items-center justify-center mx-auto mb-6 text-[var(--color-primary)]">
                            <Shield size={32} />
                        </div>
                        <h2 className="text-3xl font-display font-bold text-gray-900 dark:text-white mb-2">Welcome Back</h2>
                        <p className="text-gray-600 dark:text-gray-400">Login to access your sessions and resources.</p>
                    </div>

                    <form onSubmit={handleLogin} className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email Address</label>
                            <div className="relative">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                                <input
                                    type="email"
                                    className="w-full pl-12 pr-4 py-3 rounded-xl bg-gray-50 dark:bg-zinc-800 border-gray-200 dark:border-zinc-700 focus:ring-2 focus:ring-[var(--color-primary)] outline-none transition-all"
                                    placeholder="you@example.com"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex justify-between items-center mb-2">
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Password</label>
                                <a href="#" className="text-sm font-medium text-[var(--color-primary)] hover:underline">Forgot?</a>
                            </div>
                            <div className="relative">
                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                                <input
                                    type="password"
                                    className="w-full pl-12 pr-4 py-3 rounded-xl bg-gray-50 dark:bg-zinc-800 border-gray-200 dark:border-zinc-700 focus:ring-2 focus:ring-[var(--color-primary)] outline-none transition-all"
                                    placeholder="••••••••"
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full flex items-center justify-center py-4 px-6 rounded-xl bg-[var(--color-primary)] text-white font-bold hover:bg-[#234b24] transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                        >
                            Log In
                            <ArrowRight size={20} className="ml-2" />
                        </button>
                    </form>

                    <div className="relative my-8">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-200 dark:border-zinc-800"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-4 bg-white dark:bg-zinc-900 text-gray-500">Or continue with</span>
                        </div>
                    </div>

                    <button
                        onClick={handleSSOLogin}
                        className="w-full flex items-center justify-center gap-3 bg-[#0a66c2] text-white py-3.5 rounded-xl font-bold hover:bg-[#004182] transition-colors shadow-lg shadow-blue-900/10 mb-8"
                    >
                        <span className="font-bold text-xl">TEP</span>
                        <span>Continue with TEP SSO</span>
                    </button>

                    <p className="text-center text-gray-600 dark:text-gray-400">
                        Don't have an account?{' '}
                        <Link to="/signup" className="font-bold text-[var(--color-primary)] hover:underline">
                            Sign Up
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
