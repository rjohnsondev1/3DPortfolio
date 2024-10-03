import React from 'react';
import { logo } from '../assets';
import '../index.css'; // Ensure this path points to your CSS file

const LoadingScreen = ({ onEnter, started }) => {
    return (
        <div className={`loading-screen ${started ? 'loaded' : ''}`}>
            <div className="logo-container">
                <img src={logo} alt='logo' className='logo' />
            </div>
            {/* Show "Enter" button only if the loading is done (progress = 100%) */}
            {!started && (
                <button onClick={onEnter} className="enter-button">
                    Enter
                </button>
            )}
        </div>
    );
};

export default LoadingScreen;
