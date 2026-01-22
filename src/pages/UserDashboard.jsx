import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    MessageSquare, Video, Phone, Calendar, BookOpen, Activity, User, Shield,
    Sun, Cloud, CloudRain, Zap, Heart, ArrowRight, Play, FileText, Plus, CheckCircle, Lock
} from 'lucide-react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

const UserDashboard = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('overview');
    const [selectedMood, setSelectedMood] = useState(null);

    const tabs = [
        { id: 'overview', label: 'Overview', icon: User },
        { id: 'counseling', label: 'Talk to Someone', icon: MessageSquare },
        { id: 'resources', label: 'Self-Help', icon: BookOpen },
        { id: 'journal', label: 'My Journal', icon: FileText },
    ];

    const moods = [
        { icon: Sun, label: 'Happy', color: 'text-yellow-500', bg: 'bg-yellow-50 dark:bg-yellow-900/10' },
        { icon: Cloud, label: 'Neutral', color: 'text-gray-500', bg: 'bg-gray-50 dark:bg-gray-800/50' },
        { icon: CloudRain, label: 'Sad', color: 'text-blue-500', bg: 'bg-blue-50 dark:bg-blue-900/10' },
        { icon: Zap, label: 'Stressed', color: 'text-orange-500', bg: 'bg-orange-50 dark:bg-orange-900/10' },
        { icon: Heart, label: 'Anxious', color: 'text-purple-500', bg: 'bg-purple-50 dark:bg-purple-900/10' },
    ];

    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
    };

    const renderContent = () => {
        switch (activeTab) {
            case 'overview':
                return <OverviewSection selectedMood={selectedMood} setSelectedMood={setSelectedMood} moods={moods} setActiveTab={setActiveTab} navigate={navigate} />;
            case 'counseling':
                return <AnonymousCounseling />;
            case 'resources':
                return <ResourcesSection />;
            case 'journal':
                return <JournalSection />;
            default:
                return <OverviewSection selectedMood={selectedMood} setSelectedMood={setSelectedMood} moods={moods} setActiveTab={setActiveTab} navigate={navigate} />;
        }
    };

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col md:flex-row gap-8">
                {/* Sidebar Navigation */}
                <div className="w-full md:w-64 shrink-0">
                    <div className="bg-white dark:bg-zinc-900 rounded-3xl p-6 shadow-sm border border-gray-100 dark:border-zinc-800 sticky top-24">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[var(--color-primary)] to-green-400 flex items-center justify-center text-white shadow-lg shadow-green-900/10">
                                <span className="font-bold text-lg">JS</span>
                            </div>
                            <div>
                                <p className="font-bold text-gray-900 dark:text-white">Jane Smith</p>
                                <p className="text-xs text-gray-500">Free Plan</p>
                            </div>
                        </div>

                        <nav className="space-y-2">
                            {tabs.map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => handleTabClick(tab.id)}
                                    className={clsx(
                                        "w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200",
                                        activeTab === tab.id
                                            ? "bg-[var(--color-primary)] text-white shadow-md shadow-green-900/20"
                                            : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-zinc-800"
                                    )}
                                >
                                    <tab.icon size={18} />
                                    {tab.label}
                                </button>
                            ))}
                        </nav>

                        {/* Quick Booking CTA in Menu */}
                        <div className="mt-8 pt-8 border-t border-gray-100 dark:border-zinc-800">
                            <button
                                onClick={() => navigate('/book/category')}
                                className="w-full flex items-center justify-center gap-2 py-3 bg-[var(--color-accent)] text-white rounded-xl font-bold text-sm hover:brightness-110 transition-all shadow-lg shadow-orange-900/10"
                            >
                                <Calendar size={16} /> Book Session
                            </button>
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="flex-grow">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        {renderContent()}
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

