import React from 'react';
import { stations } from '../../data/stations';

const RouteSelector = ({ startId, endId, onStartChange, onEndChange, onFindRoute }) => {
    return (
        <div className="bg-white/10 backdrop-blur-md p-4 rounded-lg border border-white/20 shadow-xl w-full max-w-xs">
            <div className="space-y-4">
                <div>
                    <label className="block text-xs font-medium text-gray-300 mb-1">From</label>
                    <select
                        value={startId || ''}
                        onChange={(e) => onStartChange(e.target.value)}
                        className="w-full bg-black/50 border border-gray-600 rounded px-3 py-2 text-white focus:outline-none focus:border-blue-500"
                    >
                        <option value="">Select Station</option>
                        {stations.map(s => (
                            <option key={s.id} value={s.id}>{s.name}</option>
                        ))}
                    </select>
                </div>

                <div>
                    <label className="block text-xs font-medium text-gray-300 mb-1">To</label>
                    <select
                        value={endId || ''}
                        onChange={(e) => onEndChange(e.target.value)}
                        className="w-full bg-black/50 border border-gray-600 rounded px-3 py-2 text-white focus:outline-none focus:border-blue-500"
                    >
                        <option value="">Select Station</option>
                        {stations.map(s => (
                            <option key={s.id} value={s.id}>{s.name}</option>
                        ))}
                    </select>
                </div>

                <button
                    onClick={onFindRoute}
                    disabled={!startId || !endId}
                    className="w-full bg-blue-600 hover:bg-blue-500 disabled:bg-gray-700 disabled:cursor-not-allowed text-white font-bold py-2 px-4 rounded transition-colors"
                >
                    Find Route
                </button>
            </div>
        </div>
    );
};

export default RouteSelector;
