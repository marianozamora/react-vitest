import { render, screen } from '@testing-library/react';
import About from './About';

describe('About', () => {
    test('renders heading and paragraph', () => {
        render(<About />);

        const headingElement = screen.getByRole('heading', { level: 1, name: /about/i });
        expect(headingElement).toBeDefined();

    });
});
