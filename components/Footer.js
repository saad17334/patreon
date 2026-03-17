import React from 'react'

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 py-2">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-2 md:gap-0">
        <div className="mb-2 md:mb-0 text-center md:text-left">
          <span className="font-bold text-base">𝓟𝓪𝓮𝓽𝓻𝓸𝓷</span>
          <p className="mt-0.5 text-xs">Empowering creators. Supporting dreams.</p>
        </div>
        <nav className="flex flex-col md:flex-row gap-2 md:gap-4 text-xs">
          <Link href="/about" className="hover:text-white transition">About</Link>
          <Link href="/explore" className="hover:text-white transition">Explore</Link>
          <Link href="/pricing" className="hover:text-white transition">Pricing</Link>
          <Link href="/contact" className="hover:text-white transition">Contact</Link>
        </nav>
        <div className="text-xs text-gray-400 text-center md:text-right">
          &copy; {new Date().getFullYear()} Paetron. All rights reserved.
        </div>
      </div>
    </footer>
  );
}