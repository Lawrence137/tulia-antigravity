import { useNavigate, Link } from 'react-router-dom';
import { Heart, Lock, ArrowRight, Stethoscope } from 'lucide-react';
import { motion } from 'framer-motion';

const CounselorLogin = () => {
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        // Simulate login
        navigate('/counselor');
    };

    return (
        <div className="min-h-screen bg-[var(--color-background)] flex">
            {/* Left Side - Visual */}
            <div className="hidden lg:flex w-1/2 bg-[var(--color-primary)] relative items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-black/20 z-10" />
                <img
                    src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=2000&auto=format&fit=crop"
                    alt="Counselor meeting"
                    className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-overlay"
                />

                <div className="relative z-20 max-w-lg px-12 text-white">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-8">
                        <Heart size={32} className="text-white" />
                    </div>
                    <h1 className="text-4xl font-display font-bold mb-6">Empower Your Practice</h1>
                    <p className="text-lg text-white/90 leading-relaxed mb-8">
                        Join Kenya's leading digital mental health platform. Manage clients, automate billing, and focus on what you do best—healing.
                    </p>
                    <div className="flex gap-4">
                        <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
                            <Lock size={16} /> Secure Records
                        </div>
                        <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
                            <Stethoscope size={16} /> Verified Network
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Side - Form */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-white dark:bg-zinc-900">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-md w-full"
                >
                    <div className="mb-10">
                        <h2 className="text-3xl font-display font-bold text-gray-900 dark:text-white mb-2">Counselor Login</h2>
                        <p className="text-gray-600 dark:text-gray-400">Access your secure portal and patient dashboard.</p>
                    </div>

                    <form onSubmit={handleLogin} className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Professional Email / License ID</label>
                            <input
                                type="text"
                                className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-zinc-800 border-gray-200 dark:border-zinc-700 focus:ring-2 focus:ring-[var(--color-primary)] outline-none transition-all"
                                placeholder="dr.name@example.com"
                            />
                        </div>

                        <div>
                            <div className="flex justify-between items-center mb-2">
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Password</label>
                                <a href="#" className="text-sm font-medium text-[var(--color-primary)] hover:underline">Forgot?</a>
                            </div>
                            <input
                                type="password"
                                className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-zinc-800 border-gray-200 dark:border-zinc-700 focus:ring-2 focus:ring-[var(--color-primary)] outline-none transition-all"
                                placeholder="••••••••"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full flex items-center justify-center py-4 px-6 rounded-xl bg-[var(--color-primary)] text-white font-bold hover:bg-[#234b24] transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                        >
                            Log In to Portal
                            <ArrowRight size={20} className="ml-2" />
                        </button>
                    </form>

                    <p className="mt-8 text-center text-gray-600 dark:text-gray-400">
                        New to Tulia?{' '}
                        <Link to="/counselor/signup" className="font-bold text-[var(--color-primary)] hover:underline">
                            Apply to Join Network
                        </Link>
                    </p>
                </motion.div>
            </div>
        </div>
    );
};

export default CounselorLogin;
