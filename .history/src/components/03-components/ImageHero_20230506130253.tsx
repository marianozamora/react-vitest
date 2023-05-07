/* eslint-disable no-debugger */
import React from 'react';

interface ImageHeroProps {
    imageUrl: string;
    altText: string;
}

const ImageHero = ({ imageUrl, altText }: ImageHeroProps) => {
    return (
        <div className="image-hero flex items-center justify-center">
      <img src={imageUrl} alt={altText} className="w-full" />
    </div>
    );
};

export default ImageHero;
