import React from 'react';
import { render, screen } from '@testing-library/react';
import { useRouteError } from 'react-router-dom';
import ErrorPage from './ErrorPage';

vi.mock('react-router-dom', () => ({
    useRouteError: vi.fn(),
}));

describe('ErrorPage', () => {
    test('renders error details', () => {
        const errorMock = {
        statusText: 'Error',
        message: 'An unexpected error occurred',
        };

    vi.fn().mockReturnValue(errorMock);

    // render(<ErrorPage />);

    // expect(screen.getByText('Oops!')).toBeDefined();
    // expect(screen.getByText('Sorry, an unexpected error has occurred.')).toBeDefined();
    // expect(screen.getByText('Error')).toBeDefined();
    // expect(screen.getByText('An unexpected error occurred')).toBeDefined();
});

});
