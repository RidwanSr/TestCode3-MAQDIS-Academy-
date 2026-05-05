import './globals.css';

export const metadata = {
  title: 'Hamim - Hafalan',
  description: 'Dashboard hafalan responsif untuk soal ketiga.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
