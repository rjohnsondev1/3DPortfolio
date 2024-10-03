import React, { useRef, useEffect, useState, useCallback, useImperativeHandle, forwardRef } from 'react';
import { useThree } from '@react-three/fiber';
import gsap from 'gsap';
import * as THREE from 'three';
import { SCREEN_POSITIONS } from './constants/index.js';

const Camera = forwardRef(({ onMoveComplete, isOsOpen }, ref) => {
    const camera = useRef();
    const { set } = useThree();
    const [positionIndex, setPositionIndex] = useState(0); // Track current position

    const initialPosition = SCREEN_POSITIONS.defaultPosition.position;
    const initialRotation = SCREEN_POSITIONS.defaultPosition.rotation;

    // Set camera to initial position on mount
    useEffect(() => {
        camera.current.position.copy(initialPosition);
        camera.current.rotation.copy(initialRotation);
        set({ camera: camera.current });
    }, [set]);

    // Define camera movement logic
    useImperativeHandle(ref, () => ({
        flyToPosition(screenKey) {
            if (isOsOpen) return;

            const { position, rotation } = SCREEN_POSITIONS[screenKey];

            // Animate camera position and rotation
            gsap.to(camera.current.position, {
                x: position.x,
                y: position.y,
                z: position.z,
                duration: 2,
                ease: 'sine.inOut',
            });

            gsap.to(camera.current.rotation, {
                x: rotation.x,
                y: rotation.y,
                z: rotation.z,
                duration: 2.2,
                ease: 'sine.inOut',
                onComplete: onMoveComplete,
            });
        }
    }));

    // Reset camera to default position
    const resetCamera = () => {
        if (isOsOpen) return;

        gsap.to(camera.current.position, {
            x: initialPosition.x,
            y: initialPosition.y,
            z: initialPosition.z,
            duration: 3,
            ease: 'sine.inOut',
        });

        gsap.to(camera.current.rotation, {
            x: initialRotation.x,
            y: initialRotation.y,
            z: initialRotation.z,
            duration: 3.2,
            ease: 'sine.inOut',
        });

        setPositionIndex(0);
    };

    // Handle mouse click to switch between positions
    const handleMouseClick = useCallback(() => {
        if (isOsOpen) return;

        const positions = ['TV_Screen', 'screen', 'screenZoomedIn'];
        if (positionIndex < positions.length) {
            ref.current.flyToPosition(positions[positionIndex]);
            setPositionIndex(positionIndex + 1);
        } else {
            resetCamera();
        }
    }, [positionIndex, ref, isOsOpen]);

    // Set up event listener for mouse click
    useEffect(() => {
        window.addEventListener('mousedown', handleMouseClick);
        return () => {
            window.removeEventListener('mousedown', handleMouseClick);
        };
    }, [handleMouseClick]);

    return (
        <perspectiveCamera
            ref={camera}
            fov={85}
            aspect={window.innerWidth / window.innerHeight}
            near={0.1}
            far={1000}
        />
    );
});

export default Camera;
