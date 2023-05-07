import React from 'react';
import Link from '../01-atoms/Link';

const Navbar: React.FC = () => {
    return (
        <nav className="bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
                <div className="flex-shrink-0">
                <Link href="/">
                    <img
                    className="h-8 w-8"
                    src="/logo.svg"
                    alt="Logo"
                    />
                </Link>
                </div>
                <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                    <Link
                    href="/"
                    className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium"
                    >
                    Home
                    </Link>
                    <Link
                    href="/about"
                    className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium"
                    >
                    About
                    </Link>
                    <Link
                    href="/blog"
                    className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium"
                    >
                    Blog
                    </Link>
                    <Link
                    href="/contact"
                    className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium"
                    >
                    Contact
                    </Link>
                </div>
                </div>
            </div>
            </div>
        </div>
        </nav>
    );
};

export default Navbar;
