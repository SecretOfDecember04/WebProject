"use client";
import { useState } from 'react';

const tabs = [
    'General',
    'Security',
    'Billing',
    'Notifications',
    'Apps',
    'Branding',
    'Refer a friend',
    'Sharing',
];

const MainContent = () => {
    const [activeTab, setActiveTab] = useState('Security');

    return (
        <div className="flex-1 p-8 bg-gray-900 text-white">
            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-semibold mb-4">Mia de Silva</h1>
            </div>
            <div className="mt-4">
                <div className="flex space-x-4 border-b border-gray-700">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            className={`py-2 px-4 border-b-2 ${
                                activeTab === tab ? 'border-blue-500 text-blue-500' : 'border-transparent text-gray-400' 
                            }`}
                            onClick={() => setActiveTab(tab)}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
                <div className="mt-8">
                    {activeTab === 'Security' && <SecurityTab/>}
                    {/* more detail */}
                </div>
            </div>
        </div>
    );
};

const SecurityTab = () => {
    return (
        <div className="space-y-8">
            <div className="big-gray-800 p-6 rounded shadow">
                <div className="flex justify-between items-center">
                    <h2 className="text-xl font-semibold">Your account security is 90%</h2>
                    <button className="text-blue-500">Review security</button>
                </div>
            </div>
            <div className="big-gray-800 p-6 rounded shadow space-y-4">
                <h2 className="text-xl font-semibold">Basics</h2>
                <div className="flex justify-between items-center">
                    <div>Password</div>
                    <div className="text-gray-400">●●●●●●●●</div>
                    <button className="text-blue-500">Edit</button>
                </div>
            </div>
            <div className="big-gray-800 p-6 rounded shadow space-y-4">
                <h2 className="text-xl font-semibold">Browsers and devices</h2>
                <div className="space-y-2">
                    <div className="flex justify-between items-center">
                        <div>Brave on Mac OS X - Ninh Binh, Vietname</div>
                        <button className="text-blue-500">Remove</button>
                    </div>
                    <div className="flex justify-between items-center">
                        <div>Mia's MacBook Pro - Ninh Binh, vietnam</div>
                        <button className="text-blue-500">Remove</button>
                    </div>
                    <div className="flex justify-between items-center">
                        <div>Brave on Mac OS X - Mexico City, Mexico</div>
                        <button className="text-blue-500">Remove</button>
                    </div>
                    <div className="flex justify-between items-center">
                        <div>Mia's MacBook Pro - Mexico City, Mexico</div>
                        <button className="text-blue-500">Remove</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainContent;



