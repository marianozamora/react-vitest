import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import {Layout}  from './Layout';

describe('Layout', () => {
    it('renders the children within the layout', () => {
            render(
            <MemoryRouter>
                <Layout>
                <h1>Test Heading</h1>
                <p>Test Paragraph</p>
                </Layout>
            </MemoryRouter>
            );

        const headingElement = screen.getByText('Test Heading');
        const paragraphElement = screen.getByText('Test Paragraph');

                expect(headingElement).toBeDefined();
                expect(paragraphElement).toBeDefined();
        });
});
