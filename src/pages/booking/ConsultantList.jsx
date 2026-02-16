import { useNavigate } from 'react-router-dom';
import { Star, Clock, Video, Award } from 'lucide-react';
import clsx from 'clsx';

const ConsultantList = () => {
    const navigate = useNavigate();

    const consultants = [
        { id: 1, name: "Dr. Amani K.", title: "Clinical Psychologist", rating: 4.9, reviews: 124, price: "KES 2000", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200", tags: ["Anxiety", "Depression"] },
        { id: 2, name: "James O.", title: "Licensed Counselor", rating: 4.8, reviews: 89, price: "KES 1500", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200", tags: ["Career", "Stress"] },
        { id: 3, name: "Sarah M.", title: "Trauma Specialist", rating: 5.0, reviews: 56, price: "KES 2500", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200", tags: ["Trauma", "Grief"] },
    ];

    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            <h1 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-6">Select a Consultant</h1>

            <div className="flex gap-4 mb-8 overflow-x-auto pb-2">
                <button className="px-4 py-2 rounded-full bg-gray-900 text-white text-sm font-medium whitespace-nowrap">All Specialists</button>
                <button className="px-4 py-2 rounded-full bg-gray-100 text-gray-700 text-sm font-medium whitespace-nowrap hover:bg-gray-200">Price: Low to High</button>
                <button className="px-4 py-2 rounded-full bg-gray-100 text-gray-700 text-sm font-medium whitespace-nowrap hover:bg-gray-200">Highest Rated</button>
                <button className="px-4 py-2 rounded-full bg-gray-100 text-gray-700 text-sm font-medium whitespace-nowrap hover:bg-gray-200">Available Now</button>
            </div>

            <div className="space-y-4">
                {consultants.map((c) => {
                    const isAmani = c.name === "Dr. Amani K.";
                    const isOnline = isAmani ? (JSON.parse(localStorage.getItem('counselorStatus')) ?? true) : true;

                    return (
                        <div key={c.id} className={clsx(
                            "bg-white dark:bg-zinc-900 border rounded-2xl p-6 flex flex-col sm:flex-row gap-6 transition-shadow",
                            !isOnline ? "opacity-75 border-gray-100 dark:border-zinc-800" : "border-gray-100 dark:border-zinc-800 hover:shadow-md"
                        )}>
                            <div className="relative">
                                <img src={c.image} alt={c.name} className={clsx("w-24 h-24 rounded-2xl object-cover bg-gray-100", !isOnline && "grayscale")} />
                                {!isOnline && (
                                    <div className="absolute inset-0 bg-white/50 dark:bg-black/50 rounded-2xl flex items-center justify-center">
                                        <span className="text-xs font-bold bg-gray-800 text-white px-2 py-1 rounded-md">Offline</span>
                                    </div>
                                )}
                            </div>

                            <div className="flex-grow">
                                <div className="flex justify-between items-start mb-2">
                                    <div>
                                        <h3 className="text-lg font-bold text-gray-900 dark:text-white">{c.name}</h3>
                                        <p className="text-gray-500 dark:text-gray-400 text-sm">{c.title}</p>
                                    </div>
                                    <div className="flex items-center gap-1 bg-yellow-50 dark:bg-yellow-900/20 px-2 py-1 rounded-lg text-yellow-700 dark:text-yellow-500 text-sm font-bold">
                                        <Star size={14} fill="currentColor" /> {c.rating}
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-2 mb-4">
                                    {c.tags.map(tag => (
                                        <span key={tag} className="text-xs font-medium px-2.5 py-1 bg-gray-50 dark:bg-zinc-800 text-gray-600 dark:text-gray-300 rounded-md">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex items-center gap-6 text-sm text-gray-500 dark:text-gray-400 border-t border-gray-50 dark:border-zinc-800 pt-4">
                                    <span className="flex items-center gap-1.5"><Video size={16} /> Video & Audio</span>
                                    <span className="flex items-center gap-1.5"><Award size={16} /> 5+ Years Exp.</span>
                                </div>
                            </div>

                            <div className="flex flex-col justify-between items-end min-w-[140px] border-l border-gray-50 dark:border-zinc-800 pl-6 border-dashed">
                                <div className="text-right mb-4">
                                    <span className="block text-xs text-gray-400">Starting from</span>
                                    <span className="font-bold text-xl text-[var(--color-primary)]">{c.price}</span>
                                </div>
                                <button
                                    onClick={() => isOnline && navigate('/book/confirm')}
                                    disabled={!isOnline}
                                    className={clsx(
                                        "w-full py-2.5 rounded-xl font-semibold transition-colors",
                                        isOnline
                                            ? "bg-[var(--color-primary)] text-white hover:bg-[#234b24]"
                                            : "bg-gray-100 text-gray-400 cursor-not-allowed dark:bg-zinc-800 dark:text-gray-600"
                                    )}
                                >
                                    {isOnline ? "Book Now" : "Unavailable"}
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ConsultantList;
