import React from 'react';

const SecurityMessage = () => {
    return (
        <div className="bg-gray-800 p-4 rounded flex items-center justify-between">
            <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01M12 4a8 8 0 100 16 8 8 0 000-16z" />
                    </svg>
                </div>
                <div className="ml-4">
                    <h2 className="text-xl font-semibold">Your account security is 90%</h2>
                    <p className="text-gray-400">Please review your account security settings regularly and update your password.</p>
                </div>
            </div>
            <div className="flex space-x-2">
                <button className="text-gray-400 border border-gray-400 px-4 py-2 rounded">Dismiss</button>
                <button className="bg-blue-500 text-white px-4 py-2 rounded">Review security</button>
            </div>
        </div>
    )
}

export default SecurityMessage;