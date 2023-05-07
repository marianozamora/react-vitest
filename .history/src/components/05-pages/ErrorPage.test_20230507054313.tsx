import React from 'react';
import { render, screen } from '@testing-library/react';
import { useRouteError } from 'react-router-dom';
import ErrorPage from '../ErrorPage';

vi.mock('react-router-dom', () => ({
  useRouteError: vi.fn(),
}));

describe('ErrorPage', () => {
  test('renders error details', () => {
    const errorMock = {
      statusText: 'Error',
      message: 'An unexpected error occurred',
    };

    useRouteError.mockReturnValue(errorMock);

    render(<ErrorPage />);

    expect(screen.getByText('Oops!')).toBeInTheDocument();
    expect(screen.getByText('Sorry, an unexpected error has occurred.')).toBeInTheDocument();
    expect(screen.getByText('Error')).toBeInTheDocument();
    expect(screen.getByText('An unexpected error occurred')).toBeInTheDocument();
  });

  test('handles button click', () => {
    const replaceMock = jest.fn();
    global.window.location.replace = replaceMock;

    render(<ErrorPage />);

    const button = screen.getByText('Ir al inicio');
    button.click();

    expect(replaceMock).toHaveBeenCalledWith('/');
  });
});
