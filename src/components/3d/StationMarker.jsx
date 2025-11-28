import React, { useState, useMemo } from 'react';
import { Html } from '@react-three/drei';
import { getStationPos } from '../../utils/geo';

const StationMarker = ({ station, isSelected, onClick }) => {
    const [hovered, setHovered] = useState(false);
    const position = useMemo(() => getStationPos(station), [station]);

    return (
        <group position={position}>
            {/* Station Node */}
            <mesh
                onClick={(e) => { e.stopPropagation(); onClick(station); }}
                onPointerOver={() => setHovered(true)}
                onPointerOut={() => setHovered(false)}
            >
                <sphereGeometry args={[isSelected ? 0.4 : (station.type === 'major' ? 0.3 : 0.2), 32, 32]} />
                <meshStandardMaterial
                    color={isSelected ? "#fbbf24" : (hovered ? "#ffffff" : "#cbd5e1")}
                    emissive={isSelected ? "#fbbf24" : "#000000"}
                    emissiveIntensity={isSelected ? 2 : 0}
                />
            </mesh>

            {/* Label */}
            {(hovered || isSelected || station.type === 'major') && (
                <Html distanceFactor={15} position={[0, 0.5, 0]}>
                    <div className={`
            px-2 py-1 rounded text-xs font-bold whitespace-nowrap select-none pointer-events-none
            transition-all duration-200
            ${isSelected ? 'bg-yellow-500 text-black scale-110' : 'bg-black/50 text-white backdrop-blur-sm'}
          `}>
                        {station.name}
                    </div>
                </Html>
            )}
        </group>
    );
};

export default StationMarker;
