import { Inter } from 'next/font/google';
import './globals.css';
import Footer from '@/layouts/Footer/Footer';
import Header from '@/layouts/Header/Header';
import styles from './layout.module.css';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${styles.layout}`}>
        <Header />
        <main className={styles.main}>
          <div>{children}</div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
