import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Layout }  from './Layout';

describe('Layout', () => {
    it('renders the children within the layout', () => {
            render(
            <MemoryRouter>
                <Layout>
                </Layout>
            </MemoryRouter>
            );

        const headingElement = screen.getByText(/Home/i);
        // const paragraphElement = screen.getByText('Test Paragraph');

        expect(headingElement).toBeDefined();
                // expect(paragraphElement).toBeDefined();
        });
});
