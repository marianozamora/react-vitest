import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Navbar from './NavBar';

describe('Navbar', () => {
    it('renders the navigation links', () => {
        render(
        <MemoryRouter>
            <Navbar />
        </MemoryRouter>
        );

        // Assert that the navigation links are rendered with the correct text
        expect(screen.getByText('Home')).toBeDefined();
        expect(screen.getByText('About')).toBeDefined();
        expect(screen.getByText('Blog')).toBeDefined();
        expect(screen.getByText('Contact')).toBeDefined();
    });

  it('renders the logo', () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    // Assert that the logo is rendered
    expect(screen.getByAltText('Logo')).toBeDefined();
  });
});
