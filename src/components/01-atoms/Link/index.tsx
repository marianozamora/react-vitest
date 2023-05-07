import React from 'react';
import { LinkProps } from '../../../types/interfaces';

const Link: React.FC<LinkProps> = ({ href, target, children, className }) => {
    return (
        <a className={ className } href={href} target={target}>
        {children}
        </a>
    );
};

export default Link;