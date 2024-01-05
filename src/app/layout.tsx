import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Providers from '@/app/providers';
import './globals.css';
import Header from '@/components/header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'NextJS 14 - ToDo App',
  description: 'Demo for intive',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <div className='container mx-auto px-4 max-w-6xl'>
          <Providers>
            <Header />
            {children}
            <noscript className='text-red-500'>Javascript is disabled</noscript>
          </Providers>
        </div>
      </body>
    </html>
  );
}
