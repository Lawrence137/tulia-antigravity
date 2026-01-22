import { useNavigate, Link } from 'react-router-dom';
import { CheckCircle, Upload, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const CounselorSignup = () => {
    const navigate = useNavigate();

    const handleSignup = (e) => {
        e.preventDefault();
        // Simulate Signup
        navigate('/counselor');
    };

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-zinc-950 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-xl mx-auto">
                <div className="text-center mb-10">
                    <h1 className="text-4xl font-display font-bold text-gray-900 dark:text-white mb-4">Join the Network</h1>
                    <p className="text-lg text-gray-600 dark:text-gray-400">Apply to become a verified Tulia specialist.</p>
                </div>

                <div className="bg-white dark:bg-zinc-900 rounded-3xl shadow-xl border border-gray-100 dark:border-zinc-800 overflow-hidden">
                    <div className="p-8 md:p-12">
                        <form onSubmit={handleSignup} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">First Name</label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-3 rounded-xl bg-white dark:bg-zinc-800 border-gray-200 dark:border-zinc-700 focus:ring-2 focus:ring-[var(--color-primary)] outline-none"
                                        placeholder="Jane"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Last Name</label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-zinc-800 border-gray-200 dark:border-zinc-700 focus:ring-2 focus:ring-[var(--color-primary)] outline-none"
                                        placeholder="Doe"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">License Number (KVB/KCA)</label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-zinc-800 border-gray-200 dark:border-zinc-700 focus:ring-2 focus:ring-[var(--color-primary)] outline-none"
                                    placeholder="e.g. A-123456"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Primary Specialization</label>
                                <select className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-zinc-800 border-gray-200 dark:border-zinc-700 focus:ring-2 focus:ring-[var(--color-primary)] outline-none">
                                    <option>Clinical Psychology</option>
                                    <option>Counseling Psychology</option>
                                    <option>Marriage & Family Therapy</option>
                                    <option>Addiction Counseling</option>
                                </select>
                            </div>

                            <div className="border-t border-gray-100 dark:border-zinc-800 pt-6">
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-4">Upload Credentials</label>
                                <div className="border-2 border-dashed border-gray-300 dark:border-zinc-700 rounded-2xl p-8 text-center hover:border-[var(--color-primary)] transition-colors cursor-pointer bg-gray-50 dark:bg-zinc-800/50">
                                    <Upload className="mx-auto text-gray-400 mb-2" size={32} />
                                    <p className="text-sm text-gray-600 dark:text-gray-400">
                                        Drag & drop your Practicing License (PDF/Join)
                                    </p>
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="w-full py-4 px-6 rounded-xl bg-[var(--color-primary)] text-white font-bold hover:bg-[#234b24] transition-all shadow-lg text-lg"
                            >
                                Submit Application
                            </button>
                        </form>
                    </div>
                </div>

                <p className="mt-8 text-center text-gray-600 dark:text-gray-400">
                    Already have a portal account?{' '}
                    <Link to="/counselor/login" className="font-bold text-[var(--color-primary)] hover:underline">
                        Login here
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default CounselorSignup;
