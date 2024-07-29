import React from 'react';
import CircularProgress from './CircularProgress';

const SecurityMessage = () => {
    return (
        <div className="bg-gray-800 p-4 rounded flex items-center justify-between">
            <div className="flex items-center">
                <CircularProgress value={90} />
                <div className="ml-4">
                    <h2 className="text-xl font-semibold">Your account security is 90%</h2>
                    <p className="text-gray-400">Please review your account security setting regularly and updates your password.</p>
                </div>
            </div>
            <div className="flex space-x-2">
                <button className="text-gray-400 border border-gray-400 px-4 py-2 rounded">Dismiss</button>
                <button className="bg-blue-500 text-white px-4 py-2 rounded">Review security</button>
            </div>
        </div>
    );
};

export default SecurityMessage;