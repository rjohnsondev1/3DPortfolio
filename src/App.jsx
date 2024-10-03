import React, { useState } from 'react';
import Navbar from "./components/Navbar.jsx";
import Home from "./sections/Home.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
    const [isProjectsOpen, setIsProjectsOpen] = useState(false);
    const [isEmailOpen, setIsEmailOpen] = useState(false);
    const [isCameraLocked, setIsCameraLocked] = useState(false);


    // Lock the camera
    const lockCamera = () => {
        setIsCameraLocked(true);
    };

    // Unlock the camera
    const unlockCamera = () => {
        setIsCameraLocked(false);
    };

    const handleProjectsClick = () => {
        setIsProjectsOpen(true);
        lockCamera();
    };

    const handleEmailClick = () => {
        setIsEmailOpen(true);
        lockCamera();
    };

    const closeOs = () => {
        setIsProjectsOpen(false);
        setIsEmailOpen(false);
    };

    return (
        <main >

            <Home
                isProjectsOpen={isProjectsOpen}
                isEmailOpen={isEmailOpen}
                close={closeOs}
                toggleProjectsOpen={handleProjectsClick}
                toggleEmailOpen={handleEmailClick}
                lockCamera={lockCamera}
                unlockCamera={unlockCamera}
                isCameraLocked={isCameraLocked}
            />

        </main>
    );
};

export default App;
