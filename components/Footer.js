import React from 'react'
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 py-4">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">

        {/* Logo + tagline */}
        <div className="text-center md:text-left">
          <span className="block font-bold text-lg">
            𝓟𝓪𝓮𝓽𝓻𝓸𝓷
          </span>
          <p className="text-sm text-gray-400">
            Empowering creators. Supporting dreams.
          </p>
        </div>

        {/* Links */}
        <nav className="flex flex-wrap justify-center gap-4 text-sm">
          <Link href="/about" className="hover:text-white transition">
            About
          </Link>
          <Link href="/explore" className="hover:text-white transition">
            Explore
          </Link>
          <Link href="/pricing" className="hover:text-white transition">
            Pricing
          </Link>
          <Link href="/contact" className="hover:text-white transition">
            Contact
          </Link>
        </nav>

        {/* Copyright */}
        <div className="text-xs text-gray-400 text-center md:text-right">
          © {new Date().getFullYear()} Paetron. All rights reserved.
        </div>

      </div>
    </footer>
  );
}