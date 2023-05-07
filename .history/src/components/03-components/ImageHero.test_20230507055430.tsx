import { render } from '@testing-library/react';
import ImageHero from './ImageHero';

describe('ImageHero', () => {
    it('renders an image with the provided URL and alt text', () => {
        const imageUrl = 'https://example.com/image.jpg';
        const altText = 'Example Image';
        const { getByAltText } = render(<ImageHero imageUrl={imageUrl} altText={altText} />);

        const imageElement = getByAltText(altText);
        expect(imageElement).toBeDefined();
        expect(imageElement).toHaveProperty('src', imageUrl);
    });
});
