import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { useFrame, extend, useThree } from '@react-three/fiber';
import { ShaderMaterial } from 'three';

extend({ ShaderMaterial });

const Stars = () => {
    const galaxyRef = useRef();
    const { scene } = useThree();

    const textureLoader = new THREE.TextureLoader();
    const dotTexture = textureLoader.load('/textures/dotTexture.png')

    const galaxyColors = [
        new THREE.Color('#CFD6DE'),
        new THREE.Color('#1EE3CF'),
        new THREE.Color('#6B48FF'),
        new THREE.Color('#125D98'),
    ].map(color => color.clone().multiplyScalar(0.5));

    const galaxyGeometryVertices = [];
    const galaxyGeometryColors = [];
    const galaxyGeometrySizes = [];
    const stars = [];

    class Star {
        setup(color) {
            // Position stars within a reasonable distance from the origin
            this.r = Math.random() * 400 + 200;  // Increase distance range
            this.phi = Math.random() * Math.PI * 2;
            this.theta = Math.random() * Math.PI;
            this.v = new THREE.Vector2().random().subScalar(0.5).multiplyScalar(0.0007);

            this.x = this.r * Math.sin(this.phi) * Math.sin(this.theta);
            this.y = this.r * Math.cos(this.phi);
            this.z = this.r * Math.sin(this.phi) * Math.cos(this.theta);

            this.size = Math.random() * 1.5 + 0.5;
            this.color = color;
        }
        update() {
            this.phi += this.v.x;
            this.theta += this.v.y;
            this.x = this.r * Math.sin(this.phi) * Math.sin(this.theta);
            this.y = this.r * Math.cos(this.phi);
            this.z = this.r * Math.sin(this.phi) * Math.cos(this.theta);
        }
    }

    // Create stars
    for (let i = 0; i < 6000; i++) {
        const star = new Star();
        star.setup(galaxyColors[Math.floor(Math.random() * galaxyColors.length)]);
        galaxyGeometryVertices.push(star.x, star.y, star.z);
        galaxyGeometryColors.push(star.color.r, star.color.g, star.color.b);
        galaxyGeometrySizes.push(star.size);
        stars.push(star);
    }

    useEffect(() => {
        const galaxyGeometry = new THREE.BufferGeometry();
        galaxyGeometry.setAttribute('position', new THREE.Float32BufferAttribute(galaxyGeometryVertices, 3));
        galaxyGeometry.setAttribute('color', new THREE.Float32BufferAttribute(galaxyGeometryColors, 3));
        galaxyGeometry.setAttribute('size', new THREE.Float32BufferAttribute(galaxyGeometrySizes, 1));

        const galaxyMaterial = new THREE.PointsMaterial({
            size: 1.0,
            map: dotTexture,  // Use texture for stars
            vertexColors: true,
            transparent: true,
            alphaTest: 0.5,
            sizeAttenuation: true,
            depthTest: true,
            depthWrite: false,
        });

        const galaxyPoints = new THREE.Points(galaxyGeometry, galaxyMaterial);
        galaxyPoints.renderOrder = -1;

        galaxyRef.current = galaxyPoints;
        scene.add(galaxyPoints);

        return () => {
            scene.remove(galaxyPoints);
        };
    }, [scene]);

    // Rotate stars on every
    useFrame(() => {
        if (galaxyRef.current) {
            galaxyRef.current.rotation.y += 0.0005;  // Adjust speed of rotation as needed
            galaxyRef.current.rotation.x += 0.0002;  // Add subtle rotation on another axis if needed
        }
    });

    return null;
};

export default Stars;
