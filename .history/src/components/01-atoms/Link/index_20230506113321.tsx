import React from 'react';

interface LinkProps {
    href: string;
    target?: string;
    children: React.ReactNode;
    className?: string;
}

const Link: React.FC<LinkProps> = ({ href, target, children, className }) => {
    return (
        <a className={ className } href={href} target={target}>
        {children}
        </a>
    );
};

export default Link;