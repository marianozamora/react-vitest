import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import {Layout}  from './Layout';

describe('Layout', () => {
    it('renders the children within the layout', () => {
            const { getByText } = render(
            <MemoryRouter>
                <Layout>
                <h1>Test Heading</h1>
                <p>Test Paragraph</p>
                </Layout>
            </MemoryRouter>
            );

            const headingElement = getByText((_, element) => {
                const hasText = (text: any) => element.textContent === text;
                const isTestHeading = hasText('Test Heading');
                return isTestHeading;
            });
            
                const paragraphElement = getByText('Test Paragraph');
            
                expect(headingElement).toBeDefined();
                expect(paragraphElement).toBeDefined();
        });
});
