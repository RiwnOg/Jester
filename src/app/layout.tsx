import './globals.css';
import { Nunito } from 'next/font/google';

import Providers from './providers';
import Navbar from '@/navbar/Navbar';
import ClientOnly from '@/components/ClientOnly';
import RegisterModal from '@/components/modals/RegisterModal';
import LoginModal from '@/components/modals/LoginModal';
import getUser from '@/app/actions/getUser';

const font = Nunito({
  subsets: ['latin'],
});

export const metadata = {
  title: 'Jester',
  description: 'Jester life Companion',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getUser();

  return (
    <html
      lang='en'
      suppressHydrationWarning
    >
      <body className={font.className}>
        <Providers>
          <Navbar currentUser={currentUser} />
          <ClientOnly>
            <LoginModal />
            <RegisterModal />
          </ClientOnly>
          <div className='px-5 py-20'>{children}</div>
        </Providers>
      </body>
    </html>
  );
}
