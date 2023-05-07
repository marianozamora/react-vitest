import React from 'react';
import * as LinkC from '../01-atoms/LinkC';
import Logo
    from '../01-atoms/Logo';
const Navbar: React.FC = () => {
    return (
        <nav className="bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
                <div className="flex-shrink-0">
                <LinkC href="/">
                 <Logo
                    />
                </LinkC>
                </div>
                <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                    <LinkC
                    href="/"
                    className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium"
                    >
                    Home
                    </LinkC>
                    <LinkC
                    href="/about"
                    className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium"
                    >
                    About
                    </LinkC>
                    <LinkC
                    href="/blog"
                    className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium"
                    >
                    Blog
                    </LinkC>
                    <LinkC
                    href="/contact"
                    className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium"
                    >
                    Contact
                    </LinkC>
                </div>
                </div>
            </div>
            </div>
        </div>
        </nav>
    );
};

export default Navbar;
