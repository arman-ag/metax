import { Metadata } from 'next';
import localFont from 'next/font/local';
import GlobalStyles from './_styles/GlobalStyles';
import './globals.css';
import Providers from './provider';
const myFont = localFont({ src: './_assets/font/YekanBakhFaNum-Regular.woff' });
export const metadata: Metadata = {
  title: 'Metax',
  description: 'Metax panel',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body dir='rtl' className={myFont.className}>
        <Providers>
          <GlobalStyles />
          {children}
        </Providers>
      </body>
    </html>
  );
}
