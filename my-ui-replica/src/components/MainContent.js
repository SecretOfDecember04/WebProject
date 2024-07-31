"use client";

import { useState } from 'react';
import TopBar from './TopBar';
import SecurityMessage from './SecurityMessage';
import { FaCheckCircle, FaTrash } from 'react-icons/fa';
import { Switch } from '@mui/material';
import ReactCountryFlag from "react-country-flag";

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
        <div className="flex-1 flex flex-col bg-black text-white">
            <TopBar />
            <div className="p-8 flex-1 overflow-auto bg-gray-900">
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
    const [password, setPassword] = useState('password');
    const [isEditing, setIsEditing] = useState(false);
    const [passwordStrength, setPasswordStrength] = useState('Weak');
    const [twoFactorEnabled, setTwoFactorEnabled] = useState(true);

    const handlePasswordChange = (e) => {
        const newPassword = e.target.value;
        setPassword(newPassword);
        setPasswordStrength(checkPasswordStrength(newPassword));
    };

    const handleEditClick = () => {
        setIsEditing(!isEditing);
    };

    const checkPasswordStrength = (password) => {
        let passStrength = 0;
        password.length > 8 && passStrength++;
        /[A-Z]/.test(password) && passStrength++;
        /[a-z]/.test(password) && passStrength++;
        /[0-9]/.test(password) && passStrength++;
        /[^A-Za-z0-9]/.test(password) && passStrength++;

        switch (passStrength) {
            case 1:
                return 'Weak';
            case 2:
                return 'Okay';
            case 3:
                return 'Good';
            case 4:
                return 'Strong';
            case 5:
                return 'Very Strong';
            default:
                return 'Weak';
        }
    };

    return (
        <div className="space-y-8">
            <SecurityMessage />
            <div className="bg-gray-800 p-6 rounded shadow space-y-4">
                <h2 className="text-xl font-semibold">Basics</h2>
                <div className="border-b border-gray-700 pb-4">
                    <div className="flex justify-between items-center space-x-4">
                        <div className="flex-1">
                            Password
                            <div className="text-gray-400 text-sm">Set a password to protect your account.</div>
                        </div>
                        <div className="flex-1 flex justify-center items-center space-x-2">
                            {isEditing ? (
                                <input
                                    type="text"
                                    value={password}
                                    onChange={handlePasswordChange}
                                    className="bg-gray-900 text-white p-2 rounded"
                                />
                            ) : (
                                <div className="text-gray-400">{'●'.repeat(password.length)}</div>
                            )}
                            {passwordStrength === 'Very Strong' && (
                                <FaCheckCircle className="text-green-500" />
                            )}
                            {passwordStrength && (
                                <div className={`${['Strong', 'Very Strong'].includes(passwordStrength) ? 'text-green-500' : 'text-red-500'}`}>
                                    {passwordStrength}
                                </div>
                            )}
                        </div>
                        <div className="flex-1 flex justify-end items-center">
                            <button
                                className="text-gray-400 border border-gray-400 px-4 py-2 rounded"
                                onClick={handleEditClick}
                            >
                                {isEditing ? 'Save' : 'Edit'}
                            </button>
                        </div>
                    </div>
                </div>
                <div className="border-b border-gray-700 pb-4">
                    <div className="flex justify-between items-center">
                        <div className="flex-1">
                            Two-step verification
                            <div className="text-gray-400 text-sm">
                                We recommend requiring a verification
                                <br />
                                code in addition to your password.
                            </div>
                        </div>
                        <div className="flex-1 flex justify-center items-center space-x-2">
                            <Switch
                                checked={twoFactorEnabled}
                                onChange={() => setTwoFactorEnabled(!twoFactorEnabled)}
                                color="primary"
                            />
                            <span className="ml-2 text-sm text-gray-400 w-48 text-center">
                                {twoFactorEnabled ? 'Two-step verification' : 'No two-step verification'}
                            </span>
                        </div>
                        <div className="flex-1 flex justify-end items-center">
                            <button className="text-gray-400 border border-gray-400 px-4 py-2 rounded">Edit</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-gray-800 p-6 rounded shadow space-y-4">
                <h2 className="text-xl font-semibold">Browsers and devices</h2>
                <div className="text-gray-400 text-sm mb-4">
                    These browsers and devices are currently signed in to your account. Remove any unauthorized devices.
                </div>
                <div className="border-b border-gray-700 mb-4"></div>
                <div className="space-y-2">
                    <div className="flex justify-between items-center border-b border-gray-700 pb-2">
                        <div className="flex flex-1 justify-between items-center pr-4">
                            <div>Brave on Mac OS X</div>
                            <div className="flex items-center space-x-2 text-right text-gray-400">
                                <ReactCountryFlag countryCode="VN" svg />
                                <span>Ninh Binh, Vietnam</span>
                            </div>
                        </div>
                        <div className="flex items-center space-x-2" style={{ minWidth: '180px' }}>
                            <div className="text-gray-400 text-center" style={{ width: '120px' }}>Current session</div>
                            <button className="text-gray-400 hover:text-red-700">
                                <FaTrash />
                            </button>
                        </div>
                    </div>
                    <div className="flex justify-between items-center border-b border-gray-700 pb-2">
                        <div className="flex flex-1 justify-between items-center pr-4">
                            <div>Mia's MacBook Pro</div>
                            <div className="flex items-center space-x-2 text-right text-gray-400">
                                <ReactCountryFlag countryCode="VN" svg />
                                <span>Ninh Binh, Vietnam</span>
                            </div>
                        </div>
                        <div className="flex items-center space-x-2" style={{ minWidth: '180px' }}>
                            <div className="text-gray-400 text-center" style={{ width: '120px' }}>Current session</div>
                            <button className="text-gray-400 hover:text-red-700">
                                <FaTrash />
                            </button>
                        </div>
                    </div>
                    <div className="flex justify-between items-center border-b border-gray-700 pb-2">
                        <div className="flex flex-1 justify-between items-center pr-4">
                            <div>Brave on Mac OS X</div>
                            <div className="flex items-center space-x-2 text-right text-gray-400">
                                <ReactCountryFlag countryCode="MX" svg />
                                <span>Mexico City, Mexico</span>
                            </div>
                        </div>
                        <div className="flex items-center space-x-2" style={{ minWidth: '180px' }}>
                            <div className="text-gray-400 text-center" style={{ width: '120px' }}>1 month ago</div>
                            <button className="text-gray-400 hover:text-red-700">
                                <FaTrash />
                            </button>
                        </div>
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="flex flex-1 justify-between items-center pr-4">
                            <div>Mia's MacBook Pro</div>
                            <div className="flex items-center space-x-2 text-right text-gray-400">
                                <ReactCountryFlag countryCode="MX" svg />
                                <span>Mexico City, Mexico</span>
                            </div>
                        </div>
                        <div className="flex items-center space-x-2" style={{ minWidth: '180px' }}>
                            <div className="text-gray-400 text-center" style={{ width: '120px' }}>1 month ago</div>
                            <button className="text-gray-400 hover:text-red-700">
                                <FaTrash />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainContent;
