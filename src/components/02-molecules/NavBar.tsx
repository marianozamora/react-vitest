import React from 'react';
import { Link } from 'react-router-dom';
import Logo
    from '../01-atoms/Logo';
const Navbar: React.FC = () => {
    return (
        <nav className="bg-white text-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
                <div className="flex-shrink-0">
                <Link to="/">
                 <Logo
                    />
                </Link>
                </div>
                <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                    <Link
                    to="/"
                    className="text-black hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium"
                    >
                    Home
                    </Link>
                    <Link
                    to="/about"
                    className="text-black hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium"
                    >
                    About
                    </Link>
                    <Link
                    to="/blog"
                    className="text-black hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium"
                    >
                    Blog
                    </Link>
                    <Link
                    to="/contact"
                    className="text-black hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium"
                    >
                    Contact
                    </Link>
                    <Link
                    to="/posts"
                    className="text-black hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium"
                    >
                    Posts
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
