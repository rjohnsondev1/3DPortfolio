import React, { useState, useEffect } from 'react';
import { useProgress } from '@react-three/drei';
import { logo } from '../assets';

const LoadingScreen = (props) => {
    const { started, setStarted, handleStart } = props;
    const { progress } = useProgress();

    useEffect(() => {
        console.log(progress);
        if (progress === 100) {
            // Automatically enable the enter button when loading is complete
            setTimeout(() => {
                setStarted(false); // This ensures the loader stays visible until the user clicks "Enter"
            }, 800);
        }
    }, [progress, setStarted]);

    return (
        <div className={`fixed top-0 left-0 w-full h-full z-50 transition-opacity duration-1000 pointer-events-none
  flex items-center justify-center bg-black-300
  ${started ? "opacity-0" : "opacity-100"}`}>
            <div className="text-4xl md:text-9xl font-bold text-indigo-900 relative">
                {/* Display progress bar using the logo */}
                <div
                    className="absolute left-0 top-0 overflow-hidden truncate text-clip transition-all duration-500"
                    style={{
                        width: `${progress}%`,
                    }}
                >
                    <img src={logo} alt='logo' />
                </div>
                <div className="opacity-40">
                    <img src={logo} alt='logo' />
                </div>

                {/* Show the "Enter" button only when progress is 100% */}
                {progress === 100 && (
                    <button onClick={handleStart}
                            className="mt-10 text-white bg-indigo-500 p-4 rounded-lg">
                        Enter
                    </button>
                )}
            </div>
        </div>
    );
};

export default LoadingScreen;
