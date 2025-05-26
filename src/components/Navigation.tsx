'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      {/* Top red bar with phone info */}
      <div className="fixed top-0 left-0 w-full z-50 bg-red-700 py-2 flex justify-center items-center">
        <span className="text-white text-lg font-extrabold flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5" fill="white">
            <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1v3.25a1 1 0 01-1 1C10.07 22 2 13.93 2 4.75a1 1 0 011-1H6.25a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.01l-2.2 2.2z" />
          </svg>
          Give Us A Call: 801-798-5333
        </span>
      </div>
      <nav className="bg-white shadow-md">
        <div className="h-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-28">
            {/* Logo section */}
            <div className="flex-shrink-0 flex items-center h-full px-0">
              <Link href="/" className="flex items-center h-full">
                <Image
                  src="/images/logo.png"
                  alt="Maple Creek Home Health & Hospice"
                  width={300}
                  height={80}
                  style={{ objectFit: 'contain' }}
                  className="self-center h-full"
                  priority
                />
              </Link>
            </div>

            {/* Desktop menu */}
            <div className="hidden lg:flex items-center space-x-8">
              <Link
                href="/"
                className={`font-montserrat text-lg font-bold transition-all duration-150 px-2 py-1 rounded text-gray-700 hover:text-red-700 hover:underline hover:scale-105 ${pathname === '/' ? 'text-red-700' : ''}`}
              >
                Home
              </Link>
              <Link
                href="/about"
                className={`font-montserrat text-lg font-bold transition-all duration-150 px-2 py-1 rounded text-gray-700 hover:text-red-700 hover:underline hover:scale-105 ${pathname === '/about' ? 'text-red-700' : ''}`}
              >
                About
              </Link>
              <Link
                href="/services"
                className={`font-montserrat text-lg font-bold transition-all duration-150 px-2 py-1 rounded text-gray-700 hover:text-red-700 hover:underline hover:scale-105 ${pathname === '/services' ? 'text-red-700' : ''}`}
              >
                Services
              </Link>
              <Link
                href="/careers"
                className={`font-montserrat text-lg font-bold transition-all duration-150 px-2 py-1 rounded text-gray-700 hover:text-red-700 hover:underline hover:scale-105 ${pathname === '/careers' ? 'text-red-700' : ''}`}
              >
                Careers
              </Link>
              <Link
                href="/resources"
                className={`font-montserrat text-lg font-bold transition-all duration-150 px-2 py-1 rounded text-gray-700 hover:text-red-700 hover:underline hover:scale-105 ${pathname === '/resources' ? 'text-red-700' : ''}`}
              >
                Resources
              </Link>
              <Link
                href="/contact"
                className={`font-montserrat text-lg font-bold transition-all duration-150 px-2 py-1 rounded text-gray-700 hover:text-red-700 hover:underline hover:scale-105 ${pathname === '/contact' ? 'text-red-700' : ''}`}
              >
                Contact
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-900 hover:bg-gray-100 focus:outline-none"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <svg
                  className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`${isOpen ? 'block' : 'hidden'} lg:hidden`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/"
              className={`block px-3 py-2 font-montserrat text-gray-700 font-bold rounded hover:text-red-700 hover:bg-gray-100 hover:underline ${pathname === '/' ? 'text-red-700' : ''}`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`block px-3 py-2 font-montserrat text-gray-700 font-bold rounded hover:text-red-700 hover:bg-gray-100 hover:underline ${pathname === '/about' ? 'text-red-700' : ''}`}
            >
              About
            </Link>
            <Link
              href="/services"
              className={`block px-3 py-2 font-montserrat text-gray-700 font-bold rounded hover:text-red-700 hover:bg-gray-100 hover:underline ${pathname === '/services' ? 'text-red-700' : ''}`}
            >
              Services
            </Link>
            <Link
              href="/careers"
              className={`block px-3 py-2 font-montserrat text-gray-700 font-bold rounded hover:text-red-700 hover:bg-gray-100 hover:underline ${pathname === '/careers' ? 'text-red-700' : ''}`}
            >
              Careers
            </Link>
            <Link
              href="/resources"
              className={`block px-3 py-2 font-montserrat text-gray-700 font-bold rounded hover:text-red-700 hover:bg-gray-100 hover:underline ${pathname === '/resources' ? 'text-red-700' : ''}`}
            >
              Resources
            </Link>
            <Link
              href="/contact"
              className={`block px-3 py-2 font-montserrat text-gray-700 font-bold rounded hover:text-red-700 hover:bg-gray-100 hover:underline ${pathname === '/contact' ? 'text-red-700' : ''}`}
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;