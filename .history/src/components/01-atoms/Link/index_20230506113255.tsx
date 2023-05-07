import React from 'react';

interface LinkProps {
    href: string;
    target?: string;
    children: React.ReactNode;
    className?: string;
}

const Link: React.FC<LinkProps> = ({ href, target, children }) => {
    return (
        <a href={href} target={target}>
        {children}
        </a>
    );
};

export default Link;