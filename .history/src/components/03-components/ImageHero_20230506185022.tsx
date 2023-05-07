/* eslint-disable no-debugger */
import React from 'react';


const ImageHero = ({ imageUrl, altText }: ImageHeroProps) => {
    return (
        <div className="image-hero flex items-center justify-center">
      <img src={imageUrl} alt={altText} className="w-full" />
    </div>
    );
};

export default ImageHero;
