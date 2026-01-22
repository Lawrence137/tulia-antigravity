import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mic, MicOff, Video, VideoOff, PhoneOff, MessageSquare, MoreVertical, Clock } from 'lucide-react';
import clsx from 'clsx';

const SessionRoom = () => {
    const navigate = useNavigate();
    const [micOn, setMicOn] = useState(true);
    const [cameraOn, setCameraOn] = useState(true);
    const [timeLeft, setTimeLeft] = useState(3600); // 60 minutes in seconds

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
    };

    const handleEndCall = () => {
        const confirmEnd = window.confirm("Are you sure you want to end the session?");
        if (confirmEnd) {
            navigate('/feedback/123');
        }
    };

    return (
        <div className="h-screen bg-gray-900 flex flex-col relative overflow-hidden">
            {/* Header / Timer */}
            <div className="absolute top-0 left-0 right-0 z-20 p-4 flex justify-between items-center bg-gradient-to-b from-black/70 to-transparent text-white">
                <div className="flex items-center gap-2 bg-black/40 px-3 py-1.5 rounded-full border border-white/10">
                    <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                    <span className="text-sm font-medium">Recording</span>
                </div>
                <div className="flex items-center gap-2 bg-black/40 px-4 py-2 rounded-full border border-white/10 font-mono text-lg font-bold">
                    <Clock size={18} className="text-[var(--color-primary-light)]" />
                    {formatTime(timeLeft)}
                </div>
                <button className="p-2 hover:bg-white/10 rounded-full">
                    <MoreVertical size={24} />
                </button>
            </div>

            {/* Main Video Area (Remote) */}
            <div className="flex-grow relative bg-gray-800 flex items-center justify-center">
                <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1000"
                    alt="Dr. Amani K."
                    className="absolute inset-0 w-full h-full object-cover opacity-90"
                />
                <div className="absolute bottom-24 left-6 text-white text-shadow">
                    <h2 className="text-2xl font-bold">Dr. Amani K.</h2>
                    <p className="text-white/80">Clinical Psychologist</p>
                </div>
            </div>

            {/* Self View (PIP) */}
            <div className="absolute bottom-24 right-6 w-32 md:w-48 aspect-[3/4] bg-black rounded-xl overflow-hidden border-2 border-white/20 shadow-2xl z-20">
                {cameraOn ? (
                    <div className="w-full h-full bg-gray-700 flex items-center justify-center text-gray-400 text-xs">
                        Self View
                    </div>
                ) : (
                    <div className="w-full h-full bg-gray-900 flex items-center justify-center text-white">
                        <VideoOff size={24} />
                    </div>
                )}
            </div>

            {/* Controls Bar */}
            <div className="bg-gray-900 border-t border-white/10 p-6 flex items-center justify-center gap-6 z-30">
                <ControlBtn
                    icon={micOn ? Mic : MicOff}
                    active={micOn}
                    onClick={() => setMicOn(!micOn)}
                />
                <ControlBtn
                    icon={cameraOn ? Video : VideoOff}
                    active={cameraOn}
                    onClick={() => setCameraOn(!cameraOn)}
                />
                <button
                    onClick={handleEndCall}
                    className="w-16 h-16 rounded-full bg-red-600 hover:bg-red-700 text-white flex items-center justify-center transition-all shadow-lg shadow-red-900/40"
                >
                    <PhoneOff size={28} />
                </button>
                <ControlBtn
                    icon={MessageSquare}
                    active={false}
                    onClick={() => { }}
                />
            </div>
        </div>
    );
};

const ControlBtn = ({ icon: Icon, active, onClick }) => (
    <button
        onClick={onClick}
        className={clsx(
            "w-12 h-12 rounded-full flex items-center justify-center transition-all",
            active
                ? "bg-gray-800 text-white hover:bg-gray-700"
                : "bg-white text-gray-900 hover:bg-gray-200"
        )}
    >
        <Icon size={20} />
    </button>
);

export default SessionRoom;
