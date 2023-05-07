import React from 'react';

interface ImageHeroProps {
    imageUrl: string;
    altText: string;
}

const ImageHero = ({ imageUrl, altText }: ImageHeroProps) => {
    debugger
    return (
        <div className="image-hero">
        <img src={imageUrl} alt={altText} />
        </div>
    );
};

export default ImageHero;
