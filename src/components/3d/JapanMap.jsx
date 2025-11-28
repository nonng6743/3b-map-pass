import React from 'react';

const JapanMap = () => {
    return (
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 20]}>
            <planeGeometry args={[20, 60]} />
            <meshStandardMaterial color="#1e293b" transparent opacity={0.5} />
        </mesh>
    );
};

export default JapanMap;
