'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
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
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/about" className="font-montserrat text-lg text-gray-700 hover:text-red-700 hover:underline hover:scale-105 transition-all duration-150 font-bold">
              About
            </Link>
            <Link href="/services" className="font-montserrat text-lg text-gray-700 hover:text-red-700 hover:underline hover:scale-105 transition-all duration-150 font-bold">
              Services
            </Link>
            <Link href="/careers" className="font-montserrat text-lg text-gray-700 hover:text-red-700 hover:underline hover:scale-105 transition-all duration-150 font-bold">
              Careers
            </Link>
            <Link href="/resources" className="font-montserrat text-lg text-gray-700 hover:text-red-700 hover:underline hover:scale-105 transition-all duration-150 font-bold">
              Resources
            </Link>
            <Link href="/contact" className="font-montserrat text-lg text-gray-700 hover:text-red-700 hover:underline hover:scale-105 transition-all duration-150 font-bold">
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
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
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link href="/about" className="block px-3 py-2 font-montserrat text-gray-700 hover:text-blue-900 hover:bg-gray-100 font-medium">
            About
          </Link>
          <Link href="/services" className="block px-3 py-2 font-montserrat text-gray-700 hover:text-blue-900 hover:bg-gray-100 font-medium">
            Services
          </Link>
          <Link href="/careers" className="block px-3 py-2 font-montserrat text-gray-700 hover:text-blue-900 hover:bg-gray-100 font-medium">
            Careers
          </Link>
          <Link href="/resources" className="block px-3 py-2 font-montserrat text-gray-700 hover:text-blue-900 hover:bg-gray-100 font-medium">
            Resources
          </Link>
          <Link href="/contact" className="block px-3 py-2 font-montserrat text-gray-700 hover:text-blue-900 hover:bg-gray-100 font-medium">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;