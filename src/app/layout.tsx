import './globals.css';
import { Nunito } from 'next/font/google';

import Providers from './providers';
import Navbar from '@/navbar/Navbar';
import ClientOnly from '@/components/ClientOnly';
import RegisterModal from '@/components/modals/RegisterModal';

const font = Nunito({
  subsets: ['latin'],
});

export const metadata = {
  title: 'Jester',
  description: 'Jester life Companion',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang='en'
      suppressHydrationWarning
    >
      <body className={font.className}>
        <Providers>
          <ClientOnly>
            <RegisterModal />
            <Navbar />
          </ClientOnly>
          {children}
        </Providers>
      </body>
    </html>
  );
}