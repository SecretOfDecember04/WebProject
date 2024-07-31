import React from 'react';
import SideBar from '@/components/SideBar';
import MainContent from '@/components/MainContent';

const Settings = () => {
    return (
        <div className="flex h-screen">
            <SideBar />
            <MainContent />
        </div>
    );
};

export default Settings;