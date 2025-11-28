import React from 'react';
import { cities } from '../../data/cities';
import { passRoutes } from '../../data/passRoutes';
import { hokurikuArchPassRoutes } from '../../data/hokurikuArchPass';
import { kansaiWideAreaPassRoutes } from '../../data/kansaiWideAreaPass';
import RailLine from './RailLine';
import { project } from '../../utils/geo';
import * as THREE from 'three';

const PassNetwork = ({ activePass = 'hokuriku' }) => {
    const routes = activePass === 'hokuriku'
        ? hokurikuArchPassRoutes
        : activePass === 'jr'
            ? passRoutes
            : activePass === 'kansai'
                ? kansaiWideAreaPassRoutes
                : [];

    // Helper to find city position by Name
    const getPos = (name) => {
        const city = cities.find(c => c.name === name);
        if (!city) return null;
        const [x, y, z] = project(city.lat, city.lon);
        return new THREE.Vector3(x, y, z);
    };

    return (
        <group>
            {routes.map((route, idx) => {
                const start = getPos(route.from);
                const end = getPos(route.to);

                if (!start || !end) {
                    console.warn(`Missing city for route: ${route.from} -> ${route.to} `);
                    return null;
                }

                return (
                    <RailLine
                        key={`${route.from} -${route.to} -${idx} `}
                        start={start}
                        end={end}
                        color={route.color}
                        dashed={route.dashed}
                    />
                );
            })}
        </group>
    );
};

export default PassNetwork;
