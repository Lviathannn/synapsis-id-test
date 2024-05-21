import type { Metadata } from 'next';
import { Work_Sans } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/layouts/Navbar';
import Footer from '@/components/layouts/Footer';
import { Toaster } from '@/components/ui/sonner';
import { AntdRegistry } from '@ant-design/nextjs-registry';

const workSans = Work_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: 'metaBlog',
  description: 'A blog about web development and programming.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={workSans.className}>
        <AntdRegistry>
          <Navbar />
          {children}
          <Toaster duration={3000} />
          <Footer />
        </AntdRegistry>
      </body>
    </html>
  );
}
