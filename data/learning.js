export const navItems = [
  { label: 'Hafalan', icon: 'book', active: true },
  { label: 'Peringkat', icon: 'rank' },
  { label: 'Pengaturan', icon: 'setting' },
];

export const streaks = Array.from({ length: 10 }, (_, index) => ({
  day: index + 1,
  done: index < 6,
}));

export const courses = [
  {
    title: 'Ayat Pilihan (Free)',
    progress: 12,
    active: true,
    tone: 'orange',
  },
  {
    title: '10 Hari Hafal Al-Muzzammil',
    progress: 20,
    active: false,
    tone: 'slate',
  },
  {
    title: '30 Hari Hafal Al-Mulk',
    progress: 30,
    active: false,
    tone: 'slate',
  },
];

export const rewardBadges = [
  { label: '12 Hari', hot: true },
  { label: '120 XP', hot: true },
];
