import React, { useMemo, useRef, useLayoutEffect } from 'react';
import { Html } from '@react-three/drei';
import * as THREE from 'three';
import { cities } from '../../data/cities';
import { project } from '../../utils/geo';

const CityMarkers = () => {
    const meshRef = useRef();
    const dummy = useMemo(() => new THREE.Object3D(), []);

    useLayoutEffect(() => {
        if (!meshRef.current) return;

        cities.forEach((city, i) => {
            const [x, y, z] = project(city.lat, city.lon);

            // Scale based on population (logarithmic scale)
            const scale = Math.log10(city.pop) * 0.03;

            dummy.position.set(x, y + 0.05, z); // Slightly above ground
            dummy.scale.set(scale, scale, scale);
            dummy.updateMatrix();

            meshRef.current.setMatrixAt(i, dummy.matrix);
        });

        meshRef.current.instanceMatrix.needsUpdate = true;
    }, [dummy]);

    return (
        <group>
            <instancedMesh ref={meshRef} args={[null, null, cities.length]}>
                <sphereGeometry args={[1, 16, 16]} />
                <meshStandardMaterial color="#9ca3af" emissive="#4b5563" emissiveIntensity={0.5} />
            </instancedMesh>

            {cities.map((city, i) => {
                const [x, y, z] = project(city.lat, city.lon);
                return (
                    <Html
                        key={i}
                        position={[x, y + 0.5, z]}
                        distanceFactor={15}
                        occlude
                        style={{ pointerEvents: 'none' }}
                    >
                        <div className="text-[8px] text-white/70 font-sans whitespace-nowrap drop-shadow-md select-none">
                            {city.name}
                        </div>
                    </Html>
                );
            })}
        </group>
    );
};

export default CityMarkers;
