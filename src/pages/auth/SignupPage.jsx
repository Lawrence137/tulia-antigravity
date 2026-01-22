import { useNavigate, Link } from 'react-router-dom';
import { User, Mail, Lock, ArrowRight } from 'lucide-react';

const SignupPage = () => {
    const navigate = useNavigate();

    const handleSignup = (e) => {
        e.preventDefault();
        // Simulate Signup -> Login -> Dashboard
        navigate('/dashboard');
    };

    return (
        <div className="min-h-screen bg-[var(--color-background)] flex items-center justify-center p-4">
            <div className="max-w-lg w-full bg-white dark:bg-zinc-900 rounded-2xl shadow-xl border border-gray-100 dark:border-zinc-800 overflow-hidden">
                <div className="p-8 md:p-12">
                    <div className="text-center mb-10">
                        <h1 className="text-3xl font-display font-bold text-gray-900 dark:text-white mb-2">Create Account</h1>
                        <p className="text-gray-600 dark:text-gray-400">Start your journey to mental wellness today.</p>
                    </div>

                    <form onSubmit={handleSignup} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">First Name</label>
                                <div className="relative">
                                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                                    <input
                                        type="text"
                                        className="w-full pl-12 pr-4 py-3 rounded-xl bg-gray-50 dark:bg-zinc-800 border-gray-200 dark:border-zinc-700 focus:ring-2 focus:ring-[var(--color-primary)] outline-none"
                                        placeholder="Jane"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Last Name</label>
                                <div className="relative">
                                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                                    <input
                                        type="text"
                                        className="w-full pl-12 pr-4 py-3 rounded-xl bg-gray-50 dark:bg-zinc-800 border-gray-200 dark:border-zinc-700 focus:ring-2 focus:ring-[var(--color-primary)] outline-none"
                                        placeholder="Doe"
                                    />
                                </div>
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email Address</label>
                            <div className="relative">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                                <input
                                    type="email"
                                    className="w-full pl-12 pr-4 py-3 rounded-xl bg-gray-50 dark:bg-zinc-800 border-gray-200 dark:border-zinc-700 focus:ring-2 focus:ring-[var(--color-primary)] outline-none"
                                    placeholder="you@example.com"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Password</label>
                            <div className="relative">
                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                                <input
                                    type="password"
                                    className="w-full pl-12 pr-4 py-3 rounded-xl bg-gray-50 dark:bg-zinc-800 border-gray-200 dark:border-zinc-700 focus:ring-2 focus:ring-[var(--color-primary)] outline-none"
                                    placeholder="••••••••"
                                />
                            </div>
                            <p className="text-xs text-gray-500 mt-1">Must be at least 8 characters</p>
                        </div>

                        <button
                            type="submit"
                            className="w-full flex items-center justify-center py-4 px-6 rounded-xl bg-[var(--color-primary)] text-white font-bold hover:bg-[#234b24] transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                        >
                            Create Account
                            <ArrowRight size={20} className="ml-2" />
                        </button>
                    </form>

                    <p className="mt-8 text-center text-gray-600 dark:text-gray-400">
                        Already have an account?{' '}
                        <Link to="/login" className="font-bold text-[var(--color-primary)] hover:underline">
                            Log In
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignupPage;
