import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import NeuralNetworkBackground from './components/NeuralNetworkBackground';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Your Portfolio',
  description: 'Full-stack developer crafting modern web experiences',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} text-gruvbox-fg1 antialiased`}>
        <NeuralNetworkBackground />
        <main className="relative z-10">
          {children}
        </main>
      </body>
    </html>
  );
}