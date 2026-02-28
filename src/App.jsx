import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppLayout } from './components/layout/AppLayout';
import { Dashboard } from './pages/Dashboard';
import { SubmitCleanup } from './pages/SubmitCleanup';
import { ImpactMap } from './pages/ImpactMap';
import { Challenges } from './pages/Challenges';
import { Leaderboards } from './pages/Leaderboards';
import { WalletPage } from './pages/Wallet';

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<AppLayout />}>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/submit" element={<SubmitCleanup />} />
                    <Route path="/map" element={<ImpactMap />} />
                    <Route path="/challenges" element={<Challenges />} />
                    <Route path="/leaderboards" element={<Leaderboards />} />
                    <Route path="/wallet" element={<WalletPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
