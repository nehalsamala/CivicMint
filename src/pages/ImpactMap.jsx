import React from 'react';
import { Card } from "@/components/ui/card";
import { MapIcon } from "lucide-react";
import { motion } from "framer-motion";

export function ImpactMap() {
    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-2xl font-bold tracking-tight text-slate-900">Interactive Impact Map</h2>
                <p className="text-slate-500 mt-1">Discover areas that need attention and see where the community has made an impact.</p>
            </div>

            <Card className="border-slate-200 shadow-sm group overflow-hidden h-[600px] relative">
                <div className="absolute inset-0 bg-slate-100">
                    {/* Simulated Map Background */}
                    <div className="absolute inset-0 opacity-40 bg-[url('https://www.transparenttextures.com/patterns/cartographer.png')]" style={{ backgroundColor: '#e2e8f0' }}></div>

                    {/* Interactive Hotspots */}
                    <motion.div
                        className="absolute top-[30%] left-[25%] w-6 h-6 bg-green-500 rounded-full border-4 border-white shadow-lg cursor-pointer hover:scale-125 transition-transform z-10"
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ repeat: Infinity, duration: 2.5 }}
                    />
                    <div className="absolute top-[45%] left-[60%] w-4 h-4 bg-green-400 rounded-full border-2 border-white shadow-md cursor-pointer hover:scale-125 transition-transform z-10" />
                    <div className="absolute bottom-[20%] left-[40%] w-8 h-8 bg-green-600 rounded-full border-4 border-white shadow-lg cursor-pointer z-10 flex items-center justify-center hover:scale-110 transition-transform">
                        <span className="w-2 h-2 bg-white rounded-full"></span>
                    </div>
                    <div className="absolute top-[15%] right-[20%] w-5 h-5 bg-amber-500 rounded-full border-2 border-white shadow-md cursor-pointer hover:scale-125 transition-transform z-10" />

                    {/* Map Controls */}
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg shadow-sm border border-slate-200 p-2 flex flex-col gap-2 z-20">
                        <button className="w-8 h-8 flex items-center justify-center text-slate-700 hover:bg-slate-100 rounded">+</button>
                        <div className="h-px bg-slate-200 w-full"></div>
                        <button className="w-8 h-8 flex items-center justify-center text-slate-700 hover:bg-slate-100 rounded">-</button>
                    </div>

                    {/* Map Legend */}
                    <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-md border border-slate-200 z-20">
                        <h4 className="text-sm font-bold text-slate-800 mb-3">Map Legend</h4>
                        <div className="space-y-2">
                            <div className="flex items-center gap-2">
                                <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                                <span className="text-xs text-slate-600">Cleaned Area</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="w-3 h-3 bg-green-600 rounded-full"></span>
                                <span className="text-xs text-slate-600">Major verified impact</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="w-3 h-3 bg-amber-500 rounded-full"></span>
                                <span className="text-xs text-slate-600">Reported (Needs Cleanup)</span>
                            </div>
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    );
}
