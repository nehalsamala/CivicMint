import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Wallet, Gift, ArrowRight, Clock } from "lucide-react";

export function WalletPage() {
    return (
        <div className="space-y-8 max-w-5xl mx-auto">
            <div>
                <h2 className="text-2xl font-bold tracking-tight text-slate-900">Rewards Wallet</h2>
                <p className="text-slate-500 mt-1">Manage your impact points and redeem them for local business rewards.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="border-green-200 bg-gradient-to-br from-green-600 to-emerald-800 text-white shadow-md md:col-span-1">
                    <CardContent className="p-8 flex flex-col h-full justify-center">
                        <div className="p-3 bg-white/20 rounded-xl w-fit mb-6">
                            <Wallet size={28} className="text-white" />
                        </div>
                        <p className="text-green-100 font-medium mb-1">Available Balance</p>
                        <h3 className="text-5xl font-bold mb-8">1,240 <span className="text-2xl font-normal text-green-200">pts</span></h3>

                        <div className="pt-6 border-t border-green-500/30">
                            <p className="text-sm text-green-100 mb-2">Lifetime Earned: 4,500 pts</p>
                            <p className="text-sm text-green-100">Next tier at 1,500 pts</p>
                        </div>
                    </CardContent>
                </Card>

                <Card className="border-slate-200 shadow-sm md:col-span-2">
                    <CardContent className="p-8">
                        <h3 className="text-lg font-bold text-slate-900 mb-6">Recent Transactions</h3>
                        <div className="space-y-6">
                            {[
                                { id: 1, type: "Earned", title: "Sector 12 Park Cleanup", amount: "+ 150 pts", date: "Today, 10:30 AM", icon: "🌱", color: "text-green-600" },
                                { id: 2, type: "Earned", title: "Weekend River Challenge", amount: "+ 500 pts", date: "Yesterday", icon: "🏆", color: "text-green-600" },
                                { id: 3, type: "Redeemed", title: "Free Coffee @ Local Cafe", amount: "- 200 pts", date: "Oct 12, 2026", icon: "☕", color: "text-slate-600" },
                                { id: 4, type: "Earned", title: "Bus Stop 4 Cleanup", amount: "+ 80 pts", date: "Oct 10, 2026", icon: "🌱", color: "text-green-600" },
                            ].map(tx => (
                                <div key={tx.id} className="flex items-center justify-between">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-xl">
                                            {tx.icon}
                                        </div>
                                        <div>
                                            <p className="font-semibold text-slate-900">{tx.title}</p>
                                            <div className="flex items-center gap-2 text-xs text-slate-500 mt-1">
                                                <span className="capitalize">{tx.type}</span> • <span>{tx.date}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <p className={`font-bold ${tx.color}`}>{tx.amount}</p>
                                </div>
                            ))}
                        </div>
                        <Button variant="ghost" className="w-full mt-6 text-slate-500 hover:text-slate-800">View Full History</Button>
                    </CardContent>
                </Card>
            </div>

            <div>
                <h3 className="text-xl font-bold tracking-tight text-slate-900 mb-4">Available Rewards</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                        { title: "$10 Transit Pass", cost: "500 pts", img: "🚆" },
                        { title: "Local Cafe Voucher", cost: "250 pts", img: "☕" },
                        { title: "Reusable Water Bottle", cost: "800 pts", img: "💧" }
                    ].map((reward, i) => (
                        <Card key={i} className="border-slate-200 shadow-sm hover:shadow-md transition-shadow cursor-pointer group">
                            <CardContent className="p-6">
                                <div className="text-4xl mb-4 p-4 bg-slate-50 rounded-xl w-fit group-hover:scale-110 transition-transform">{reward.img}</div>
                                <h4 className="font-bold text-slate-900 text-lg mb-1">{reward.title}</h4>
                                <p className="text-sm font-semibold text-green-600 mb-6">{reward.cost}</p>
                                <Button className="w-full bg-slate-900 hover:bg-slate-800 text-white">Redeem</Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
}
