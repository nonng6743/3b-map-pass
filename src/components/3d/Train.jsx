import React, { useRef, useMemo, useState, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { stations } from '../../data/stations';
import { getStationPos } from '../../utils/geo';

const Train = ({ path }) => {
    const trainRef = useRef();
    const [progress, setProgress] = useState(0);
    const SPEED = 0.5; // Units per second approx

    // Convert path IDs to Vector3 points
    const points = useMemo(() => {
        if (!path || path.length < 2) return [];
        return path.map(id => {
            const s = stations.find(st => st.id === id);
            return new THREE.Vector3(...getStationPos(s));
        });
    }, [path]);

    // Create a curve from points
    const curve = useMemo(() => {
        if (points.length < 2) return null;
        return new THREE.CatmullRomCurve3(points, false, 'catmullrom', 0.1); // Low tension for straight lines
    }, [points]);

    useFrame((state, delta) => {
        if (!curve || !trainRef.current) return;

        // Update progress
        // Total length of curve
        const totalLength = curve.getLength();
        const step = (SPEED * delta) / totalLength;

        let newProgress = progress + step;
        if (newProgress > 1) newProgress = 0; // Loop animation

        setProgress(newProgress);

        // Get position and tangent
        const position = curve.getPointAt(newProgress);
        const tangent = curve.getTangentAt(newProgress);

        trainRef.current.position.copy(position);

        // Orient train along the path
        const lookAt = position.clone().add(tangent);
        trainRef.current.lookAt(lookAt);
    });

    if (!curve) return null;

    return (
        <group ref={trainRef}>
            {/* Train Body */}
            <mesh position={[0, 0.15, 0]}>
                <boxGeometry args={[0.2, 0.2, 0.6]} />
                <meshStandardMaterial color="#ef4444" emissive="#7f1d1d" />
            </mesh>
            {/* Headlight */}
            <mesh position={[0, 0.15, 0.35]}>
                <boxGeometry args={[0.1, 0.1, 0.05]} />
                <meshStandardMaterial color="#fbbf24" emissive="#fbbf24" emissiveIntensity={2} />
            </mesh>
        </group>
    );
};

export default Train;
