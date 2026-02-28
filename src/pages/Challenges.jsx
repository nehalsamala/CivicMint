import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trophy, Leaf, ShieldCheck, HeartHandshake } from "lucide-react";
import { motion } from "framer-motion";

export function Challenges() {
    return (
        <div className="space-y-8">
            <div>
                <h2 className="text-2xl font-bold tracking-tight text-slate-900">Community Challenges</h2>
                <p className="text-slate-500 mt-1">Join local initiatives to maximize your impact and earn bonus rewards.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Active Challenge */}
                <Card className="border-green-100 bg-gradient-to-b from-green-50/50 to-white shadow-sm overflow-hidden relative">
                    <div className="absolute top-0 left-0 w-1 h-full bg-green-500"></div>
                    <CardHeader className="pb-3">
                        <div className="flex justify-between items-start">
                            <div>
                                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-green-700 bg-green-100 px-2 py-1 rounded-md mb-2">
                                    <Leaf size={12} /> Active Challenge
                                </span>
                                <CardTitle className="text-xl">Weekend River Cleanup</CardTitle>
                            </div>
                            <div className="w-12 h-12 rounded-full bg-white border border-slate-100 shadow-sm flex flex-col items-center justify-center leading-tight">
                                <span className="text-sm font-bold text-slate-700">3</span>
                                <span className="text-[10px] text-slate-500 uppercase">Days</span>
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <p className="text-sm text-slate-600">Help us clear plastic waste from the local riverbanks before the rainy season begins.</p>
                        <div>
                            <div className="flex justify-between text-xs text-slate-600 mb-1.5">
                                <span className="font-medium">1,200 / 2,000 kg collected</span>
                                <span className="font-bold text-green-600">60%</span>
                            </div>
                            <div className="h-3 w-full bg-slate-100 rounded-full overflow-hidden">
                                <motion.div
                                    className="h-full bg-green-500 rounded-full relative"
                                    initial={{ width: 0 }}
                                    animate={{ width: "60%" }}
                                    transition={{ duration: 1.5, delay: 0.2 }}
                                >
                                    <div className="absolute top-0 right-0 bottom-0 w-8 bg-white/20 animate-pulse"></div>
                                </motion.div>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
                            <div className="bg-amber-100 p-3 rounded-xl text-amber-600">
                                <Trophy size={20} />
                            </div>
                            <div className="flex-1">
                                <p className="text-xs text-slate-500">Milestone Reward</p>
                                <p className="text-sm font-bold text-slate-800">500 Bonus Pts + River Guardian Badge</p>
                            </div>
                            <Button className="bg-green-600 hover:bg-green-700 text-white rounded-lg px-4">Join Now</Button>
                        </div>
                    </CardContent>
                </Card>

                {/* Sponsor Block */}
                <Card className="border-slate-200 shadow-sm flex flex-col">
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <div className="flex items-center gap-2 text-green-600">
                            <ShieldCheck size={20} />
                            <CardTitle className="text-lg font-bold text-slate-900">Supported By</CardTitle>
                        </div>
                    </CardHeader>
                    <CardContent className="flex flex-col flex-1 pb-6">
                        <p className="text-sm text-slate-600 mb-6">
                            This week's cleanup initiatives are powered by our civic partners and community donors.
                        </p>

                        <div className="grid grid-cols-2 gap-4 mb-8">
                            <div className="h-16 border border-slate-100 rounded-xl flex items-center justify-center grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100 cursor-pointer bg-slate-50">
                                <span className="font-black text-slate-800 text-lg tracking-tighter">ECO <span className="text-green-600">CORP</span></span>
                            </div>
                            <div className="h-16 border border-slate-100 rounded-xl flex items-center justify-center grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100 cursor-pointer bg-slate-50">
                                <ShieldCheck size={24} className="text-blue-600 mr-2" /> <span className="font-bold text-slate-700 text-sm">GovTrust</span>
                            </div>
                        </div>

                        <div className="mt-auto bg-green-50 p-5 rounded-xl border border-green-100">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="bg-green-200 p-2 rounded-full text-green-700">
                                    <HeartHandshake size={20} />
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-green-900">Boost the impact</p>
                                    <p className="text-xs text-green-700">Sponsor local cleaners directly</p>
                                </div>
                            </div>
                            <div className="flex gap-2">
                                <Button variant="outline" className="flex-1 bg-white border-green-200 text-green-700 hover:bg-green-50 hover:text-green-800 transition-colors">
                                    Donate $5
                                </Button>
                                <Button className="flex-1 bg-green-700 hover:bg-green-800 text-white">
                                    Custom Amount
                                </Button>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
