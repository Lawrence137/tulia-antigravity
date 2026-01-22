import { useNavigate } from 'react-router-dom';
import { Heart, Briefcase, Brain, Users, Zap, Frown } from 'lucide-react';
import { motion } from 'framer-motion';

const CategorySelection = () => {
    const navigate = useNavigate();

    const categories = [
        { id: 'anxiety', label: 'Anxiety & Stress', icon: Zap, color: 'bg-orange-100 text-orange-600' },
        { id: 'depression', label: 'Depression', icon: Frown, color: 'bg-blue-100 text-blue-600' },
        { id: 'relationships', label: 'Relationships', icon: Heart, color: 'bg-red-100 text-red-600' },
        { id: 'career', label: 'Career Guidance', icon: Briefcase, color: 'bg-purple-100 text-purple-600' },
        { id: 'trauma', label: 'Trauma & Grief', icon: Brain, color: 'bg-teal-100 text-teal-600' },
        { id: 'family', label: 'Family Issues', icon: Users, color: 'bg-green-100 text-green-600' },
    ];

    return (
        <div className="max-w-4xl mx-auto px-4 py-12">
            <h1 className="text-3xl font-display font-bold text-center text-gray-900 dark:text-white mb-4">What's on your mind?</h1>
            <p className="text-center text-gray-600 dark:text-gray-400 mb-12">Select a topic to find the right specialist for you.</p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {categories.map((cat, index) => (
                    <motion.button
                        key={cat.id}
                        onClick={() => navigate('/book/consultants')}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex flex-col items-center justify-center p-8 bg-white dark:bg-zinc-900 rounded-2xl border border-gray-100 dark:border-zinc-800 hover:border-[var(--color-primary)] hover:shadow-lg transition-all group text-center"
                    >
                        <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 text-2xl group-hover:scale-110 transition-transform ${cat.color}`}>
                            <cat.icon size={32} />
                        </div>
                        <span className="font-bold text-gray-800 dark:text-white group-hover:text-[var(--color-primary)] transition-colors">{cat.label}</span>
                    </motion.button>
                ))}
            </div>
        </div>
    );
};

export default CategorySelection;
