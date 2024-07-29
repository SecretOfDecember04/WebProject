import React from 'react';

const TopBar = () => {
    return (
        <div className="flex items-center justify-between bg-gray-800 p-4">
            <div className="flex items-center">
                <div className="text-white text-2xl font-bold">Untitled UI</div>
                <div className="text-gray-400 ml-4">v4.0</div>
            </div>
            <div className="flex items-center space-x-4">
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Search"
                        className="bg-gray-700 text-white rounded-full px-4 py-2 focus:outline-none"
                    />
                    <span className="absolute top-1/2 transform -translate-y-1/2 left-3 text-gray-500">
                        🔍
                    </span>
                </div>
                <button className="bg-blue-500 text-white px-4 py-2 rounded"> + Invite</button>
                <button className="bg-blue-500 text-white px-4 py-2 rounded">Upgrade</button>
                <div className="w-10 h-10 rounded-full bg-gray-600">
                    {"picture"}
                </div>
            </div>
        </div>
    );
};

export default TopBar;
