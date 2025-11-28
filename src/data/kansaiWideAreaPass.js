export const kansaiWideAreaPassRoutes = [
  // Sanyo Shinkansen (Shin-Osaka to Okayama)
  { from: 'Shin-Osaka', to: 'Okayama', color: '#0ea5e9' }, // Light Blue
  // Note: Shin-Osaka is often same as Osaka in simplified maps, but let's use Osaka if Shin-Osaka missing
  { from: 'Osaka', to: 'Okayama', color: '#0ea5e9' }, 

  // Express Lines to Tottori / Kinosaki
  { from: 'Osaka', to: 'Tottori', color: '#0ea5e9' },
  { from: 'Tottori', to: 'Kinosakionsen', color: '#0ea5e9' },
  { from: 'Kinosakionsen', to: 'Amanohashidate', color: '#0ea5e9' },
  { from: 'Amanohashidate', to: 'Kyoto', color: '#0ea5e9' },
  { from: 'Kyoto', to: 'Tsuruga', color: '#0ea5e9' }, // Connects to Hokuriku
  
  // Wakayama / Kii Peninsula
  { from: 'Osaka', to: 'Wakayama', color: '#0ea5e9' },
  { from: 'Wakayama', to: 'Shirahama', color: '#0ea5e9' },
  { from: 'Shirahama', to: 'Kii-Katsuura', color: '#0ea5e9' },
  { from: 'Kii-Katsuura', to: 'Shingu', color: '#0ea5e9' },

  // Okayama / Shikoku Gateway
  { from: 'Okayama', to: 'Kurashiki', color: '#0ea5e9' },
  { from: 'Okayama', to: 'Takamatsu', color: '#0ea5e9' },

  // Kansai Airport
  { from: 'Osaka', to: 'Kansai Airport', color: '#0ea5e9' },
  { from: 'Kyoto', to: 'Kansai Airport', color: '#0ea5e9' },

  // Inner Kansai
  { from: 'Osaka', to: 'Kyoto', color: '#0ea5e9' },
  { from: 'Osaka', to: 'Kobe', color: '#0ea5e9' },
  { from: 'Kobe', to: 'Himeji', color: '#0ea5e9' },
  { from: 'Himeji', to: 'Okayama', color: '#0ea5e9' },
  { from: 'Kyoto', to: 'Maibara', color: '#0ea5e9' },
  { from: 'Maibara', to: 'Tsuruga', color: '#0ea5e9' },
  { from: 'Osaka', to: 'Nara', color: '#0ea5e9' },
];
