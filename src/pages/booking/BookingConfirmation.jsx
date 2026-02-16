import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Clock, CreditCard, CheckCircle, Calendar, Shield, Smartphone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';

const BookingConfirmation = () => {
    const navigate = useNavigate();
    const [step, setStep] = useState(1);
    const [duration, setDuration] = useState(60);
    const [paymentMethod, setPaymentMethod] = useState(null);
    const [selectedSlot, setSelectedSlot] = useState(null);
    const [selectedDay, setSelectedDay] = useState('Mon 12');

    const rates = { 45: 2000, 60: 7500, 90: 10000 };

    // Mock blocked slots based on Counselor's schedule
    const isSlotBlocked = (day, slot) => {
        if (day === 'Mon 12' && slot === '2:00 PM') return true; // Team Meeting
        if (day === 'Tue 13' && slot === '11:00 AM') return true; // Overlap with 10:30 AM session
        return false;
    };

    const handleNext = () => {
        if (step === 3) {
            // Processing Payment
            setTimeout(() => setStep(4), 1500);
        } else {
            setStep(step + 1);
        }
    };

    return (
        <div className="max-w-2xl mx-auto px-4 py-12">
            <div className="mb-8 flex items-center justify-between relative">
                {[1, 2, 3].map((i) => (
                    <div key={i} className={clsx("w-10 h-10 rounded-full flex items-center justify-center font-bold z-10 transition-colors",
                        step >= i ? "bg-[var(--color-primary)] text-white" : "bg-gray-100 text-gray-400"
                    )}>
                        {step > i ? <CheckCircle size={20} /> : i}
                    </div>
                ))}
                <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-100 -z-0">
                    <div
                        className="h-full bg-[var(--color-primary)] transition-all duration-300"
                        style={{ width: `${((step - 1) / 2) * 100}%` }}
                    />
                </div>
            </div>

            <AnimatePresence mode="wait">
                {step === 1 && (
                    <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Select Session Duration</h2>
                        <div className="space-y-4">
                            {[45, 60, 90].map((mins) => (
                                <button
                                    key={mins}
                                    onClick={() => setDuration(mins)}
                                    className={clsx(
                                        "w-full p-6 rounded-2xl border flex items-center justify-between hover:shadow-md transition-all",
                                        duration === mins
                                            ? "border-[var(--color-primary)] bg-[var(--color-primary)]/5 ring-1 ring-[var(--color-primary)]"
                                            : "border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-900"
                                    )}
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="p-3 rounded-full bg-blue-50 text-blue-600">
                                            <Clock size={24} />
                                        </div>
                                        <div className="text-left">
                                            <p className="font-bold text-lg text-gray-900 dark:text-white">{mins} Minutes</p>
                                            <p className="text-sm text-gray-500">Standard Session</p>
                                        </div>
                                    </div>
                                    <span className="font-bold text-xl text-[var(--color-primary)]">KES {rates[mins]}</span>
                                </button>
                            ))}
                        </div>
                    </motion.div>
                )}

                {step === 2 && (
                    <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Choose a Time Slot</h2>
                        <div className="grid grid-cols-3 gap-3 mb-6">
                            {['Mon 12', 'Tue 13', 'Wed 14'].map(d => (
                                <button
                                    key={d}
                                    onClick={() => { setSelectedDay(d); setSelectedSlot(null); }}
                                    className={clsx(
                                        "text-center p-3 rounded-xl border transition-all",
                                        selectedDay === d
                                            ? "bg-[var(--color-primary)] text-white border-[var(--color-primary)]"
                                            : "bg-gray-50 border-gray-100 dark:bg-zinc-800 dark:border-zinc-700 hover:border-[var(--color-primary)]"
                                    )}
                                >
                                    <span className={clsx("block font-bold", selectedDay === d ? "text-white" : "text-gray-900 dark:text-white")}>{d}</span>
                                </button>
                            ))}
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                            {['10:00 AM', '11:00 AM', '2:00 PM', '4:00 PM'].map(slot => {
                                const blocked = isSlotBlocked(selectedDay, slot);
                                return (
                                    <button
                                        key={slot}
                                        onClick={() => !blocked && setSelectedSlot(slot)}
                                        disabled={blocked}
                                        className={clsx(
                                            "py-3 rounded-xl font-medium transition-colors border relative",
                                            blocked
                                                ? "bg-gray-100 dark:bg-zinc-800 text-gray-400 dark:text-gray-600 border-transparent cursor-not-allowed"
                                                : selectedSlot === slot
                                                    ? "bg-[var(--color-primary)] text-white border-[var(--color-primary)]"
                                                    : "bg-white dark:bg-zinc-900 border-gray-200 dark:border-zinc-700 text-gray-700 dark:text-gray-300 hover:border-[var(--color-primary)]"
                                        )}
                                    >
                                        {slot}
                                        {blocked && <span className="absolute top-1 right-2 text-[10px] items-center justify-center font-bold text-red-400 hidden sm:flex">BUSY</span>}
                                    </button>
                                );
                            })}
                        </div>
                    </motion.div>
                )}

                {step === 3 && (
                    <motion.div key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Select Payment Method</h2>

                        <div className="space-y-4 mb-8">
                            <PaymentOption
                                id="wallet"
                                icon={Shield}
                                title="TEP Wallet"
                                desc="Balance: KES 45,000"
                                active={paymentMethod}
                                onClick={setPaymentMethod}
                            />
                            <PaymentOption
                                id="mpesa"
                                icon={Smartphone}
                                title="M-Pesa"
                                desc="Pay via STK Push"
                                active={paymentMethod}
                                onClick={setPaymentMethod}
                            />
                            <PaymentOption
                                id="card"
                                icon={CreditCard}
                                title="Credit / Debit Card"
                                desc="Visa, Mastercard"
                                active={paymentMethod}
                                onClick={setPaymentMethod}
                            />
                        </div>

                        <div className="bg-gray-50 dark:bg-zinc-800 p-6 rounded-2xl">
                            <div className="flex justify-between mb-4 text-gray-600 dark:text-gray-400">
                                <span>Session ({duration} mins)</span>
                                <span>KES {rates[duration]}</span>
                            </div>
                            <div className="flex justify-between font-bold text-lg text-gray-900 dark:text-white pt-4 border-t border-gray-200 dark:border-zinc-700">
                                <span>Total</span>
                                <span>KES {rates[duration]}</span>
                            </div>
                        </div>
                    </motion.div>
                )}

                {step === 4 && (
                    <motion.div key="step4" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-8">
                        <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                            <CheckCircle size={48} />
                        </div>
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Booking Confirmed!</h2>
                        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md mx-auto">
                            Your session with Dr. Amani K. is scheduled for <span className="font-bold text-gray-900">{selectedDay} at {selectedSlot}</span>.
                        </p>

                        <div className="bg-blue-50 dark:bg-blue-900/10 p-4 rounded-xl text-blue-800 dark:text-blue-300 mb-8 max-w-sm mx-auto text-sm">
                            <p className="font-bold mb-2">Reminders Set:</p>
                            <div className="flex justify-center gap-4">
                                <span>24h before</span>
                                <span>2h before</span>
                                <span>15m before</span>
                            </div>
                        </div>

                        <button
                            onClick={() => navigate('/session/123')}
                            className="bg-[var(--color-primary)] text-white px-8 py-3 rounded-full font-bold hover:bg-[#234b24] transition-colors shadow-lg shadow-green-900/20"
                        >
                            Start Mock Session
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>

            {step < 4 && (
                <div className="mt-8 flex justify-end">
                    <button
                        onClick={handleNext}
                        disabled={step === 2 && !selectedSlot}
                        className="bg-[var(--color-primary)] text-white px-8 py-3 rounded-xl font-bold hover:bg-[#234b24] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {step === 3 ? 'Pay & Confirm' : 'Continue'}
                    </button>
                </div>
            )}
        </div>
    );
};

const PaymentOption = ({ id, icon: Icon, title, desc, active, onClick }) => (
    <button
        onClick={() => onClick(id)}
        className={clsx(
            "w-full p-4 rounded-xl border flex items-center gap-4 hover:shadow-sm transition-all text-left",
            active === id
                ? "border-[var(--color-primary)] bg-[var(--color-primary)]/5 ring-1 ring-[var(--color-primary)]"
                : "border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-900"
        )}
    >
        <div className="p-2 rounded-lg bg-gray-100 dark:bg-zinc-800 text-gray-600 dark:text-gray-400">
            <Icon size={24} />
        </div>
        <div>
            <p className="font-bold text-gray-900 dark:text-white">{title}</p>
            <p className="text-xs text-gray-500">{desc}</p>
        </div>
    </button>
);

export default BookingConfirmation;
