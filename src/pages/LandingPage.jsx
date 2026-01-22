import { Link } from 'react-router-dom';
import { Shield, Users, Heart, ArrowRight, CheckCircle, Smartphone, Globe, Lock } from 'lucide-react'; // Added Globe, Lock imports
import { motion } from 'framer-motion';

const LandingPage = () => {
    return (
        <div className="overflow-x-hidden">
            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex items-center bg-[var(--color-background)] overflow-hidden">
                {/* Background Decoration */}
                <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-[#e8f5e9] to-transparent bg-opacity-50 -z-10" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-[var(--color-accent)]/10 rounded-full blur-3xl -z-10" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 md:py-0">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] font-bold text-xs uppercase tracking-wider mb-6">
                                <span className="w-2 h-2 rounded-full bg-[var(--color-primary)] animate-pulse" />
                                Mental Health for All
                            </div>

                            <h1 className="font-display text-5xl md:text-7xl font-bold text-gray-900 leading-tight mb-6">
                                Find Your <span className="text-[var(--color-primary)]">Balance</span>,<br />
                                Reclaim Your <span className="text-[var(--color-accent)]">Peace</span>.
                            </h1>

                            <p className="text-xl text-gray-700 mb-8 leading-relaxed max-w-lg font-medium">
                                Anonymous, affordable, and accessible therapy for every Kenyan.
                                Connect with certified counselors via video, voice, or chat—anytime, anywhere.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link to="/login" className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-[var(--color-primary)] rounded-full hover:bg-[#234b24] transition-all hover:scale-105 shadow-xl shadow-[var(--color-primary)]/25">
                                    Start Healing Now
                                    <ArrowRight size={20} className="ml-2" />
                                </Link>
                                <Link to="/partner" className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-gray-900 bg-white border-2 border-gray-200 rounded-full hover:bg-gray-50 transition-all hover:border-[var(--color-primary)]">
                                    Partner With Us
                                </Link>
                            </div>

                            <div className="mt-12 flex items-center gap-8 text-gray-600 font-medium">
                                <div className="flex -space-x-4">
                                    {[1, 2, 3, 4].map((i) => (
                                        <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                                            <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" />
                                        </div>
                                    ))}
                                </div>
                                <p>Trusted by <span className="text-gray-900 font-bold">10,000+</span> Kenyans</p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative"
                        >
                            <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white/50">
                                <img
                                    src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?q=80&w=1000&auto=format&fit=crop"
                                    alt="Happy African Woman"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-8">
                                    <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl">
                                        <p className="text-white font-medium mb-2">"Tulia changed my life. I finally feel heard and understood."</p>
                                        <div className="flex items-center gap-2">
                                            <div className="w-6 h-6 rounded-full bg-green-400"></div>
                                            <span className="text-white/80 text-sm">Anonymous User, Nairobi</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Elements */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ repeat: Infinity, duration: 4 }}
                                className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-xl z-20 flex items-center gap-3"
                            >
                                <div className="p-2 bg-green-100 rounded-lg text-green-600">
                                    <Shield size={24} />
                                </div>
                                <div>
                                    <p className="font-bold text-gray-900">100% Private</p>
                                    <p className="text-xs text-gray-500">End-to-end Encrypted</p>
                                </div>
                            </motion.div>

                            <motion.div
                                animate={{ y: [0, 10, 0] }}
                                transition={{ repeat: Infinity, duration: 5, delay: 1 }}
                                className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl z-20 flex items-center gap-3"
                            >
                                <div className="p-2 bg-orange-100 rounded-lg text-orange-600">
                                    <Heart size={24} />
                                </div>
                                <div>
                                    <p className="font-bold text-gray-900">Certified Pros</p>
                                    <p className="text-xs text-gray-500">Verified Counselors</p>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Segment Section: Who is Tulia For? */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">A Platform for Everyone</h2>
                        <p className="text-xl text-gray-600">Whether you need support, provide care, or manage a team, Tulia has a dedicated portal for you.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Users Card */}
                        <div className="bg-gray-50 rounded-3xl p-8 hover:bg-green-50 transition-colors group border border-gray-100 hover:border-green-200">
                            <div className="w-14 h-14 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <Users size={32} />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">For Individuals</h3>
                            <p className="text-gray-600 mb-8 leading-relaxed">
                                Access affordable therapy sessions starting from KES 1500. Chat anonymously with licensed professionals.
                            </p>
                            <ul className="space-y-3 mb-8">
                                <li className="flex items-center gap-3 text-gray-700">
                                    <CheckCircle size={18} className="text-green-500" /> <span>24/7 Digital Access</span>
                                </li>
                                <li className="flex items-center gap-3 text-gray-700">
                                    <CheckCircle size={18} className="text-green-500" /> <span>Anonymous Identity</span>
                                </li>
                                <li className="flex items-center gap-3 text-gray-700">
                                    <CheckCircle size={18} className="text-green-500" /> <span>Video, Voice, or Text</span>
                                </li>
                            </ul>
                            <Link to="/login" className="block w-full py-3 bg-white border border-gray-200 text-gray-900 font-bold rounded-xl text-center hover:bg-gray-50 hover:border-[var(--color-primary)] transition-colors">
                                Get Support
                            </Link>
                        </div>

                        {/* Counselors Card */}
                        <div className="bg-gray-50 rounded-3xl p-8 hover:bg-blue-50 transition-colors group border border-gray-100 hover:border-blue-200">
                            <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <Heart size={32} />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">For Counselors</h3>
                            <p className="text-gray-600 mb-8 leading-relaxed">
                                Grow your practice with our digital tools. Manage bookings, secure notes, and payments in one place.
                            </p>
                            <ul className="space-y-3 mb-8">
                                <li className="flex items-center gap-3 text-gray-700">
                                    <CheckCircle size={18} className="text-blue-500" /> <span>Guaranteed Payouts</span>
                                </li>
                                <li className="flex items-center gap-3 text-gray-700">
                                    <CheckCircle size={18} className="text-blue-500" /> <span>Flexible Schedule</span>
                                </li>
                                <li className="flex items-center gap-3 text-gray-700">
                                    <CheckCircle size={18} className="text-blue-500" /> <span>Digital Office Tools</span>
                                </li>
                            </ul>
                            <Link to="/counselor/login" className="block w-full py-3 bg-white border border-gray-200 text-gray-900 font-bold rounded-xl text-center hover:bg-gray-50 hover:border-blue-500 transition-colors">
                                Join as Specialist
                            </Link>
                        </div>

                        {/* Partners Card */}
                        <div className="bg-gray-50 rounded-3xl p-8 hover:bg-purple-50 transition-colors group border border-gray-100 hover:border-purple-200">
                            <div className="w-14 h-14 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <Globe size={32} />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">For Organizations</h3>
                            <p className="text-gray-600 mb-8 leading-relaxed">
                                Boost team productivity and well-being. Get actionable insights into organizational health.
                            </p>
                            <ul className="space-y-3 mb-8">
                                <li className="flex items-center gap-3 text-gray-700">
                                    <CheckCircle size={18} className="text-purple-500" /> <span>Wellness Analytics</span>
                                </li>
                                <li className="flex items-center gap-3 text-gray-700">
                                    <CheckCircle size={18} className="text-purple-500" /> <span>EAP Integration</span>
                                </li>
                                <li className="flex items-center gap-3 text-gray-700">
                                    <CheckCircle size={18} className="text-purple-500" /> <span>Burnout Prevention</span>
                                </li>
                            </ul>
                            <Link to="/partner" className="block w-full py-3 bg-white border border-gray-200 text-gray-900 font-bold rounded-xl text-center hover:bg-gray-50 hover:border-purple-500 transition-colors">
                                Request Demo
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features / Value Prop */}
            <section className="py-24 bg-[var(--color-background)]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div className="order-2 md:order-1">
                            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                                <img
                                    src="https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&q=80&w=1000"
                                    alt="Mobile Therapy"
                                    className="w-full"
                                />
                            </div>
                        </div>
                        <div className="order-1 md:order-2">
                            <div className="inline-block p-3 rounded-2xl bg-orange-100 text-orange-600 mb-6">
                                <Smartphone size={32} />
                            </div>
                            <h2 className="text-4xl font-display font-bold text-gray-900 mb-6">Mental Health in Your Pocket</h2>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                We believe mental health support shouldn't be a luxury. With Tulia, you have a safe space right on your phone.
                            </p>

                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="shrink-0 w-12 h-12 rounded-full bg-white flex items-center justify-center text-[var(--color-primary)] shadow-sm">
                                        <Lock size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 text-lg">Completely Anonymous</h4>
                                        <p className="text-gray-600">You control what you share. Your sessions are private and never recorded without consent.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="shrink-0 w-12 h-12 rounded-full bg-white flex items-center justify-center text-[var(--color-primary)] shadow-sm">
                                        <Smartphone size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 text-lg">Pre-installed on TEP Devices</h4>
                                        <p className="text-gray-600">Easy access for all Teachers Service Commission members via provided tablets.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-[var(--color-primary)] text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-2xl translate-y-1/2 -translate-x-1/3"></div>

                <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                    <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Ready to start your journey?</h2>
                    <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
                        Join over 10,000 Kenyans who are reclaiming their peace with Tulia.
                        It takes less than 2 minutes to get matched.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/login" className="px-10 py-4 bg-white text-[var(--color-primary)] rounded-full font-bold text-lg hover:bg-gray-100 transition-colors shadow-xl">
                            Sign Up Now
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default LandingPage;
