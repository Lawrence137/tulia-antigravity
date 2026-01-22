import { BarChart3, Users, TrendingUp, AlertTriangle, ShieldCheck, Download } from 'lucide-react';
import clsx from 'clsx';

const PartnerDashboard = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
                <div>
                    <h1 className="text-3xl font-display font-bold text-gray-900 dark:text-white">Partner Dashboard</h1>
                    <p className="text-gray-600 dark:text-gray-400">Organization: <span className="font-semibold">Nairobi Tech Hub</span></p>
                </div>
                <div className="flex gap-3">
                    <button className="flex items-center gap-2 bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-50 dark:hover:bg-zinc-700 transition-colors">
                        <Download size={16} /> Export Report
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <MetricCard icon={Users} label="Active Members" value="128/150" change="+12 this month" trend="up" />
                <MetricCard icon={TrendingUp} label="Engagement Rate" value="78%" change="+5% vs last month" trend="up" />
                <MetricCard icon={AlertTriangle} label="Burnout Risk" value="Low" change="Stable" trend="neutral" color="text-green-600" />
                <MetricCard icon={ShieldCheck} label="Compliance" value="100%" change="Fully Compliant" trend="neutral" color="text-blue-600" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Analytics Chart Area */}
                <div className="lg:col-span-2 bg-white dark:bg-zinc-900 rounded-2xl border border-gray-100 dark:border-zinc-800 p-6">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="font-bold text-gray-900 dark:text-white text-lg">Wellness Trends</h2>
                        <select className="text-sm border-gray-200 dark:border-zinc-700 rounded-md bg-transparent text-gray-500">
                            <option>Last 6 Months</option>
                            <option>Last Year</option>
                        </select>
                    </div>

                    {/* Simulated Chart */}
                    <div className="h-64 flex items-end justify-between gap-2 px-4 pb-4 border-b border-gray-100 dark:border-zinc-800">
                        {[40, 65, 55, 80, 75, 90].map((h, i) => (
                            <div key={i} className="w-full flex flex-col items-center gap-2 group">
                                <div
                                    className="w-full max-w-[40px] bg-[var(--color-primary-light)]/30 rounded-t-sm relative transition-all group-hover:bg-[var(--color-primary)]/50"
                                    style={{ height: `${h}%` }}
                                >
                                    <div className="opacity-0 group-hover:opacity-100 absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs py-1 px-2 rounded">
                                        {h}%
                                    </div>
                                </div>
                                <span className="text-xs text-gray-400 font-medium">{'Apr May Jun Jul Aug Sep'.split(' ')[i]}</span>
                            </div>
                        ))}
                    </div>
                    <div className="mt-4 flex gap-6 justify-center text-sm">
                        <div className="flex items-center gap-2 text-gray-500">
                            <span className="w-3 h-3 rounded-full bg-[var(--color-primary-light)]/30"></span> Engagement
                        </div>
                    </div>
                </div>

                {/* Team Insights */}
                <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-gray-100 dark:border-zinc-800 p-6">
                    <h2 className="font-bold text-gray-900 dark:text-white text-lg mb-4">Actionable Insights</h2>
                    <div className="space-y-4">
                        <InsightItem
                            title="Sales Team Stress"
                            desc="Increased reports of stress in the sales department this month."
                            severity="high"
                        />
                        <InsightItem
                            title="Positive Feedback"
                            desc="95% positive rating on recent group therapy workshops."
                            severity="low"
                        />
                        <InsightItem
                            title="Usage Spike"
                            desc="Unusual activity on Monday mornings. Consider flexible hours."
                            severity="medium"
                        />
                    </div>
                    <button className="w-full mt-6 py-2.5 text-sm font-semibold text-[var(--color-primary)] bg-[var(--color-primary)]/5 rounded-xl hover:bg-[var(--color-primary)]/10 transition-colors">
                        View Detailed Report
                    </button>
                </div>
            </div>
        </div>
    );
};

const MetricCard = ({ icon: Icon, label, value, change, trend, color = "text-gray-900 dark:text-white" }) => (
    <div className="glass-panel p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-gray-100 dark:border-zinc-800 shadow-sm hover:shadow-md transition-shadow">
        <div className="flex items-start justify-between mb-4">
            <div className="p-3 bg-gray-50 dark:bg-zinc-800 rounded-xl text-gray-500 dark:text-gray-400">
                <Icon size={20} />
            </div>
            {change && (
                <span className={clsx("text-xs font-medium px-2 py-1 rounded-full", trend === 'up' ? "bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-400" : "bg-gray-100 text-gray-600")}>
                    {change}
                </span>
            )}
        </div>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">{label}</p>
        <p className={clsx("text-2xl font-bold", color)}>{value}</p>
    </div>
);

const InsightItem = ({ title, desc, severity }) => {
    const colors = {
        high: "bg-red-50 border-red-100 text-red-700 dark:bg-red-900/10 dark:border-red-900/20 dark:text-red-400",
        medium: "bg-orange-50 border-orange-100 text-orange-700 dark:bg-orange-900/10 dark:border-orange-900/20 dark:text-orange-400",
        low: "bg-green-50 border-green-100 text-green-700 dark:bg-green-900/10 dark:border-green-900/20 dark:text-green-400",
    };

    return (
        <div className={clsx("p-4 rounded-xl border", colors[severity])}>
            <h4 className="font-bold text-sm mb-1">{title}</h4>
            <p className="text-xs opacity-90">{desc}</p>
        </div>
    )
}

export default PartnerDashboard;
