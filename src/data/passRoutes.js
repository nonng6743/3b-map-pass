export const passRoutes = [
  // Tokaido, Sanyo, Kyushu Shinkansen (South to North)
  { from: 'Kagoshima', to: 'Kumamoto', color: '#ef4444' }, // Kyushu (Red)
  { from: 'Kumamoto', to: 'Fukuoka', color: '#ef4444' },
  { from: 'Fukuoka', to: 'Kitakyushu', color: '#00008b' }, // Sanyo (Dark Blue)
  { from: 'Kitakyushu', to: 'Hiroshima', color: '#00008b' },
  { from: 'Hiroshima', to: 'Okayama', color: '#00008b' },
  { from: 'Okayama', to: 'Himeji', color: '#00008b' },
  { from: 'Himeji', to: 'Kobe', color: '#00008b' },
  { from: 'Kobe', to: 'Osaka', color: '#00008b' },
  { from: 'Osaka', to: 'Kyoto', color: '#f59e0b' }, // Tokaido (Orange)
  { from: 'Kyoto', to: 'Nagoya', color: '#f59e0b' },
  { from: 'Nagoya', to: 'Shizuoka', color: '#f59e0b' },
  { from: 'Shizuoka', to: 'Yokohama', color: '#f59e0b' },
  { from: 'Yokohama', to: 'Tokyo', color: '#f59e0b' },

  // Tohoku & Hokkaido Shinkansen (North from Tokyo)
  { from: 'Tokyo', to: 'Saitama', color: '#22c55e' }, // Tohoku (Green)
  { from: 'Saitama', to: 'Fukushima', color: '#22c55e' }, // Skipping Utsunomiya (minor in this list)
  { from: 'Fukushima', to: 'Sendai', color: '#22c55e' },
  { from: 'Sendai', to: 'Morioka', color: '#22c55e' },
  { from: 'Morioka', to: 'Aomori', color: '#22c55e' },
  { from: 'Aomori', to: 'Hakodate', color: '#84cc16' }, // Hokkaido (Light Green)
  { from: 'Hakodate', to: 'Sapporo', color: '#84cc16', dashed: true }, // Future/Line

  // Hokuriku Shinkansen
  { from: 'Saitama', to: 'Nagano', color: '#8b5cf6' }, // Purple
  { from: 'Nagano', to: 'Toyama', color: '#8b5cf6' },
  { from: 'Toyama', to: 'Kanazawa', color: '#8b5cf6' },

  // Joetsu Shinkansen
  { from: 'Saitama', to: 'Niigata', color: '#ec4899' }, // Pink

  // Akita Shinkansen
  { from: 'Morioka', to: 'Akita', color: '#db2777' }, // Pink/Red
];
