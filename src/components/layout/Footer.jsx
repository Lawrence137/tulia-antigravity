import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-gray-50 dark:bg-zinc-900 pt-16 pb-8 border-t border-gray-100 dark:border-zinc-800 mt-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="space-y-4">
                        <Link to="/" className="flex items-center gap-2 font-display text-2xl font-bold text-[var(--color-primary)] dark:text-[var(--color-primary-light)]">
                            <div className="w-8 h-8 rounded-full bg-[var(--color-primary)] flex items-center justify-center text-white text-lg">
                                T
                            </div>
                            Tulia
                        </Link>
                        <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                            Resilience support for real life and real pressure.
                        </p>
                        <div className="flex items-center gap-4">
                            <a href="#" className="text-gray-400 hover:text-[var(--color-primary)] transition-colors"><Facebook size={20} /></a>
                            <a href="#" className="text-gray-400 hover:text-[var(--color-primary)] transition-colors"><Twitter size={20} /></a>
                            <a href="#" className="text-gray-400 hover:text-[var(--color-primary)] transition-colors"><Instagram size={20} /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-display font-semibold text-gray-900 dark:text-white mb-6">Product</h3>
                        <ul className="space-y-3 text-sm">
                            <li><Link to="/dashboard" className="text-gray-500 dark:text-gray-400 hover:text-[var(--color-primary)] transition-colors">Anonymous Counseling</Link></li>
                            <li><Link to="/dashboard" className="text-gray-500 dark:text-gray-400 hover:text-[var(--color-primary)] transition-colors">Self-help Library</Link></li>
                            <li><Link to="/counselor" className="text-gray-500 dark:text-gray-400 hover:text-[var(--color-primary)] transition-colors">For Counselors</Link></li>
                            <li><Link to="/partner" className="text-gray-500 dark:text-gray-400 hover:text-[var(--color-primary)] transition-colors">Partner Dashboard</Link></li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="font-display font-semibold text-gray-900 dark:text-white mb-6">Company</h3>
                        <ul className="space-y-3 text-sm">
                            <li><Link to="#" className="text-gray-500 dark:text-gray-400 hover:text-[var(--color-primary)] transition-colors">About Us</Link></li>
                            <li><Link to="#" className="text-gray-500 dark:text-gray-400 hover:text-[var(--color-primary)] transition-colors">Vision 2030</Link></li>
                            <li><Link to="#" className="text-gray-500 dark:text-gray-400 hover:text-[var(--color-primary)] transition-colors">Privacy Policy</Link></li>
                            <li><Link to="#" className="text-gray-500 dark:text-gray-400 hover:text-[var(--color-primary)] transition-colors">Terms of Service</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="font-display font-semibold text-gray-900 dark:text-white mb-6">Contact</h3>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-start gap-3 text-gray-500 dark:text-gray-400">
                                <Mail size={18} className="shrink-0 mt-0.5" />
                                <span>support@tulia.ke</span>
                            </li>
                            <li className="flex items-start gap-3 text-gray-500 dark:text-gray-400">
                                <Phone size={18} className="shrink-0 mt-0.5" />
                                <span>+254 700 000 000</span>
                            </li>
                            <li className="flex items-start gap-3 text-gray-500 dark:text-gray-400">
                                <MapPin size={18} className="shrink-0 mt-0.5" />
                                <span>Nairobi, Kenya</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-gray-200 dark:border-zinc-800 text-center text-sm text-gray-400">
                    <p>&copy; {new Date().getFullYear()} Tulia Mental Health. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
