import { routes } from '../data/routes';
import { stations } from '../data/stations';

// Build adjacency list
const buildGraph = () => {
  const graph = {};
  stations.forEach(s => graph[s.id] = []);
  routes.forEach(r => {
    if (!graph[r.from]) graph[r.from] = [];
    if (!graph[r.to]) graph[r.to] = [];
    
    // Undirected graph for now (trains go both ways)
    graph[r.from].push({ node: r.to, weight: 1 });
    graph[r.to].push({ node: r.from, weight: 1 });
  });
  return graph;
};

export const findPath = (startId, endId) => {
  if (!startId || !endId) return [];
  if (startId === endId) return [startId];

  const graph = buildGraph();
  const distances = {};
  const previous = {};
  const queue = [];

  stations.forEach(s => {
    distances[s.id] = Infinity;
    previous[s.id] = null;
    queue.push(s.id);
  });

  distances[startId] = 0;

  while (queue.length > 0) {
    // Sort queue by distance (simple priority queue)
    queue.sort((a, b) => distances[a] - distances[b]);
    const current = queue.shift();

    if (current === endId) {
      const path = [];
      let u = endId;
      while (previous[u]) {
        path.unshift(u);
        u = previous[u];
      }
      path.unshift(startId);
      return path;
    }

    if (distances[current] === Infinity) break;

    const neighbors = graph[current] || [];
    neighbors.forEach(neighbor => {
      const alt = distances[current] + neighbor.weight;
      if (alt < distances[neighbor.node]) {
        distances[neighbor.node] = alt;
        previous[neighbor.node] = current;
      }
    });
  }

  return [];
};
