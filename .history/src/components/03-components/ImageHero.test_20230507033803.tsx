import React from 'react';
import { render } from '@testing-library/react';
import ImageHero from './ImageHero';

describe('ImageHero', () => {
  it('renders an image with the provided URL and alt text', () => {
    const imageUrl = 'https://example.com/image.jpg';
    const altText = 'Example Image';
    
    // Render the component
    const { getByAltText } = render(<ImageHero imageUrl={imageUrl} altText={altText} />);
    
    // Assert that the image is rendered with the correct URL and alt text
    const imageElement = getByAltText(altText);
    expect(imageElement).toBeDefined();
    expect(imageElement).toHaveProperty('src', imageUrl);
  });
});
