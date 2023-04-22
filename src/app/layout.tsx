import './globals.css';
import Providers from './providers';

import { Nunito } from 'next/font/google';

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
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
