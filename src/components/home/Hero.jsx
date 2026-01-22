import { ArrowRight, Shield, Heart, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <div className="relative overflow-hidden bg-[var(--color-background)]">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-96 h-96 bg-[var(--color-primary-light)]/20 rounded-full blur-3xl opacity-50" />
            <div className="absolute bottom-0 left-0 translate-y-24 -translate-x-12 w-72 h-72 bg-[var(--color-accent)]/15 rounded-full blur-3xl opacity-50" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-24 md:pt-24 md:pb-32">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center px-3 py-1 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-sm font-medium mb-6">
                            <span className="flex h-2 w-2 rounded-full bg-[var(--color-primary)] mr-2" />
                            Vision 2030: Mental Health for All
                        </div>

                        <h1 className="font-display text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
                            Find Your <span className="text-[var(--color-primary)]">Balance</span>,<br />
                            Reclaim Your <span className="text-[var(--color-accent)]">Peace</span>.
                        </h1>

                        <p className="text-lg text-gray-900 mb-8 leading-relaxed max-w-lg font-medium">
                            Anonymous, affordable, and accessible mental health support for every Kenyan.
                            Connect with certified counselors via video, voice, or chat—anytime, anywhere.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link to="/dashboard" className="inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-white bg-[var(--color-primary)] rounded-full hover:bg-[#234b24] transition-all hover:scale-105 shadow-lg shadow-[var(--color-primary)]/25">
                                Start Healing Now
                                <ArrowRight size={18} className="ml-2" />
                            </Link>
                            <Link to="/partner" className="inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-gray-900 bg-white border border-gray-200 rounded-full hover:bg-gray-50 transition-all hover:border-[var(--color-primary)]">
                                For Organizations
                            </Link>
                        </div>

                        <div className="mt-12 grid grid-cols-3 gap-6 border-t border-gray-200 pt-8">
                            <div>
                                <div className="flex items-center gap-2 mb-1">
                                    <Shield className="text-[var(--color-primary)]" size={20} />
                                    <span className="font-bold text-xl text-gray-900">100%</span>
                                </div>
                                <p className="text-sm text-gray-700 font-medium">Anonymous</p>
                            </div>
                            <div>
                                <div className="flex items-center gap-2 mb-1">
                                    <Users className="text-[var(--color-accent)]" size={20} />
                                    <span className="font-bold text-xl text-gray-900">24/7</span>
                                </div>
                                <p className="text-sm text-gray-700 font-medium">Support Access</p>
                            </div>
                            <div>
                                <div className="flex items-center gap-2 mb-1">
                                    <Heart className="text-[var(--color-secondary)]" size={20} />
                                    <span className="font-bold text-xl text-gray-900">Affordable</span>
                                </div>
                                <p className="text-sm text-gray-700 font-medium">Therapy Sessions</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Hero Image/Visual */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-zinc-800">
                            {/* Check if image exists in artifacts or use a placeholder color block if generation is preferred later.
                    For now, creating a stylish abstract card representation using CSS and SVG to avoid external dependency issues if image generation isn't requested.
                */}
                            <div className="aspect-[4/5] md:aspect-square bg-gray-900 dark:bg-zinc-900 p-8 flex flex-col justify-center items-center text-center relative">
                                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')] bg-cover bg-center opacity-90"></div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                                <div className="relative z-10 text-white mt-auto text-left w-full">
                                    <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
                                        <p className="text-sm font-medium text-white/80 mb-2">Daily Wellness Check</p>
                                        <p className="text-2xl font-display font-semibold mb-4">"I feel heard and understood today."</p>
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-green-200 border-2 border-white"></div>
                                            <div>
                                                <p className="text-sm font-bold">Wanjiku K.</p>
                                                <p className="text-xs text-white/70">Tulia Member</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Floating Element */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                            className="absolute -bottom-6 -right-6 md:bottom-12 md:-left-12 md:right-auto bg-white dark:bg-zinc-800 p-4 rounded-xl shadow-xl flex items-center gap-4 max-w-xs z-20"
                        >
                            <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-full text-green-600 dark:text-green-400">
                                <Heart size={24} fill="currentColor" />
                            </div>
                            <div>
                                <p className="font-bold text-gray-900 dark:text-white">Therapist Online</p>
                                <p className="text-xs text-green-600 font-medium">Ready to chat</p>
                            </div>
                        </motion.div>
                    </motion.div>

                </div>
            </div>
        </div>
    );
};

export default Hero;
