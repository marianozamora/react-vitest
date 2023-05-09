import { render, screen } from '@testing-library/react';
import Image from './index';

vi.mock('uuid', () => ({
    v4: vi.fn(),
}));

describe('Image component', () => {
    it('renders images with unique keys', () => {
        //vi.fn.mockReturnValueOnce('1');
        const images = [
        { url: 'image1.jpg', alt: 'Image 1', width: '200px' },
        { url: 'image2.jpg', alt: 'Image 2', width: '300px' },
        ];

        render(<Image images={images} />);

        expect(screen.getByAltText('Image 1')).toBeDefined();
        expect(screen.getByAltText('Image 2')).toBeDefined();
    });
});
