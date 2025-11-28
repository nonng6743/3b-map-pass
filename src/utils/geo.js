import * as THREE from 'three';

// Center of Japan (roughly)
const CENTER_LAT = 38.0;
const CENTER_LON = 139.0;
const SCALE = 2.0; // Scale factor for visualization

export const project = (lat, lon) => {
  // Simple Equirectangular projection for visualization
  // x = lon, z = -lat (since 3D Z is depth, and North is usually -Z or +Y depending on orientation)
  // Let's align with our previous scene: X is East-West, Z is North-South (but inverted? North is usually -Z in 3D)
  // Actually, let's make Y up, X right (East), Z forward (South).
  // So North is -Z.
  
  const x = (lon - CENTER_LON) * SCALE;
  const z = -(lat - CENTER_LAT) * SCALE; // North is negative Z
  
  return [x, 0, z];
};

export const getStationPos = (station) => {
  return project(station.lat, station.lon);
};
