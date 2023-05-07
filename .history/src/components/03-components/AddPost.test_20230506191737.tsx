import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { usePostStore } from '../../store/postStore';
import { useNavigate } from 'react-router-dom';
import AddPost from './AddPost';

jest.mock('../../store/postStore');
jest.mock('react-router-dom', () => ({
    useNavigate: jest.fn()
}));

describe('AddPost component', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('renders form and handles form submission', () => {
        const mockAddPost = jest.fn();
        const mockNavigate = jest.fn();
        usePostStore.mockReturnValue({ addPost: mockAddPost });
        (useNavigate as jest.Mock).mockReturnValue(mockNavigate);

        render(<AddPost />);

        // Fill in form inputs
        fireEvent.change(screen.getByLabelText('Title:'), {
        target: { value: 'Test Post' }
        });
        fireEvent.change(screen.getByLabelText('Content:'), {
        target: { value: 'Test content' }
        });

        // Submit the form
        fireEvent.click(screen.getByText('Save'));

        // Assertions
        expect(mockAddPost).toHaveBeenCalledWith({
        title: 'Test Post',
        content: 'Test content',
        id: '',
        author: '',
        videoUrl: '',
        imageUrl: '',
        createdAt: '',
        updatedAt: '',
        likes: 0
        });
        expect(mockNavigate).toHaveBeenCalledWith('/posts');
    });
});
