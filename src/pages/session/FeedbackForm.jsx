import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Star } from 'lucide-react';
import clsx from 'clsx';
import { motion } from 'framer-motion';

const FeedbackForm = () => {
    const navigate = useNavigate();
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate submission
        setTimeout(() => {
            navigate('/dashboard');
        }, 1000);
    };

    return (
        <div className="min-h-screen bg-[var(--color-background)] flex items-center justify-center p-4">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="max-w-md w-full bg-white dark:bg-zinc-900 rounded-2xl shadow-xl border border-gray-100 dark:border-zinc-800 p-8 text-center"
            >
                <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600 dark:text-green-400">
                    <Star size={40} fill="currentColor" />
                </div>

                <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">How was your session?</h1>
                <p className="text-gray-600 dark:text-gray-400 mb-8">Your feedback helps us improve the Tulia experience.</p>

                <div className="flex justify-center gap-2 mb-8">
                    {[1, 2, 3, 4, 5].map((star) => (
                        <button
                            key={star}
                            className="transition-transform hover:scale-110"
                            onClick={() => setRating(star)}
                            onMouseEnter={() => setHover(star)}
                            onMouseLeave={() => setHover(rating)}
                        >
                            <Star
                                size={32}
                                className={clsx(
                                    "transition-colors",
                                    star <= (hover || rating)
                                        ? "text-yellow-400 fill-yellow-400"
                                        : "text-gray-300 dark:text-gray-600"
                                )}
                            />
                        </button>
                    ))}
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <textarea
                        placeholder="Share your thoughts (optional)..."
                        className="w-full p-4 rounded-xl bg-gray-50 dark:bg-zinc-800 border-none focus:ring-2 focus:ring-[var(--color-primary)] text-sm resize-none h-32"
                    ></textarea>

                    <button
                        type="submit"
                        disabled={rating === 0}
                        className="w-full bg-[var(--color-primary)] text-white py-3.5 rounded-xl font-bold hover:bg-[#234b24] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        Submit Feedback
                    </button>
                    <button
                        type="button"
                        onClick={() => navigate('/dashboard')}
                        className="text-sm text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                    >
                        Skip for now
                    </button>
                </form>
            </motion.div>
        </div>
    );
};

export default FeedbackForm;
