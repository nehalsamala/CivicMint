import React from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import {
    LayoutDashboard,
    Camera,
    Map as MapIcon,
    Users,
    Trophy,
    Wallet,
    Leaf,
    Search,
    Bell
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export function AppLayout() {
    const location = useLocation();

    const navItems = [
        { id: 'dashboard', path: '/', label: 'Dashboard', icon: LayoutDashboard },
        { id: 'submit', path: '/submit', label: 'Submit Cleanup', icon: Camera },
        { id: 'map', path: '/map', label: 'Impact Map', icon: MapIcon },
        { id: 'challenges', path: '/challenges', label: 'Community Challenges', icon: Users },
        { id: 'leaderboards', path: '/leaderboards', label: 'Leaderboards', icon: Trophy },
        { id: 'wallet', path: '/wallet', label: 'Rewards Wallet', icon: Wallet },
    ];

    return (
        <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans flex flex-col md:flex-row">
            {/* Sidebar Navigation */}
            <aside className="w-full md:w-64 bg-white border-r border-slate-200 flex-shrink-0 md:h-screen md:sticky top-0 z-10 flex flex-col">
                <div className="p-6 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-green-600 flex items-center justify-center text-white">
                        <Leaf size={20} />
                    </div>
                    <span className="text-xl font-bold tracking-tight text-slate-900">CivicMint</span>
                </div>

                <nav className="flex-1 px-4 space-y-1 overflow-y-auto">
                    {navItems.map((item) => {
                        const Icon = item.icon;
                        return (
                            <NavLink
                                key={item.id}
                                to={item.path}
                                className={({ isActive }) => `w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${isActive
                                    ? 'bg-green-50 text-green-700'
                                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                                    }`}
                            >
                                {({ isActive }) => (
                                    <>
                                        <Icon size={18} className={isActive ? "text-green-600" : "text-slate-400"} />
                                        {item.label}
                                    </>
                                )}
                            </NavLink>
                        )
                    })}
                </nav>

                <div className="p-4 mt-auto">
                    <div className="p-4 rounded-xl bg-gradient-to-br from-green-500 to-emerald-700 text-white relative overflow-hidden group cursor-pointer hover:shadow-md transition-all">
                        <div className="relative z-10">
                            <p className="text-xs font-medium text-green-100 mb-1">Pro Member</p>
                            <p className="text-sm font-semibold">Unlock 2x Impact Points</p>
                        </div>
                        <Leaf className="absolute -bottom-2 -right-2 w-16 h-16 text-white opacity-10 group-hover:scale-110 transition-transform duration-500" />
                    </div>
                </div>
            </aside>

            {/* Main Content Area */}
            <main className="flex-1 min-w-0 overflow-auto">
                {/* Top Header */}
                <header className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-20 px-8 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <h1 className="text-2xl font-bold text-slate-900 hidden md:block">
                            {navItems.find(item => item.path === location.pathname)?.label || 'CivicMint'}
                        </h1>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="hidden md:flex items-center relative text-slate-400 focus-within:text-slate-600">
                            <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2" />
                            <input
                                type="text"
                                placeholder="Search impacts..."
                                className="pl-10 pr-4 py-2 bg-slate-100 border-none rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-green-500/20 w-64 transition-all"
                            />
                        </div>
                        <button className="p-2 text-slate-400 hover:text-slate-600 transition-colors relative">
                            <Bell size={20} />
                            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
                        </button>
                        <div className="w-9 h-9 rounded-full bg-slate-200 border-2 border-white shadow-sm overflow-hidden cursor-pointer">
                            <img src="https://i.pravatar.cc/100?img=33" alt="User" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </header>

                <div className="p-8 max-w-6xl mx-auto space-y-8">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={location.pathname}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                        >
                            <Outlet />
                        </motion.div>
                    </AnimatePresence>
                </div>
            </main>
        </div>
    );
}
