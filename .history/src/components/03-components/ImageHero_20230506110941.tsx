import React from 'react';

const ImageHero = ({ imageUrl, altText }) => {
    return (
        <div className="image-hero">
        <img src={imageUrl} alt={altText} />
        </div>
    );
};

export default ImageHero;
