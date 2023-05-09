/* eslint-disable no-debugger */
import { ImageHeroProps } from '../../types/interfaces';

const ImageHero = ({ imageUrl, altText }: ImageHeroProps) => {
    return (
        <div className="image-hero flex items-center justify-center">
          <img src={imageUrl} alt={altText} className="w-full" />
        </div>
    );
};

export default ImageHero;
