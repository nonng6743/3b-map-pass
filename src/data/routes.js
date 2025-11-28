export const routes = [
  // Tohoku Shinkansen (Green/Red on map, usually Green for Tohoku)
  { from: 'tokyo', to: 'ueno', color: '#008000' },
  { from: 'ueno', to: 'omiya', color: '#008000' },
  { from: 'omiya', to: 'utsunomiya', color: '#008000' },
  { from: 'utsunomiya', to: 'fukushima', color: '#008000' },
  { from: 'fukushima', to: 'sendai', color: '#008000' },
  { from: 'sendai', to: 'morioka', color: '#008000' },
  { from: 'morioka', to: 'hachinohe', color: '#008000' },
  { from: 'hachinohe', to: 'shin-aomori', color: '#008000' },

  // Hokkaido Shinkansen (Green/Purple)
  { from: 'shin-aomori', to: 'shin-hakodate-hokuto', color: '#9ACD32' },

  // Conventional Line to Sapporo (The "Last Mile" in the map context)
  { from: 'shin-hakodate-hokuto', to: 'sapporo', color: '#808080', dashed: true },

  // Akita Shinkansen (Red)
  { from: 'morioka', to: 'akita', color: '#FF0000' },

  // Yamagata Shinkansen (Orange)
  { from: 'fukushima', to: 'yamagata', color: '#FFA500' },
  { from: 'yamagata', to: 'shinjo', color: '#FFA500' },

  // Joetsu Shinkansen (Pink)
  { from: 'omiya', to: 'takasaki', color: '#FF69B4' },
  { from: 'takasaki', to: 'gala-yuzawa', color: '#FF69B4' },

  // Hokuriku Shinkansen (Blue)
  { from: 'takasaki', to: 'karuizawa', color: '#0000FF' },
];
