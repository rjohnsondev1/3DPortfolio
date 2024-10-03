// Footer.js
import React from 'react';

const Footer = ({ isMuted, handleMute,  lockCamera, unlockCamera}) => {
    const handleMuteClick = (e) => {
        handleMute(e);
        lockCamera();

        setTimeout(() => {
            unlockCamera();
        }, 500);


    }
    return (
        <footer className="absolute bottom-0 left-0 w-full p-4 flex justify-between items-center text-white z-50">
            <h4>How to Navigate</h4>
            <ul>
                <li><strong>Left Click: </strong> Rotate the camera</li>
                <li><strong>Click computer:</strong> To Interact</li>
            </ul>

            {/* Mute Button */}
            <button onClick={handleMuteClick} className="bg-blue-600 p-2 rounded hover:bg-blue-600">
                {isMuted ? 'Unmute' : 'Mute'}
            </button>

            {/* Tips Toggle */}

        </footer>
    );
};

export default Footer;

