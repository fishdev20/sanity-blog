import type { Metadata } from 'next';
import { Fira_Code, Inter } from 'next/font/google';
import Navbar from './components/NavBar';
import ScrollWrapper from './components/ScrollWrapper';
import { ThemeProvider } from './components/theme-provider';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });
const firaCode = Fira_Code({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'CodeCraft by Marcus',
  description:
    "Explore Marcus's software engineering journey filled with insights, tips, and wisdom. A must-read for developers seeking practical knowledge and inspiration",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={firaCode.className}>
        <ScrollWrapper>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />
            <main className="mx-auto mt-40 max-w-7xl px-6">{children}</main>
          </ThemeProvider>
        </ScrollWrapper>
      </body>
    </html>
  );
}
