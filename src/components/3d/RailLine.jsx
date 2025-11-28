import React, { useLayoutEffect, useRef } from 'react';
import { Line } from '@react-three/drei';
import * as THREE from 'three';

const RailLine = ({ start, end, color, dashed, isHighlighted }) => {
    const points = [new THREE.Vector3(...start), new THREE.Vector3(...end)];

    return (
        <group>
            <Line
                points={points}
                color={color}
                lineWidth={isHighlighted ? 6 : 3}
                dashed={dashed}
                dashScale={2}
                dashSize={1}
                gapSize={0.5}
                opacity={isHighlighted ? 1 : 0.8}
                transparent
            />
            {isHighlighted && (
                <Line
                    points={points}
                    color="#ffffff"
                    lineWidth={1}
                    opacity={0.5}
                    transparent
                    position={[0, 0.05, 0]}
                />
            )}
        </group>
    );
};

export default RailLine;
