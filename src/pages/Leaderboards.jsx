import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function Leaderboards() {
    return (
        <div className="space-y-6 max-w-4xl mx-auto">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-2xl font-bold tracking-tight text-slate-900">Top Contributors</h2>
                    <p className="text-slate-500 mt-1">See how your impact compares with the rest of the community.</p>
                </div>
                <div className="flex gap-2 bg-slate-100 p-1 rounded-lg">
                    <Button variant="ghost" className="bg-white shadow-sm text-slate-800 rounded-md px-4 py-1.5 h-auto">All Time</Button>
                    <Button variant="ghost" className="text-slate-500 hover:text-slate-700 rounded-md px-4 py-1.5 h-auto">This Month</Button>
                </div>
            </div>

            <Card className="border-slate-200 shadow-sm">
                <CardContent className="p-0">
                    <div className="divide-y divide-slate-100">
                        {[
                            { rank: 1, name: "Arjun Mehta", points: "4,250", icon: "🥇", bg: "bg-amber-50" },
                            { rank: 2, name: "Sneha Patel", points: "3,820", icon: "🥈", bg: "bg-slate-50" },
                            { rank: 3, name: "Karan Singh", points: "3,410", icon: "🥉", bg: "bg-orange-50" },
                            { rank: 4, name: "Ravi Kumar", points: "2,980", icon: "4", bg: "bg-white" },
                            { rank: 5, name: "Anita Desai", points: "2,750", icon: "5", bg: "bg-white" },
                            { rank: 6, name: "Vikram Sharma", points: "2,430", icon: "6", bg: "bg-white" },
                        ].map((user) => (
                            <div key={user.rank} className={`flex items-center gap-6 p-4 transition-colors hover:bg-slate-50 ${user.bg}`}>
                                <div className={`text-xl w-8 text-center font-bold ${typeof user.icon === 'number' ? 'text-slate-400' : ''}`}>{user.icon}</div>
                                <div className="w-12 h-12 rounded-full bg-slate-200 overflow-hidden border-2 border-white shadow-sm">
                                    <img src={`https://i.pravatar.cc/100?img=${user.rank + 10}`} alt={user.name} className="w-full h-full object-cover" />
                                </div>
                                <div className="flex-1">
                                    <p className="text-base font-semibold text-slate-900">{user.name}</p>
                                    <p className="text-sm text-slate-500">Verified Volunteer</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-lg font-bold text-green-600">{user.points}</p>
                                    <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Points</p>
                                </div>
                            </div>
                        ))}

                        <div className="border-t-2 border-dashed border-slate-200"></div>

                        <div className="flex items-center gap-6 p-5 bg-slate-900 text-white rounded-b-lg">
                            <div className="text-xl font-bold w-8 text-center text-slate-400">42</div>
                            <div className="w-12 h-12 rounded-full bg-slate-700 overflow-hidden border-2 border-slate-600 shadow-sm">
                                <img src={`https://i.pravatar.cc/100?img=33`} alt="You" className="w-full h-full object-cover" />
                            </div>
                            <div className="flex-1">
                                <p className="text-base font-bold text-white">You</p>
                                <p className="text-sm text-slate-400">Pro Member</p>
                            </div>
                            <div className="text-right">
                                <p className="text-lg font-bold text-green-400">1,240</p>
                                <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Points</p>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
