import React, { Suspense, useRef, useState, useEffect } from 'react';
import { useProgress } from '@react-three/drei'
import { Canvas } from '@react-three/fiber';
import { Leva } from 'leva';
import Room from '../components/Room';
import Loader from '../components/Loader';
import Camera from '../Camera';
import Stars from '../components/Stars';
import Tips from '../components/Tips';
import Os from '../components/OS/Os.jsx';
import {logo} from "../assets/index.js";
import { AppleLogo, lofi } from '../assets'
import LoadingScreen from '../components/LoadingScreen';
import Footer from '../components/Footer.jsx'
import Navbar from '../components/Navbar.jsx'

const Home = ( {isProjectsOpen, isEmailOpen, close, toggleProjectsOpen, toggleEmailOpen}) => {
    const [showOs, setShowOs] = useState(false);
    //const [ isProjectsOpenState, setIsProjectsOpen] = useState(false);
    const [isFinderOpen, setIsFinderOpen] = useState(false);
    //const [ isEmailOpenState, setIsEmailOpen] = useState(false);
    const [osPosition, setOsPosition] = useState({ top: '100px', left: '120px' });
    const [osTrigger, setOsTrigger] = useState(null);
    //const [loadingProgress, setLoadingProgress] = useState(0)
    const [isLoaded, setIsLoaded] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const audioRef = useRef(null);
    const [showTips, setShowTips] = useState(true); // Show tips by default
    const cameraRef = useRef();
    const [started, setStarted] = useState(false);
    const [isCameraLocked, setIsCameraLocked] = useState(false);


    // Prevent clamping issues with positioning
    const clampPosition = (position, screenSize, osSize) => {
        return Math.max(0, Math.min(screenSize - osSize, position));
    };

    const lockCamera = () => setIsCameraLocked(true);
    const unlockCamera = () => setIsCameraLocked(false);





    // Handle flying the camera to a specific position
    const handleFlyToPosition = (screenKey) => {
        if (!isCameraLocked && cameraRef.current) {
            setOsTrigger(screenKey);
            cameraRef.current.flyToPosition(screenKey);
        }
    };


   const handleComputerClick = (position) => {

            const screenWidth = window.innerWidth;
            const screenHeight = window.innerHeight;
            const osWidth = screenWidth * 0.6; // 60% of the screen width
            const osHeight = screenHeight * 0.55; // 60% of the screen height

            // Calculate the new position
            let top = position.y - 250; // Adjust top to account for your custom offset
            let left = position.x - 250; // Adjust left to account for your custom offset

            // Clamp the top position to ensure the OS doesn't go off-screen vertically
            top = clampPosition(top, screenHeight, osHeight); // 300 is approx. height of OS

            // Clamp the left position to ensure the OS doesn't go off-screen horizontally
            left = clampPosition(left, screenWidth, osWidth); // 600 is approx. width of OS

            setOsPosition({ top: `${top}px`, left: `${left}px` });

        handleFlyToPosition('screen');
    };


    // Close the OS interface
    const closeOs = () => {
        setShowOs(false);
        close();
        //setIsProjectsOpen(false);
        setIsFinderOpen(false);
       // setIsEmailOpen(false);
        setOsTrigger(null);
        unlockCamera()

    };

    // Mute/unmute functionality for audio


    // Execute camera move complete logic
    const handleCameraMoveComplete = () => {
        console.log('Camera move complete:', osTrigger)
        if (osTrigger === 'screen' || osTrigger === 'screenSkills' || osTrigger === 'screenProjects' || osTrigger === 'screenEmail') {
            setShowOs(true);
            //setIsProjectsOpen(osTrigger === 'screenProjects');
           // setIsFinderOpen(osTrigger === 'screenSkills');
           // setIsEmailOpen(osTrigger === 'screenEmail');
           // setOsTrigger(null);
            lockCamera()
        }
        setOsTrigger(null);
    };




    useEffect(() => {
        if ( isProjectsOpen || isEmailOpen) {
            setShowOs(true)
        }
    }, [ isProjectsOpen, isEmailOpen]);

    useEffect(() => {
        handleCameraMoveComplete();
    }, [handleCameraMoveComplete, osTrigger]);

const handleStart = () => {
    setStarted(true);
    if (audioRef.current) {
        audioRef.current.play().catch((err) => {
            console.error('Error playing audio:', err);
        });
    }
};

    const handleMute = (event) => {
        event.preventDefault()


        setIsMuted((prev) => !prev);





        }


    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.muted = isMuted;
            console.log(`Audio is now ${isMuted ? 'muted' : 'unmuted'}`)
        }
    }, [isMuted]);
    // Start the audio and the scene after mouse move interaction
    // Update the audio element's mute state whenever `isMuted` changes

    useEffect(() => {
        if (cameraRef.current) {
            cameraRef.current.isOsOpen = isCameraLocked;
        }
    }, [isCameraLocked]);


    return (
    <>
        {!started && <LoadingScreen onEnter={handleStart} started={started} />}
        {started && <Navbar onProjectsClick={toggleProjectsOpen} onEmailClick={toggleEmailOpen} lockCamera={lockCamera} unlockCamera={unlockCamera} />}
        {started && (

        <section className='h-screen'>
            <audio ref={audioRef} src={lofi} loop autoPlay muted={isMuted} />

            <div className='h-full'>
                <Leva hidden/>
                <Canvas className='w-full h-full'>
                    <Suspense>
                                <Camera ref={cameraRef} isOsOpen={isCameraLocked} onMoveComplete={handleCameraMoveComplete} />
                                <Room
                                    onComputerClick={handleComputerClick}
                                    scale={1.1} position={[-3.3, -3.5, -4.7]}
                                    rotation={[0.2, -1.4, 0]}
                                />
                                <Stars/>
                                <ambientLight intensity={0.7}/>
                                <directionalLight position={[1, 5, 1]} intensity={1.5}/>
                    </Suspense>
                </Canvas>
                {showOs && (
                    <div style={{
                        position: 'absolute', top: osPosition.top,
                        left: osPosition.left, width: '60vw', height: '75vh', padding: '20px', borderRadius: '1px',
                        boxShadow: '0 0 10px rgba(0,0,0,0.2)', overflow: 'hidden'
                    }}>
                        <Os
                            closeOs={closeOs}
                            isProjectsOpen={isProjectsOpen}
                            isFinderOpen={isFinderOpen}
                            isEmailOpen={isEmailOpen}
                            toggleEmailOpen={toggleEmailOpen}
                            toggleProjectsOpen={toggleProjectsOpen}
                        />

                    </div>

                )}
            </div>
            {started && <Footer isMuted={isMuted} handleMute={handleMute} lockCamera={lockCamera} unlockCamera={unlockCamera}  /> }
        </section>
                )}

    </>
    );
};

export default Home;
