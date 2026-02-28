import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Leaf, MapIcon, Users, SlidersHorizontal, Camera, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

export function Dashboard() {
    return (
        <>
            <div className="flex flex-col md:flex-row gap-6 justify-between items-start md:items-end mb-8">
                <div>
                    <p className="text-slate-500 text-sm font-medium mb-1">Welcome back, Priya 👋</p>
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900">Your community impact</h2>
                </div>
                <div className="flex gap-3">
                    <Button variant="outline" className="text-slate-600 rounded-lg">
                        <SlidersHorizontal size={16} className="mr-2" /> Filter
                    </Button>
                    <Button asChild className="bg-green-600 hover:bg-green-700 text-white rounded-lg shadow-sm shadow-green-600/20">
                        <Link to="/submit">
                            <Camera size={16} className="mr-2" /> Submit Cleanup
                        </Link>
                    </Button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.1 }}>
                    <Card className="border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300">
                        <CardContent className="p-6">
                            <div className="flex justify-between items-start mb-4">
                                <div className="p-2.5 bg-green-100 text-green-700 rounded-xl">
                                    <Leaf size={24} />
                                </div>
                                <span className="flex items-center text-xs font-semibold text-green-600 bg-green-50 px-2 py-1 rounded-full">
                                    <ArrowUpRight size={14} className="mr-1" /> 12%
                                </span>
                            </div>
                            <h4 className="text-3xl font-bold text-slate-900 mb-1">1,240</h4>
                            <p className="text-sm text-slate-500 font-medium">Total Impact Points</p>

                            <div className="mt-4 pt-4 border-t border-slate-100">
                                <div className="flex justify-between text-xs text-slate-500 mb-2">
                                    <span>Next tier: Guardian</span>
                                    <span className="font-semibold text-slate-700">260 to go</span>
                                </div>
                                <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: "82%" }}
                                        transition={{ duration: 1, delay: 0.3 }}
                                        className="h-full bg-green-500 rounded-full"
                                    />
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.2 }}>
                    <Card className="border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300">
                        <CardContent className="p-6">
                            <div className="flex justify-between items-start mb-4">
                                <div className="p-2.5 bg-blue-100 text-blue-700 rounded-xl">
                                    <MapIcon size={24} />
                                </div>
                            </div>
                            <h4 className="text-3xl font-bold text-slate-900 mb-1">42 sq.m</h4>
                            <p className="text-sm text-slate-500 font-medium">Area Cleaned</p>
                            <div className="mt-4 pt-4 border-t border-slate-100">
                                <p className="text-xs text-slate-500">Across <span className="font-semibold text-slate-700">8</span> verified locations</p>
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.3 }}>
                    <Card className="border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300">
                        <CardContent className="p-6">
                            <div className="flex justify-between items-start mb-4">
                                <div className="p-2.5 bg-amber-100 text-amber-700 rounded-xl">
                                    <Users size={24} />
                                </div>
                            </div>
                            <h4 className="text-3xl font-bold text-slate-900 mb-1">14</h4>
                            <p className="text-sm text-slate-500 font-medium">Community Challenges</p>
                            <div className="mt-4 pt-4 border-t border-slate-100">
                                <p className="text-xs text-slate-500"><span className="font-semibold text-green-600">2 active</span> this week</p>
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>
            </div>

            <div className="mt-8 flex gap-4">
                <Link to="/map" className="text-sm font-semibold text-green-600 hover:text-green-700 flex items-center gap-1 group">
                    Explore Impact Map <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
            </div>
        </>
    );
}
