import React, { useMemo } from 'react';
import * as THREE from 'three';
import { Line } from '@react-three/drei';
import { project } from '../../utils/geo';
import geoData from '../../data/japan.geo.json';

const JapanGeoMap = () => {

    const { shapes, lines } = useMemo(() => {
        if (!geoData || !geoData.features) {
            console.warn("JapanGeoMap: No features found in geoData", geoData);
            return { shapes: [], lines: [] };
        }

        const shapesList = [];
        const linesList = [];

        try {
            geoData.features.forEach(feature => {
                const geometry = feature.geometry;

                const processPolygon = (coords) => {
                    // For Lines
                    const points = coords.map(pt => {
                        const [x, y, z] = project(pt[1], pt[0]);
                        return new THREE.Vector3(x, y, z);
                    });
                    linesList.push(points);

                    // For Shapes (Fill)
                    // We project to 2D plane (x, z) -> (x, y for shape)
                    const shape = new THREE.Shape();
                    coords.forEach((pt, i) => {
                        const [x, y, z] = project(pt[1], pt[0]);
                        // Use x and -z (since z is inverted lat) for 2D shape
                        // Actually project returns [x, 0, z]. 
                        // Let's use x and z as the 2D coordinates for the shape.
                        if (i === 0) shape.moveTo(x, z);
                        else shape.lineTo(x, z);
                    });
                    shapesList.push(shape);
                };

                if (geometry.type === 'Polygon') {
                    geometry.coordinates.forEach(ring => processPolygon(ring));
                } else if (geometry.type === 'MultiPolygon') {
                    geometry.coordinates.forEach(polygon => {
                        polygon.forEach(ring => processPolygon(ring));
                    });
                }
            });
        } catch (error) {
            console.error("JapanGeoMap: Error processing features", error);
        }

        return { shapes: shapesList, lines: linesList };
    }, [geoData]);

    if (!geoData) return null;

    return (
        <group position={[0, -0.1, 0]}>
            {/* Green Land Fill */}
            {shapes.map((shape, i) => (
                <mesh key={`shape-${i}`} rotation={[Math.PI / 2, 0, 0]}>
                    <shapeGeometry args={[shape]} />
                    <meshStandardMaterial
                        color="#15803d" // Green color
                        side={THREE.DoubleSide}
                        transparent
                        opacity={0.8}
                    />
                </mesh>
            ))}

            {/* Outlines */}
            {lines.map((points, i) => (
                <Line
                    key={`line-${i}`}
                    points={points}
                    color="#ffffff"
                    lineWidth={1}
                    transparent
                    opacity={0.3}
                />
            ))}
        </group>
    );
};

export default JapanGeoMap;
