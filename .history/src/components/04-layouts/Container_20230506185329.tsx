import React, { ReactNode } from 'react';


const Container: React.FC<ContainerProps> = ({ children }) => {
    return <div className="container mx-auto px-4 mt-6">{children}</div>;
};

export default Container;
