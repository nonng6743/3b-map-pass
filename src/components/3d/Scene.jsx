import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars, Environment } from '@react-three/drei';
import Network from './Network';
import JapanGeoMap from './JapanGeoMap';
import CityMarkers from './CityMarkers';
import PassNetwork from './PassNetwork';

const Scene = ({ selectedStation, highlightedPath, activePass }) => {
    return (
        <div className="h-screen w-full bg-slate-900">
            <Canvas camera={{ position: [5, 10, 20], fov: 45 }}>
                <Suspense fallback={null}>
                    <ambientLight intensity={0.5} />
                    <pointLight position={[10, 10, 10]} intensity={1} />

                    <JapanGeoMap />
                    <CityMarkers />
                    <PassNetwork activePass={activePass} />
                    {/* <Network
                        selectedStation={selectedStation}
                        highlightedPath={highlightedPath}
                    /> */}

                    <OrbitControls
                        enablePan={true}
                        enableZoom={true}
                        enableRotate={true}
                        minDistance={5}
                        maxDistance={50}
                        target={[3, 0, -2]} // Center roughly around Tohoku
                    />
                    <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
                    <gridHelper args={[100, 100, 0x444444, 0x222222]} position={[0, -0.1, 20]} />
                </Suspense>
            </Canvas>
        </div>
    );
};

export default Scene;
