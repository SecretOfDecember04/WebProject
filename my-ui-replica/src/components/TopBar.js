import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const TopBar = () => {
    return (
        <div className="flex items-center justify-between bg-gray-800 p-4">
            <div className="flex items-center">
                <div className="text-white text-2xl font-bold">Mia de Silva</div>
                <div className="text-gray-400 ml-4">v4.0</div>
            </div>
            <div className="flex items-center space-x-4">
                <div className="relative">
                    <span className="absolute top-1/2 transform -translate-y-1/2 left-3 text-gray-500">
                        <FontAwesomeIcon icon={faSearch} />
                    </span>
                    <input
                        type="text"
                        placeholder="Search"
                        className="bg-gray-700 text-white rounded-full pl-10 pr-4 py-2 focus:outline-none"
                    />
                </div>
                <button className="text-gray-400 border border-gray-400 px-4 py-2 rounded"> + Invite</button>
                <button className="bg-blue-500 text-white px-4 py-2 rounded">Upgrade</button>
                <div className="w-10 h-10 rounded-full bg-gray-600">
                    {"picture"}
                </div>
            </div>
        </div>
    );
};

export default TopBar;
