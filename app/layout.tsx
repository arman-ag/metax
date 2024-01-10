import { Metadata } from 'next';
import { getServerSession } from 'next-auth';
import localFont from 'next/font/local';
import GlobalStyles from './_styles/GlobalStyles';
import { authOptions } from './api/auth/[...nextauth]/route';
import './globals.css';
import AllProviders from './provider';

const myFont = localFont({ src: './_assets/font/YekanBakhFaNum-Regular.woff' });
export const metadata: Metadata = {
  title: 'Metax',
  description: 'Metax panel',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  console.log('session', session);
  return (
    <html lang='en'>
      <body dir='rtl' className={myFont.className}>
        <AllProviders session={session}>
          <GlobalStyles />

          {children}
        </AllProviders>
      </body>
    </html>
  );
}
