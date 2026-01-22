import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, User, Heart, Briefcase, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const navLinks = [
        { name: 'Home', path: '/', icon: null },
        { name: 'For You', path: '/login', icon: User },
        { name: 'Counselors', path: '/counselor/login', icon: Heart },
        { name: 'Partners', path: '/partner', icon: Briefcase },
    ];

    const isActive = (path) => {
        if (path === '/' && location.pathname !== '/') return false;
        return location.pathname.startsWith(path);
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 dark:bg-zinc-900/80 dark:border-zinc-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2 font-display text-2xl font-bold text-[var(--color-primary)] dark:text-[var(--color-primary-light)]">
                        <div className="w-8 h-8 rounded-full bg-[var(--color-primary)] flex items-center justify-center text-white text-lg">
                            T
                        </div>
                        Tulia
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={clsx(
                                    "text-sm font-medium transition-colors hover:text-[var(--color-primary)] flex items-center gap-2",
                                    isActive(link.path)
                                        ? "text-[var(--color-primary)] font-semibold"
                                        : "text-gray-600 dark:text-gray-300"
                                )}
                            >
                                {link.icon && <link.icon size={16} />}
                                {link.name}
                            </Link>
                        ))}
                        <button className="bg-[var(--color-primary)] text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-[#234b24] transition-colors cursor-pointer">
                            Get Help Now
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-600 dark:text-gray-300 hover:text-[var(--color-primary)] transition-colors p-2"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white dark:bg-zinc-900 border-b border-gray-100 dark:border-zinc-800 overflow-hidden"
                    >
                        <div className="px-4 py-4 space-y-3">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    onClick={() => setIsOpen(false)}
                                    className={clsx(
                                        "block px-4 py-3 rounded-xl text-base font-medium transition-colors flex items-center justify-between",
                                        isActive(link.path)
                                            ? "bg-[var(--color-primary)]/10 text-[var(--color-primary)]"
                                            : "text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-zinc-800"
                                    )}
                                >
                                    <span className="flex items-center gap-3">
                                        {link.icon && <link.icon size={18} />}
                                        {link.name}
                                    </span>
                                    {isActive(link.path) && <ChevronRight size={16} />}
                                </Link>
                            ))}
                            <button className="w-full mt-4 bg-[var(--color-primary)] text-white px-5 py-3 rounded-xl text-base font-medium hover:bg-[#234b24] transition-colors flex items-center justify-center gap-2 cursor-pointer">
                                Get Help Now
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
