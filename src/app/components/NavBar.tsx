'use client';
import Link from 'next/link';
import { ModeToggle } from './ModeToggle';

export default function Navbar() {
  return (
    <nav className="item-center fixed top-0 z-50 flex w-full justify-center bg-white/30 p-6 backdrop-blur-sm dark:border-gray-700 dark:bg-gray-800/30">
      <div className="item-center flex w-full max-w-7xl justify-between">
        <Link href={'/'} className="text-3xl font-bold">
          Dev<span className="text-primary">Blog</span>
        </Link>
        <ModeToggle />
      </div>
    </nav>
  );
}