const OverviewSection = ({ selectedMood, setSelectedMood, moods, setActiveTab, navigate }) => (
    <div className="space-y-8">
        {/* Welcome & Mood */}
        <div className="bg-white dark:bg-zinc-900 rounded-3xl p-8 border border-gray-100 dark:border-zinc-800 shadow-sm">
            <h1 className="text-3xl font-display font-bold text-gray-900 dark:text-white mb-2">Good Morning, Jane</h1>
            <p className="text-gray-500 dark:text-gray-400 mb-8">"Healing takes time, and asking for help is a courageous step."</p>

            <div className="bg-gray-50 dark:bg-zinc-800/50 rounded-2xl p-6">
                <p className="font-bold text-gray-700 dark:text-gray-300 mb-4 text-sm uppercase tracking-wide">How are you feeling today?</p>
                <div className="flex flex-wrap gap-4">
                    {moods.map((mood) => (
                        <button
                            key={mood.label}
                            onClick={() => setSelectedMood(mood.label)}
                            className={clsx(
                                "flex flex-col items-center justify-center gap-2 w-20 h-20 rounded-2xl transition-all border-2",
                                selectedMood === mood.label
                                    ? "border-[var(--color-primary)] bg-white shadow-md scale-105"
                                    : "border-transparent hover:bg-white dark:hover:bg-zinc-800",
                                mood.bg
                            )}
                        >
                            <mood.icon size={24} className={mood.color} />
                            <span className="text-xs font-medium text-gray-600 dark:text-gray-300">{mood.label}</span>
                        </button>
                    ))}
                </div>
            </div>
        </div>

        {/* Quick Actions Grid */}
        <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-[#e8f5e9] to-white dark:from-zinc-800 dark:to-zinc-900 rounded-3xl p-8 border border-green-100 dark:border-zinc-700 relative overflow-hidden group hover:shadow-md transition-shadow">
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                    <MessageSquare size={100} className="text-[var(--color-primary)]" />
                </div>
                <div className="relative z-10">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm text-[var(--color-primary)]">
                        <MessageSquare size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Anonymous Chat</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-6">Connect with a listener instantly via text. No appointment needed.</p>
                    <button onClick={() => setActiveTab('counseling')} className="text-[var(--color-primary)] font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all">
                        Start Chatting <ArrowRight size={16} />
                    </button>
                </div>
            </div>

            <div className="bg-gradient-to-br from-[#fff3e0] to-white dark:from-zinc-800 dark:to-zinc-900 rounded-3xl p-8 border border-orange-100 dark:border-zinc-700 relative overflow-hidden group hover:shadow-md transition-shadow">
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Video size={100} className="text-orange-500" />
                </div>
                <div className="relative z-10">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm text-orange-500">
                        <Video size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Professional Therapy</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-6">Schedule a video session with a certified specialist.</p>
                    <button onClick={() => navigate('/book/category')} className="text-orange-600 font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all">
                        Find a Counselor <ArrowRight size={16} />
                    </button>
                </div>
            </div>
        </div>

        {/* Upcoming Session */}
        <div className="bg-white dark:bg-zinc-900 rounded-3xl p-1 border border-gray-100 dark:border-zinc-800">
            <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="font-bold text-gray-900 dark:text-white flex items-center gap-2">
                        <Calendar size={18} className="text-[var(--color-primary)]" /> Upcoming Session
                    </h3>
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold">Confirmed</span>
                </div>
                <div className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-zinc-800 rounded-2xl">
                    <div className="w-14 h-14 rounded-xl overflow-hidden">
                        <img src="https://i.pravatar.cc/150?img=47" alt="Counselor" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-grow">
                        <h4 className="font-bold text-gray-900 dark:text-white">Dr. Sarah M.</h4>
                        <p className="text-sm text-gray-500">Separation & Anxiety • Video Call</p>
                    </div>
                    <div className="text-right">
                        <p className="font-bold text-gray-900 dark:text-white">Tomorrow</p>
                        <p className="text-sm text-[var(--color-primary)] font-medium">10:00 AM</p>
                    </div>
                </div>
            </div>
        </div>

        {/* Resources Horizontal Scroll */}
        <div>
            <div className="flex items-center justify-between mb-4 px-2">
                <h3 className="font-bold text-gray-900 dark:text-white text-lg">Recommended for You</h3>
                <button className="text-sm text-[var(--color-primary)] font-medium hover:underline">View All</button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {[1, 2, 3].map((i) => (
                    <div key={i} className="group cursor-pointer">
                        <div className="relative rounded-2xl overflow-hidden aspect-video mb-3">
                            <img
                                src={`https://images.unsplash.com/photo-${i === 1 ? '1506126613408-eca07ce68773' : i === 2 ? '1499209971114-f8d5d8bd561b' : '1504810183177-635f69279a4f'}?auto=format&fit=crop&q=80&w=400`}
                                alt="Resource"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                                <div className="w-10 h-10 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white">
                                    <Play size={16} fill="currentColor" />
                                </div>
                            </div>
                        </div>
                        <h4 className="font-bold text-gray-900 dark:text-white text-sm mb-1 group-hover:text-[var(--color-primary)] transition-colors">
                            {i === 1 ? '5-Minute Morning Meditation' : i === 2 ? 'Understanding Anxiety Triggers' : 'Sleep Sounds: Rain & Thunder'}
                        </h4>
                        <p className="text-xs text-gray-500">Audio • 5 min</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

const AnonymousCounseling = () => {
    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-3xl font-display font-bold text-gray-900 dark:text-white mb-2">Talk to Someone</h2>
                <p className="text-gray-600 dark:text-gray-400">Choose a method that makes you feel most comfortable.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <CommunicationOption
                    icon={MessageSquare}
                    title="Text Chat"
                    desc="Chat securely at your own pace."
                    color="bg-blue-500"
                    wait="~ 2 mins wait"
                />
                <CommunicationOption
                    icon={Phone}
                    title="Voice Call"
                    desc="Speak directly with a counselor."
                    color="bg-green-500"
                    wait="~ 5 mins wait"
                />
                <CommunicationOption
                    icon={Video}
                    title="Video Session"
                    desc="Face-to-face support via video."
                    color="bg-purple-500"
                    wait="Appointment needed"
                />
            </div>

            <div className="bg-gradient-to-r from-[var(--color-primary)] to-[#1e4620] rounded-2xl p-8 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-64 h-64 bg-white/10 rounded-full blur-3xl opacity-50" />
                <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div>
                        <h3 className="text-xl font-bold mb-2">Need immediate help?</h3>
                        <p className="text-white/80 max-w-md">Our crisis line is available 24/7 for urgent emotional support. You are not alone.</p>
                    </div>
                    <button className="bg-white text-[var(--color-primary)] px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors shadow-lg">
                        Call 1199 Now
                    </button>
                </div>
            </div>
        </div>
    );
};

const CommunicationOption = ({ icon: Icon, title, desc, color, wait }) => (
    <button className="flex flex-col p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-gray-100 dark:border-zinc-800 hover:border-[var(--color-primary)] dark:hover:border-[var(--color-primary)] hover:shadow-lg transition-all text-left group">
        <div className={clsx("w-12 h-12 rounded-full flex items-center justify-center text-white mb-4 transition-transform group-hover:scale-110", color)}>
            <Icon size={24} />
        </div>
        <h3 className="font-bold text-gray-900 dark:text-white mb-1 group-hover:text-[var(--color-primary)] transition-colors">{title}</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{desc}</p>
        <div className="mt-auto pt-4 border-t border-gray-50 dark:border-zinc-800 w-full">
            <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">{wait}</span>
        </div>
    </button>
);

const ResourcesSection = () => <Placeholder title="Self-Help Library" desc="Articles, exercises, and meditation guides." icon={BookOpen} />;
const JournalSection = () => <Placeholder title="My Journal" desc="Your private space to reflect and grow." icon={FileText} />;

const Placeholder = ({ title, desc, icon: Icon }) => (
    <div className="bg-white dark:bg-zinc-900 rounded-3xl p-12 text-center border border-gray-100 dark:border-zinc-800 border-dashed flex flex-col items-center justify-center h-96">
        <div className="w-16 h-16 bg-gray-50 dark:bg-zinc-800 rounded-full flex items-center justify-center mb-6 text-gray-400">
            {Icon && <Icon size={32} />}
        </div>
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{title}</h3>
        <p className="text-gray-500 dark:text-gray-400 mb-6 max-w-md mx-auto">{desc}</p>
        <button className="px-6 py-3 bg-[var(--color-primary)] text-white rounded-xl font-bold hover:bg-[#234b24]">Explore Now</button>
    </div>
);

export default UserDashboard;
