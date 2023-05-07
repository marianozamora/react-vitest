import { render } from '@testing-library/react';
import Container from './Container';

describe('Container', () => {
    it('renders the children within a container element', () => {
        const { getByText } = render(
        <Container>
            <h1>Test Heading</h1>
            <p>Test Paragraph</p>
        </Container>
        );

        const headingElement = getByText('Test Heading');
        const paragraphElement = getByText('Test Paragraph');

        expect(headingElement).toBeDefined();
        expect(paragraphElement).toBeDefined();
    });
});
