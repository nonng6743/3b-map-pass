import React from 'react';
import { stations } from '../../data/stations';
import { routes } from '../../data/routes';
import StationMarker from './StationMarker';
import RailLine from './RailLine';
import Train from './Train';
import { getStationPos } from '../../utils/geo';

const Network = ({ onStationSelect, selectedStation, highlightedPath = [] }) => {
    // Helper to find station position by ID
    const getPos = (id) => {
        const s = stations.find(s => s.id === id);
        return s ? getStationPos(s) : null;
    };

    return (
        <group>
            {/* Train Animation */}
            {highlightedPath.length > 1 && <Train path={highlightedPath} />}

            {/* Render Routes - Temporarily hidden */}
            {/* {routes.map((route, idx) => {
                const start = getPos(route.from);
                const end = getPos(route.to);
                if (!start || !end) return null;

                // Check if this route segment is part of the highlighted path
                const isHighlighted = highlightedPath.some((nodeId, i) => {
                    if (i === highlightedPath.length - 1) return false;
                    const nextNodeId = highlightedPath[i + 1];
                    return (nodeId === route.from && nextNodeId === route.to) ||
                        (nodeId === route.to && nextNodeId === route.from);
                });

                return (
                    <RailLine
                        key={`${route.from}-${route.to}-${idx}`}
                        start={start}
                        end={end}
                        color={isHighlighted ? "#fbbf24" : route.color}
                        dashed={route.dashed}
                        isHighlighted={isHighlighted}
                    />
                );
            })} */}

            {/* Render Stations */}
            {stations.map((station) => (
                <StationMarker
                    key={station.id}
                    station={station}
                    isSelected={selectedStation?.id === station.id}
                    onClick={onStationSelect}
                />
            ))}
        </group>
    );
};

export default Network;
