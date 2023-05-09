import { render, screen } from '@testing-library/react';
import { InputForm, TextForm } from './index';
import { fireEvent } from '@testing-library/react';

describe('InputForm', () => {
    it('renders input element with label', () => {
        render(<InputForm label="Name" />);

        const inputElement = screen.getAllByText('Name');

        expect(inputElement).toBeDefined();
        // expect(inputElement.).toBe('INPUT');
    });

    it('renders error message when errors prop is provided', () => {
        render(<InputForm label="Name" errors={{ message: 'Required field' }} />);

        const errorMessage = screen.getByText('Required field');

        expect(errorMessage).toBeDefined();
    });
    });

    describe('TextForm', () => {
    it('renders textarea element with label', () => {
        render(<TextForm label="Content" />);
    });
});
