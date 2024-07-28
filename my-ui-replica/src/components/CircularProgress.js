import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const CircularProgress = ({ value }) => {
    return (
        <div className="w-12 h-12">
            <CircularProgressbar
                value={value}
                styles={buildStyles({
                    rotation: 0.90,
                    strokeLinecap: 'round',
                    textColor: 'transparent',
                    pathColor: '#3b82f6',
                    trailColor: '#374151',
                    strokeWidth: 40,
                })}
            />
        </div>
    );
};

export default CircularProgress;
