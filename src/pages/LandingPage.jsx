import { Link } from 'react-router-dom';
import {
    Shield, Clock, Users, Phone, AlertCircle, CheckCircle,
    ArrowRight, Lock, Heart, Briefcase, Activity
} from 'lucide-react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

const LandingPage = () => {
    return (
        <div className="font-sans text-gray-900 bg-white overflow-x-hidden pb-20 md:pb-0">
            {/* TOP TRUST STRIP */}
            <div className="bg-gray-100 py-2 border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 text-center text-xs md:text-sm font-medium text-gray-600 flex justify-center items-center gap-2 md:gap-6 flex-wrap">
                    <span className="flex items-center gap-1"><Lock size={12} className="text-gray-500" /> Confidential</span>
                    <span className="hidden md:inline">•</span>
                    <span className="flex items-center gap-1"><Clock size={12} className="text-gray-500" /> Fast</span>
                    <span className="hidden md:inline">•</span>
                    <span className="flex items-center gap-1"><Users size={12} className="text-gray-500" /> Real Humans</span>
                    <span className="hidden md:inline">•</span>
                    <span className="flex items-center gap-1"><Shield size={12} className="text-gray-500" /> MSME & GBV Aware</span>
                </div>
            </div>

            {/* HERO SECTION */}
            <section className="relative pt-12 pb-16 md:py-24 px-4 overflow-hidden">
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-8"
                    >
                        <h2 className="text-lg md:text-xl font-bold text-[var(--color-primary)] uppercase tracking-wider mb-4">
                            You Don't Have to Carry It Alone
                        </h2>
                        <h1 className="text-4xl md:text-6xl font-display font-bold text-gray-900 leading-[1.1] mb-6">
                            Running a business is pressure.<br />
                            <span className="text-gray-500">We help you handle it.</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed">
                            Cash flow stress. Burnout. Conflict. Trauma. Family strain.<br className="hidden md:block" />
                            Tulia gives you private, professional counseling — <strong>on your time.</strong>
                        </p>
                    </motion.div>

                    <div className="bg-green-50/50 rounded-3xl p-8 md:p-12 border border-green-100 max-w-3xl mx-auto">
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
                            You book. We call you back when it's convenient.
                        </h3>

                        <div className="flex flex-col md:flex-row gap-4 justify-center mb-6">
                            <Link to="/book" className="flex-1 py-4 px-6 bg-[var(--color-primary)] text-white text-lg font-bold rounded-xl shadow-lg shadow-green-900/20 hover:bg-[#234b24] transition-all transform hover:-translate-y-1 text-center flex items-center justify-center gap-2">
                                <Phone size={20} /> BOOK A CALLBACK
                            </Link>
                            <Link to="/book/now" className="flex-1 py-4 px-6 bg-white text-[var(--color-primary)] border-2 border-[var(--color-primary)] text-lg font-bold rounded-xl hover:bg-green-50 transition-all text-center flex items-center justify-center gap-2">
                                <Activity size={20} /> TALK TO SOMEONE NOW
                            </Link>
                        </div>

                        <div className="flex justify-center gap-4 text-xs md:text-sm text-gray-500 font-medium">
                            <span className="flex items-center gap-1"><Lock size={12} /> Confidential</span>
                            <span className="flex items-center gap-1"><Heart size={12} /> No Judgement</span>
                            <span className="flex items-center gap-1"><Clock size={12} /> You Choose the Time</span>
                        </div>
                    </div>
                </div>

                {/* Background Blobs */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-50 rounded-full blur-3xl -z-10 opacity-60 translate-x-1/3 -translate-y-1/3"></div>
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-50 rounded-full blur-3xl -z-10 opacity-60 -translate-x-1/3 translate-y-1/3"></div>
            </section>

            {/* EMERGENCY STRIP */}
            <section className="bg-red-50 border-y border-red-100 py-8 px-4">
                <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
                    <div>
                        <h3 className="text-xl font-bold text-red-700 flex items-center justify-center md:justify-start gap-2 mb-2">
                            <AlertCircle size={24} /> Feeling unsafe or in immediate distress?
                        </h3>
                        <p className="text-red-900/80 max-w-xl">
                            If you are in danger or facing violence, press the emergency button for priority routing and referral support. <strong>You will not be ignored.</strong>
                        </p>
                    </div>
                    <Link to="/emergency" className="shrink-0 px-8 py-3 bg-red-600 text-white font-bold rounded-full hover:bg-red-700 transition-colors shadow-lg shadow-red-900/20 flex items-center gap-2 animate-pulse">
                        <AlertCircle size={20} /> EMERGENCY SUPPORT
                    </Link>
                </div>
            </section>

            {/* WHO THIS IS FOR */}
            <section className="py-20 px-4 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">Who This Is For</h2>
                        <p className="text-xl text-gray-500">Real support for real life pressures.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100 hover:border-gray-200 transition-colors">
                            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                                <Briefcase size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Business Owners & Hustlers</h3>
                            <p className="text-gray-600">When stress is affecting your decisions, sleep, or relationships. We help you clear your head so you can lead.</p>
                        </div>
                        <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100 hover:border-gray-200 transition-colors">
                            <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center mb-6">
                                <Activity size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Startups & Teams</h3>
                            <p className="text-gray-600">Founder pressure. Burnout. Staff conflict. Performance anxiety. Build a resilient culture.</p>
                        </div>
                        <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100 hover:border-gray-200 transition-colors">
                            <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center mb-6">
                                <Shield size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">GBV Survivors</h3>
                            <p className="text-gray-600">Safe, confidential counseling with structured referral pathways. You are not alone.</p>
                        </div>
                    </div>

                    <div className="mt-12 text-center">
                        <Link to="/book" className="inline-flex items-center gap-2 text-[var(--color-primary)] font-bold hover:underline text-lg">
                            Book a Private Session <ArrowRight size={20} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* HOW IT WORKS */}
            <section className="py-20 px-4 bg-gray-900 text-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">How It Works</h2>
                        <p className="text-xl text-gray-400">Simple, discreet, and effective.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-12 relative">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gray-800 -z-0"></div>

                        <div className="relative z-10 text-center">
                            <div className="w-24 h-24 bg-gray-800 border-4 border-gray-900 rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6 text-[var(--color-primary)]">1</div>
                            <h3 className="text-xl font-bold mb-4">Choose Your Option</h3>
                            <p className="text-gray-400">Book a callback for later, talk to someone right now, or request emergency routing.</p>
                        </div>
                        <div className="relative z-10 text-center">
                            <div className="w-24 h-24 bg-gray-800 border-4 border-gray-900 rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6 text-[var(--color-primary)]">2</div>
                            <h3 className="text-xl font-bold mb-4">We Match You</h3>
                            <p className="text-gray-400">Connected to a trained counselor based on your need: Business stress, Trauma, GBV, or Anxiety.</p>
                        </div>
                        <div className="relative z-10 text-center">
                            <div className="w-24 h-24 bg-gray-800 border-4 border-gray-900 rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6 text-[var(--color-primary)]">3</div>
                            <h3 className="text-xl font-bold mb-4">You Leave With a Plan</h3>
                            <p className="text-gray-400">Practical coping tools. Clear next steps. Follow-up if needed. Not just talk — real support.</p>
                        </div>
                    </div>

                    <div className="mt-16 text-center">
                        <Link to="/book" className="px-8 py-4 bg-[var(--color-primary)] text-white font-bold rounded-full hover:bg-[#234b24] transition-colors inline-block">
                            START SUPPORT
                        </Link>
                    </div>
                </div>
            </section>

            {/* WHY MSMEs TRUST TULIA + WHAT WE HELP WITH */}
            <section className="py-20 px-4 overflow-hidden">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
                    <div>
                        <h2 className="text-3xl font-display font-bold text-gray-900 mb-8">Why MSMEs Trust Tulia</h2>
                        <ul className="space-y-4">
                            {[
                                "Designed for entrepreneurs and pressure environments",
                                "Private — no public exposure",
                                "Flexible — you control timing",
                                "Human counselors, not automated scripts",
                                "Structured follow-up available"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-lg text-gray-700">
                                    <CheckCircle size={24} className="text-[var(--color-primary)] shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="bg-gray-50 rounded-3xl p-8 md:p-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">What We Help With</h2>
                        <div className="flex flex-wrap gap-3">
                            {[
                                "Business Stress", "Cash Flow Anxiety", "Burnout",
                                "Anger & Conflict", "Relationship Pressure",
                                "Trauma & Abuse", "Grief", "Depression", "Anxiety"
                            ].map((tag, i) => (
                                <span key={i} className="px-4 py-2 bg-white rounded-lg text-gray-700 font-medium border border-gray-100 shadow-sm">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CONVERSION BLOCK */}
            <section className="py-20 px-4 bg-[var(--color-primary)] text-white">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-display font-bold mb-12">Choose How You Want Support</h2>

                    <div className="grid md:grid-cols-3 gap-6 text-left">
                        {/* Option 1 */}
                        <div className="bg-white text-gray-900 p-8 rounded-3xl shadow-xl flex flex-col h-full transform transition-transform md:hover:-translate-y-2">
                            <div className="mb-6 bg-green-100 w-12 h-12 rounded-xl flex items-center justify-center text-[var(--color-primary)]">
                                <Clock size={24} />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Book a Callback</h3>
                            <p className="text-gray-600 mb-8 flex-grow">You select a time. We call you when you're ready.</p>
                            <Link to="/book" className="w-full py-3 bg-[var(--color-primary)] text-white font-bold rounded-xl text-center hover:bg-[#234b24]">
                                SCHEDULE CALLBACK
                            </Link>
                        </div>

                        {/* Option 2 */}
                        <div className="bg-white text-gray-900 p-8 rounded-3xl shadow-xl flex flex-col h-full transform transition-transform md:hover:-translate-y-2">
                            <div className="mb-6 bg-blue-100 w-12 h-12 rounded-xl flex items-center justify-center text-blue-600">
                                <Phone size={24} />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Talk Now</h3>
                            <p className="text-gray-600 mb-8 flex-grow">Immediate support when you are feeling overwhelmed.</p>
                            <Link to="/book/now" className="w-full py-3 bg-blue-600 text-white font-bold rounded-xl text-center hover:bg-blue-700">
                                CONNECT NOW
                            </Link>
                        </div>

                        {/* Option 3 */}
                        <div className="bg-red-50 text-gray-900 p-8 rounded-3xl shadow-xl border-2 border-red-100 flex flex-col h-full transform transition-transform md:hover:-translate-y-2">
                            <div className="mb-6 bg-red-100 w-12 h-12 rounded-xl flex items-center justify-center text-red-600">
                                <AlertCircle size={24} />
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-red-700">Emergency</h3>
                            <p className="text-gray-600 mb-8 flex-grow">Priority routing for urgent safety and violence concerns.</p>
                            <Link to="/emergency" className="w-full py-3 bg-red-600 text-white font-bold rounded-xl text-center hover:bg-red-700 animate-pulse">
                                EMERGENCY SUPPORT
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* TRUST & PRIVACY */}
            <section className="py-20 px-4 bg-gray-50">
                <div className="max-w-3xl mx-auto text-center">
                    <Shield size={48} className="text-gray-300 mx-auto mb-6" />
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Your privacy is the product.</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        <div>
                            <CheckCircle size={20} className="text-green-500 mx-auto mb-2" />
                            <span className="font-bold text-gray-700">Confidential</span>
                        </div>
                        <div>
                            <CheckCircle size={20} className="text-green-500 mx-auto mb-2" />
                            <span className="font-bold text-gray-700">Secure Routing</span>
                        </div>
                        <div>
                            <CheckCircle size={20} className="text-green-500 mx-auto mb-2" />
                            <span className="font-bold text-gray-700">You Control Sharing</span>
                        </div>
                        <div>
                            <CheckCircle size={20} className="text-green-500 mx-auto mb-2" />
                            <span className="font-bold text-gray-700">No Data Misuse</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* FINAL CLOSE */}
            <section className="py-24 px-4 bg-white text-center">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">Your business needs you well.</h2>
                    <p className="text-2xl text-gray-500 mb-12">Silence is expensive. Support is strength.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/book" className="px-10 py-4 bg-[var(--color-primary)] text-white font-bold text-lg rounded-full hover:bg-[#234b24] transition-colors shadow-xl">
                            BOOK A CALLBACK
                        </Link>
                        <Link to="/book/now" className="px-10 py-4 bg-white text-gray-900 border-2 border-gray-200 font-bold text-lg rounded-full hover:border-[var(--color-primary)] transition-colors">
                            TALK NOW
                        </Link>
                    </div>
                </div>
            </section>

            {/* FOOTER STRIP */}
            <footer className="py-8 bg-gray-50 border-t border-gray-200 text-center">
                <p className="text-gray-500 font-medium">Tulia — resilience support for real life and real pressure.</p>
            </footer>

            {/* MOBILE STICKY BUTTONS (Visible only on small screens) */}
            <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-200 md:hidden z-50 flex gap-3 shadow-[0_-5px_20px_rgba(0,0,0,0.1)]">
                <Link to="/book" className="flex-1 py-3 bg-[var(--color-primary)] text-white font-bold rounded-xl text-center text-sm flex items-center justify-center gap-2">
                    <Phone size={18} /> Book Callback
                </Link>
                <Link to="/emergency" className="flex-1 py-3 bg-red-600 text-white font-bold rounded-xl text-center text-sm flex items-center justify-center gap-2">
                    <AlertCircle size={18} /> Emergency
                </Link>
            </div>
        </div>
    );
};

export default LandingPage;
