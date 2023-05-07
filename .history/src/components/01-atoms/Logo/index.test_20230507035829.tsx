import { render } from '@testing-library/react';
import Logo from './index';

describe('Logo', () => {
  it('renders the logo image with the alt text', () => {
    // Render the component
    const { getByAltText } = render(<Logo />);

    // Assert that the logo image is rendered with the correct alt text
    const logoImage = getByAltText('Logo');
    expect(logoImage).toBeDefined();

    // You can also check the source of the image if needed
    expect(logoImage).toHaveProperty('src', '/src/assets/logo.svg');
});
});
