import * as THREE from 'three';
export const navLinks = [
    {
        id: 1,
        name: 'Home',
        href: '#home',

    },
    {
        id: 2,
        name: 'About',
        href: '#about',
    },
    {
        id: 3,
        name: 'Projects',
        href: '#projects',
    },
    {
        id: 4,
        name: 'Get in Touch',
        href: '#getintouch',
    },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
        deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
        deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
        cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
        reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
        ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
        targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
    };
};



export const SCREEN_POSITIONS = {
    defaultPosition: {
        position: new THREE.Vector3(-2, 10, 45),
        rotation: new THREE.Euler(0, 0, 0),
    },
    screenProjects: {
        position: new THREE.Vector3(-4, 2.86, 4.48),
        rotation: new THREE.Euler(-0.1, -0.3, 0),
    },
    screenSkills: {
        position: new THREE.Vector3(-4, 2.86, 4.48),
        rotation: new THREE.Euler(-0.1, -0.3, 0),
    },
    TV_Screen: {
        position: new THREE.Vector3(-15, 10, 10),
        rotation: new THREE.Euler(0, -1.53, -0.2),
    },
    screen: {
        position: new THREE.Vector3(0, 15, 40),
        rotation: new THREE.Euler(0, 0, 0),
    },
    screenContact: {
        position: new THREE.Vector3(-4, 2.86, 4.48),
        rotation: new THREE.Euler(-0.1, -0.3, 0),
    },
    screenZoomedIn: {
        position: new THREE.Vector3(-3, 15, 20),
        rotation: new THREE.Euler(0, 0, 0),
    },
}