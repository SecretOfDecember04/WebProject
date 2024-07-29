"use client";

import { useState } from 'react';
import TopBar from './TopBar';
import SecurityMessage from './SecurityMessage';

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
        <div className="flex-1 flex flex-col bg-gray-900 text-white">
            <TopBar />
            <div className="p-8 flex-1 overflow-auto">
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
                        {activeTab === 'Security' && <SecurityTab />}
                    </div>
                </div>
            </div>
        </div>
    );
};

const SecurityTab = () => {
    return (
        <div className="space-y-8">
            <SecurityMessage />
            <div className="bg-gray-800 p-6 rounded shadow space-y-4">
                <h2 className="text-xl font-semibold">Basics</h2>
                <div className="flex justify-between items-center border-b border-gray-700 pb-4">
                    <div>Password</div>
                    <div className="text-gray-400 text-sm">Set a password to protect your account.</div>
                </div>
                <div className="text-gray-400">●●●●●●●●●●●●●●●●●●●●</div>
                <button className="text-blue-500">Edit</button>
            </div>
                <div className="flex justify-between items-center border-b border-gray-700 pb-4">
                    <div>
                        <div>Two-step verification</div>
                        <div className="text-gray-400 text-sm">We recommend requiring a verification code in addition to your password.</div>
                    </div>
                    <div className="flex items-center">
                        <div className="text-gray-400 mr-2">Enabled</div>
                        <button className="text-blue-500">Edit</button>
                    </div>
                </div>
            <div className="bg-gray-800 p-6 rounded shadow space-y-4">
                <h2 className="text-xl font-semibold">Browsers and devices</h2>
                <div className="text-gray-400 text-sm mb-4">These browsers and devices are currently signed in to your account. Remove any unauthorized devices.</div>
                <div className="space-y-2">
                    <div className="flex justify-between items-center border-b border-gray-700 pb-2">
                        <div>Brave on Mac OS X - Ninh Binh, Vietnam</div>
                        <div className="flex items-center space-x-2">
                            <div className="text-gray-400">Current session</div>
                            <button className="text-blue-500">Remove</button>
                        </div>
                    </div>
                    <div className="flex justify-between items-center border-b border-gray-700 pb-2">
                        <div>Mia's MacBook Pro - Ninh Binh, Vietnam</div>
                        <div className="flex items-center space-x-2">
                            <div className="text-gray-400">Current session</div>
                            <button className="text-blue-500">Remove</button>
                        </div>
                    </div>
                    <div className="flex justify-between items-center border-b border-gray-700 pb-2">
                        <div>Brave on Mac OS X - Mexico City, Mexico</div>
                        <div className="flex items-center space-x-2">
                            <div className="text-gray-400">1 month ago</div>
                            <button className="text-blue-500">Remove</button>
                        </div>
                    </div>
                    <div className="flex justify-between items-center">
                        <div>Mia's MacBook Pro - Mexico City, Mexico</div>
                        <div className="flex items-center space-x-2">
                            <div className="text-gray-400">1 month ago</div>
                            <button className="text-blue-500">Remove</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainContent;
