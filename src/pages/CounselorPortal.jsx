import { useState } from 'react';
import {
    Calendar, Clock, Video, FileText, MoreVertical, CheckCircle,
    PieChart, DollarSign, LayoutDashboard, Users, Settings,
    Bell, Search, ChevronRight, Calculator, Star, LogOut, Plus
} from 'lucide-react';
import clsx from 'clsx';
import { motion } from 'framer-motion';

const CounselorPortal = () => {
    const [activeTab, setActiveTab] = useState('overview');
    const [showNotes, setShowNotes] = useState(false);

    const menuItems = [
        { id: 'overview', label: 'Overview', icon: LayoutDashboard },
        { id: 'schedule', label: 'My Schedule', icon: Calendar },
        { id: 'patients', label: 'Patients', icon: Users },
        { id: 'notes', label: 'Notes', icon: FileText },
        { id: 'earnings', label: 'Earnings', icon: PieChart },
        { id: 'settings', label: 'Settings', icon: Settings },
    ];

    const renderContent = () => {
        switch (activeTab) {
            case 'overview':
                return (
                    <div className="space-y-10 animate-in fade-in duration-500">
                        {/* Header */}
                        <header className="flex justify-between items-center">
                            <div>
                                <h1 className="text-3xl font-display font-bold text-gray-900 dark:text-white mb-1">Welcome back, Dr. Amani</h1>
                                <p className="text-gray-500 dark:text-gray-400">Here's what's happening in your practice today.</p>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="flex items-center gap-2 px-4 py-2 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 rounded-full text-sm font-bold border border-green-100 dark:border-green-800/30">
                                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                                    Online & Accepting
                                </div>
                                <button className="w-10 h-10 rounded-full bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 flex items-center justify-center text-gray-600 dark:text-gray-300 relative hover:shadow-md transition-shadow">
                                    <Bell size={20} />
                                    <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-red-500 border-2 border-white dark:border-zinc-800 rounded-full"></span>
                                </button>
                                <img src="https://i.pravatar.cc/150?img=68" alt="Profile" className="w-10 h-10 rounded-full border-2 border-white dark:border-zinc-800 shadow-md" />
                            </div>
                        </header>

                        {/* Dashboard Widgets */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <StatWidget label="Total Revenue" value="KES 86,500" change="+12.5%" icon={DollarSign} color="text-green-600" bg="bg-green-50 dark:bg-green-900/10" />
                            <StatWidget label="Sessions Held" value="24" change="+4" icon={Video} color="text-blue-600" bg="bg-blue-50 dark:bg-blue-900/10" />
                            <StatWidget label="Patient Rating" value="4.9/5" change="Top 5%" icon={Star} color="text-orange-500" bg="bg-orange-50 dark:bg-orange-900/10" />
                            <StatWidget label="Pending Notes" value="3" change="Needs Action" icon={FileText} color="text-purple-600" bg="bg-purple-50 dark:bg-purple-900/10" />
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            {/* Main Schedule Column */}
                            <div className="lg:col-span-2 space-y-8">
                                <div className="bg-white dark:bg-zinc-900 rounded-3xl p-4 md:p-8 border border-gray-100 dark:border-zinc-800 shadow-sm">
                                    <div className="flex justify-between items-center mb-8">
                                        <h2 className="text-xl font-bold text-gray-900 dark:text-white">Today's Schedule</h2>
                                        <button className="text-sm font-medium text-[var(--color-primary)] hover:underline" onClick={() => setActiveTab('schedule')}>View Calendar</button>
                                    </div>

                                    <div className="space-y-4">
                                        <AppointmentCard
                                            time="09:00 AM"
                                            duration="60 min"
                                            client="Sarah K."
                                            type="Video Therapy"
                                            status="Completed"
                                            avatar="https://i.pravatar.cc/150?img=32"
                                        />
                                        <div className="relative pl-0 sm:pl-8 before:hidden sm:before:block before:absolute before:left-3.5 before:top-0 before:bottom-0 before:w-0.5 before:bg-[var(--color-primary)] before:opacity-20 py-2 sm:py-2 my-2 sm:my-0 flex justify-center sm:block">
                                            <div className="sm:absolute sm:left-0 sm:top-1/2 sm:-translate-y-1/2 px-3 py-1 sm:p-0 sm:w-7 sm:h-7 bg-[var(--color-primary)] text-white rounded-full flex items-center justify-center text-[10px] sm:text-xs border-4 border-white dark:border-zinc-900 font-bold uppercase tracking-wider sm:tracking-normal w-fit">
                                                Now
                                            </div>
                                        </div>
                                        <AppointmentCard
                                            time="10:30 AM"
                                            duration="45 min"
                                            client="Michael O."
                                            type="Voice Consultation"
                                            status="Live Now"
                                            isLive={true}
                                            avatar="https://i.pravatar.cc/150?img=11"
                                        />
                                        <AppointmentCard
                                            time="02:00 PM"
                                            duration="60 min"
                                            client="Anonymous User #8821"
                                            type="Chat Session"
                                            status="Upcoming"
                                            avatar="https://i.pravatar.cc/150?img=8"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Right Column */}
                            <div className="space-y-8">
                                {/* Earnings Card */}
                                <div className="bg-[var(--color-primary)] rounded-3xl p-8 text-white relative overflow-hidden cursor-pointer hover:shadow-lg transition-shadow" onClick={() => setActiveTab('earnings')}>
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl"></div>

                                    <h3 className="font-medium text-white/80 mb-1">Available for Payout</h3>
                                    <div className="text-4xl font-display font-bold mb-6">KES 45,200</div>

                                    <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm mb-6">
                                        <div className="flex justify-between text-sm mb-2">
                                            <span className="text-white/70">Next Payout</span>
                                            <span className="font-bold">Sep 15</span>
                                        </div>
                                        <div className="h-1.5 bg-white/20 rounded-full overflow-hidden">
                                            <div className="h-full bg-white w-3/4 rounded-full"></div>
                                        </div>
                                    </div>

                                    <button className="w-full py-3 bg-white text-[var(--color-primary)] rounded-xl font-bold hover:bg-green-50 transition-colors">
                                        View Transaction History
                                    </button>
                                </div>

                                {/* Recent Requests */}
                                <div className="bg-white dark:bg-zinc-900 rounded-3xl p-6 border border-gray-100 dark:border-zinc-800 shadow-sm">
                                    <h3 className="font-bold text-gray-900 dark:text-white mb-6">Recent Requests</h3>
                                    <div className="space-y-4">
                                        <RequestCard
                                            name="Faith M."
                                            tag="Anxiety"
                                            time="2m ago"
                                        />
                                        <RequestCard
                                            name="David K."
                                            tag="Work Stress"
                                            time="15m ago"
                                        />
                                    </div>
                                    <button className="w-full mt-4 py-3 border border-gray-200 dark:border-zinc-700 text-gray-600 dark:text-gray-300 rounded-xl font-medium hover:bg-gray-50 dark:hover:bg-zinc-800" onClick={() => setActiveTab('patients')}>
                                        View All Requests
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            case 'schedule':
                const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
                const timeSlots = ['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00'];
                const appointments = [
                    { day: 'Mon', time: '09:00', duration: 1, title: 'Sarah K.', type: 'Video' },
                    { day: 'Mon', time: '14:00', duration: 1, title: 'Team Meeting', type: 'Internal', color: 'bg-blue-100 text-blue-700' },
                    { day: 'Tue', time: '10:30', duration: 1, title: 'Michael O.', type: 'Voice' },
                    { day: 'Wed', time: '13:00', duration: 1, title: 'Anonymous #8821', type: 'Chat' },
                    { day: 'Fri', time: '11:00', duration: 2, title: 'Group Session', type: 'Video', color: 'bg-purple-100 text-purple-700' },
                ];

                return (
                    <div className="space-y-6 animate-in fade-in duration-500 h-[calc(100vh-140px)] flex flex-col">
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                            <h1 className="text-3xl font-display font-bold text-gray-900 dark:text-white">My Schedule</h1>
                            <div className="flex bg-white dark:bg-zinc-900 p-1 rounded-xl border border-gray-100 dark:border-zinc-800">
                                <button className="px-4 py-2 text-sm font-medium bg-gray-100 dark:bg-zinc-800 rounded-lg text-gray-900 dark:text-white shadow-sm">Weekly</button>
                                <button className="px-4 py-2 text-sm font-medium text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors">Monthly</button>
                            </div>
                        </div>

                        <div className="bg-white dark:bg-zinc-900 rounded-3xl border border-gray-100 dark:border-zinc-800 shadow-sm flex-grow overflow-hidden flex flex-col">
                            {/* Days Header */}
                            <div className="grid grid-cols-6 border-b border-gray-100 dark:border-zinc-800">
                                <div className="p-4 border-r border-gray-100 dark:border-zinc-800"></div> {/* Time axis header */}
                                {weekDays.map(day => (
                                    <div key={day} className="p-4 text-center border-r border-gray-100 dark:border-zinc-800 last:border-r-0">
                                        <span className="text-sm font-bold text-gray-900 dark:text-white block">{day}</span>
                                        <span className="text-xs text-gray-500">Sep {12 + weekDays.indexOf(day)}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Calendar Grid */}
                            <div className="overflow-y-auto flex-grow relative">
                                <div className="grid grid-cols-6">
                                    {/* Time Axis */}
                                    <div className="border-r border-gray-100 dark:border-zinc-800">
                                        {timeSlots.map(time => (
                                            <div key={time} className="h-24 p-2 text-xs text-gray-500 text-right font-medium relative border-b border-gray-50 dark:border-zinc-800/50">
                                                <span className="-top-3 relative">{time}</span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Days Columns */}
                                    {weekDays.map(day => (
                                        <div key={day} className="border-r border-gray-100 dark:border-zinc-800 last:border-r-0 relative bg-gray-50/30 dark:bg-zinc-900/30">
                                            {/* Grid Lines */}
                                            {timeSlots.map(time => (
                                                <div key={time} className="h-24 border-b border-gray-100 dark:border-zinc-800"></div>
                                            ))}

                                            {/* Appointments Overlay */}
                                            {appointments.filter(app => app.day === day).map((app, idx) => {
                                                const startHour = parseInt(app.time.split(':')[0]);
                                                const startMin = parseInt(app.time.split(':')[1]);
                                                const topOffset = (startHour - 9) * 96 + (startMin / 60) * 96; // 96px is h-24
                                                const height = app.duration * 96;

                                                return (
                                                    <div
                                                        key={idx}
                                                        className={clsx(
                                                            "absolute left-1 right-1 p-3 rounded-xl border text-sm flex flex-col justify-center transition-all hover:scale-[1.02] cursor-pointer shadow-sm z-10",
                                                            app.color || "bg-[var(--color-primary)]/10 border-[var(--color-primary)]/20 text-[var(--color-primary)]"
                                                        )}
                                                        style={{ top: `${topOffset}px`, height: `${height - 8}px` }}
                                                    >
                                                        <span className="font-bold text-xs truncate">{app.time}</span>
                                                        <span className="font-bold truncate">{app.title}</span>
                                                        <span className="text-xs opacity-80 truncate">{app.type}</span>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                );
            case 'notes':
                const notes = [
                    { id: 1, patient: 'Sarah K.', date: 'Sep 12, 2024', preview: 'Patient reported improved sleep patterns but still struggles with anxiety during work presentations.', type: 'Therapy' },
                    { id: 2, patient: 'Michael O.', date: 'Sep 10, 2024', preview: 'Discussed workplace stress triggers and coping mechanisms. Recommended breathing exercises.', type: 'Consultation' },
                    { id: 3, patient: 'Anonymous #8821', date: 'Sep 08, 2024', preview: 'Initial assessment completed. Client shows signs of mild depression. Recommended CBT.', type: 'Assessment' },
                ];

                return (
                    <div className="space-y-6 animate-in fade-in duration-500 h-[calc(100vh-140px)] flex flex-col">
                        <div className="flex justify-between items-center">
                            <h1 className="text-3xl font-display font-bold text-gray-900 dark:text-white">Clinical Notes</h1>
                            <button className="px-4 py-2 bg-[var(--color-primary)] text-white rounded-xl font-bold hover:bg-[#234b24] transition-colors flex items-center gap-2">
                                <Plus size={20} /> New Note
                            </button>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 flex-grow overflow-hidden">
                            {/* Notes List */}
                            <div className="bg-white dark:bg-zinc-900 rounded-3xl border border-gray-100 dark:border-zinc-800 shadow-sm overflow-hidden flex flex-col">
                                <div className="p-4 border-b border-gray-100 dark:border-zinc-800">
                                    <div className="relative">
                                        <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                                        <input type="text" placeholder="Search notes..." className="w-full pl-10 pr-4 py-2 bg-gray-50 dark:bg-zinc-800 rounded-xl text-sm border-transparent outline-none" />
                                    </div>
                                </div>
                                <div className="overflow-y-auto flex-grow p-2 space-y-2">
                                    {notes.map(note => (
                                        <div key={note.id} className="p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-zinc-800 cursor-pointer transition-colors group border border-transparent hover:border-gray-100 dark:hover:border-zinc-700">
                                            <div className="flex justify-between items-start mb-1">
                                                <h4 className="font-bold text-gray-900 dark:text-white">{note.patient}</h4>
                                                <span className="text-xs text-gray-400">{note.date}</span>
                                            </div>
                                            <p className="text-xs text-gray-500 line-clamp-2 mb-2">{note.preview}</p>
                                            <span className="text-[10px] uppercase font-bold text-[var(--color-primary)] bg-[var(--color-primary)]/10 px-2 py-0.5 rounded-md">{note.type}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Editor / View */}
                            <div className="lg:col-span-2 bg-white dark:bg-zinc-900 rounded-3xl border border-gray-100 dark:border-zinc-800 shadow-sm p-8 flex flex-col items-center justify-center text-center text-gray-500">
                                <FileText size={48} className="opacity-10 mb-4" />
                                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Select a note to view</h3>
                                <p className="max-w-xs mx-auto">Choose a note from the list or create a new one to get started.</p>
                            </div>
                        </div>
                    </div>
                );
            case 'patients':
                return (
                    <div className="space-y-6 animate-in fade-in duration-500">
                        <h1 className="text-3xl font-display font-bold text-gray-900 dark:text-white">Patients</h1>
                        <div className="bg-white dark:bg-zinc-900 rounded-3xl p-8 border border-gray-100 dark:border-zinc-800 shadow-sm">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="relative flex-grow">
                                    <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                                    <input type="text" placeholder="Search patients..." className="w-full pl-12 pr-4 py-3 bg-gray-50 dark:bg-zinc-800 rounded-xl border-transparent focus:bg-white dark:focus:bg-zinc-900 outline-none transition-all" />
                                </div>
                            </div>
                            <div className="space-y-4">
                                <RequestCard name="Sarah K." tag="Ongoing Therapy" time="Active" />
                                <RequestCard name="Michael O." tag="Voice Consultation" time="Active" />
                                <RequestCard name="Anonymous #8821" tag="Chat Session" time="Active" />
                            </div>
                        </div>
                    </div>
                );
            case 'earnings':
                return (
                    <div className="space-y-6 animate-in fade-in duration-500">
                        <h1 className="text-3xl font-display font-bold text-gray-900 dark:text-white">Earnings & Payouts</h1>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <StatWidget label="Total Balance" value="KES 45,200" change="Available" icon={DollarSign} color="text-green-600" bg="bg-green-50 dark:bg-green-900/10" />
                            <StatWidget label="Pending" value="KES 12,500" change="Processing" icon={Clock} color="text-orange-600" bg="bg-orange-50 dark:bg-orange-900/10" />
                            <StatWidget label="Last Payout" value="KES 38,000" change="Paid" icon={CheckCircle} color="text-blue-600" bg="bg-blue-50 dark:bg-blue-900/10" />
                        </div>
                        <div className="bg-white dark:bg-zinc-900 rounded-3xl p-8 border border-gray-100 dark:border-zinc-800 shadow-sm">
                            <h3 className="font-bold text-gray-900 dark:text-white mb-6">Transaction History</h3>
                            <p className="text-gray-500">No recent transactions to display.</p>
                        </div>
                    </div>
                );
            case 'settings':
                return (
                    <div className="space-y-6 animate-in fade-in duration-500">
                        <h1 className="text-3xl font-display font-bold text-gray-900 dark:text-white">Settings</h1>
                        <div className="bg-white dark:bg-zinc-900 rounded-3xl p-8 border border-gray-100 dark:border-zinc-800 shadow-sm">
                            <h3 className="font-bold text-lg mb-4 text-gray-900 dark:text-white">Profile Information</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Full Name</label>
                                    <input type="text" defaultValue="Dr. Amani" className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-zinc-800 border-none outline-none" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Specialization</label>
                                    <input type="text" defaultValue="Clinical Psychology" className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-zinc-800 border-none outline-none" />
                                </div>
                            </div>
                        </div>
                    </div>
                );
            default:
                return <div>Content not found</div>;
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-black flex">
            {/* Sidebar Navigation */}
            <aside className="w-72 bg-white dark:bg-zinc-900 border-r border-gray-100 dark:border-zinc-800 flex flex-col fixed h-full z-10 hidden md:flex">
                <div className="p-8">
                    <div className="flex items-center gap-3 text-[var(--color-primary)] mb-10">
                        <div className="w-10 h-10 rounded-xl bg-[var(--color-primary)] text-white flex items-center justify-center font-bold text-xl">T</div>
                        <span className="font-display font-bold text-2xl text-gray-900 dark:text-white">Tulia<span className="text-[var(--color-primary)]">Pro</span></span>
                    </div>

                    <div className="relative mb-8">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Search size={16} className="text-gray-400" />
                        </div>
                        <input
                            type="text"
                            className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-zinc-800 rounded-xl text-sm border-transparent focus:bg-white dark:focus:bg-zinc-900 border border-gray-100 dark:border-zinc-700 outline-none transition-all"
                            placeholder="Search patients..."
                        />
                    </div>

                    <nav className="space-y-2 flex-grow">
                        {menuItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => setActiveTab(item.id)}
                                className={clsx(
                                    "w-full flex items-center gap-3 px-4 py-3.5 rounded-xl text-sm font-medium transition-all duration-200",
                                    activeTab === item.id
                                        ? "bg-[var(--color-primary)] text-white shadow-lg shadow-green-900/20"
                                        : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-zinc-800 hover:text-gray-900 dark:hover:text-white"
                                )}
                            >
                                <item.icon size={18} />
                                {item.label}
                            </button>
                        ))}
                    </nav>

                    <div className="mt-auto pt-6 border-t border-gray-100 dark:border-zinc-800">
                        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-red-500 hover:bg-red-50 dark:hover:bg-red-900/10 transition-colors">
                            <LogOut size={18} /> Sign Out
                        </button>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-grow md:ml-72 p-4 md:p-8 overflow-y-auto">
                {renderContent()}
            </main>
        </div>
    );
};

const StatWidget = ({ label, value, change, icon: Icon, color, bg }) => (
    <div className="bg-white dark:bg-zinc-900 p-6 rounded-3xl border border-gray-100 dark:border-zinc-800 shadow-sm flex items-start justify-between group hover:-translate-y-1 transition-transform duration-300">
        <div>
            <p className="text-sm font-medium text-gray-500 mb-1">{label}</p>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{value}</h3>
            <span className={clsx("text-xs font-bold px-2 py-1 rounded-full", change.includes('+') ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-600")}>
                {change}
            </span>
        </div>
        <div className={clsx("w-12 h-12 rounded-2xl flex items-center justify-center", bg, color)}>
            <Icon size={24} />
        </div>
    </div>
);

const AppointmentCard = ({ time, duration, client, type, status, isLive, avatar }) => (
    <div className={clsx(
        "flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 p-4 sm:p-6 rounded-2xl transition-all border relative",
        isLive
            ? "bg-[var(--color-primary)]/5 border-[var(--color-primary)]/20 shadow-lg shadow-green-900/5"
            : "bg-gray-50 dark:bg-zinc-800/50 border-transparent hover:bg-gray-100 dark:hover:bg-zinc-800"
    )}>
        {/* Mobile: Time + Avatar + Name Row */}
        <div className="flex items-center gap-4 w-full sm:w-auto">
            <div className="flex flex-col items-center min-w-[50px] sm:min-w-[60px] shrink-0">
                <span className="text-sm font-bold text-gray-900 dark:text-white whitespace-nowrap">{time}</span>
                <span className="text-[10px] sm:text-xs text-gray-500">{duration}</span>
            </div>

            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden border-2 border-white dark:border-zinc-700 shadow-sm shrink-0">
                <img src={avatar} alt={client} className="w-full h-full object-cover" />
            </div>

            <div className="flex-grow sm:hidden min-w-0">
                <h4 className="font-bold text-gray-900 dark:text-white text-base truncate">{client}</h4>
                <div className="flex items-center gap-2 text-xs text-gray-500 mt-0.5">
                    <span className="flex items-center gap-1">
                        {type.includes('Video') ? <Video size={12} /> : <Calendar size={12} />}
                        {type}
                    </span>
                </div>
            </div>
        </div>

        {/* Desktop: Info Column */}
        <div className="hidden sm:block flex-grow">
            <h4 className="font-bold text-gray-900 dark:text-white text-lg">{client}</h4>
            <div className="flex items-center gap-3 text-sm text-gray-500 mt-0.5">
                <span className="flex items-center gap-1.5">
                    {type.includes('Video') ? <Video size={14} /> : <Calendar size={14} />}
                    {type}
                </span>
            </div>
        </div>

        {/* Action Buttons - Full width on mobile */}
        <div className="w-full sm:w-auto mt-2 sm:mt-0">
            {isLive ? (
                <button className="w-full sm:w-auto px-5 py-2.5 bg-[var(--color-primary)] text-white rounded-xl font-bold shadow-lg hover:bg-[#234b24] transition-colors flex items-center justify-center gap-2 text-sm sm:text-base">
                    <Video size={16} /> <span className="sm:hidden">Join Session</span><span className="hidden sm:inline">Join Now</span>
                </button>
            ) : status === "Completed" ? (
                <div className="w-full sm:w-auto text-center sm:text-right">
                    <span className="inline-block px-3 py-1 bg-gray-200 dark:bg-zinc-700 text-gray-600 dark:text-gray-300 text-xs font-bold rounded-full">Completed</span>
                </div>
            ) : (
                <button className="w-full sm:w-10 h-10 rounded-xl bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 flex items-center justify-center text-gray-400 hover:text-[var(--color-primary)] hover:border-[var(--color-primary)] transition-all">
                    <span className="sm:hidden text-sm font-medium mr-2 text-gray-600 dark:text-gray-300">View Details</span>
                    <ChevronRight size={20} />
                </button>
            )}
        </div>
    </div>
);

const RequestCard = ({ name, tag, time }) => (
    <div className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-zinc-800 transition-colors cursor-pointer group">
        <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-sm">
                {name.charAt(0)}
            </div>
            <div>
                <h4 className="font-bold text-gray-900 dark:text-white text-sm">{name}</h4>
                <span className="text-xs px-2 py-0.5 bg-gray-100 dark:bg-zinc-700 text-gray-500 rounded-full">{tag}</span>
            </div>
        </div>
        <span className="text-xs text-gray-400 group-hover:text-[var(--color-primary)]">{time}</span>
    </div>
);

export default CounselorPortal;
