//import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { usePostStore } from '../../store/postStore';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import AddPost from './AddPost';
import {vi} from 'vitest'
import '@testing-library/jest-dom/extend-expect';

vi.mock('../../store/postStore', () => ({
  usePostStoreMock: vi.fn(),
}));

describe('AddPost', () => {
    test('renders form and submits post', () => {
      const addPost = vi.fn();
      const mockAddPost = vi.fn();
    vi.fn().mockReturnValue({ addPost });

        render(
            <MemoryRouter initialEntries={['/add-post']}>

                    <Route path="/add-post" element={<AddPost />} />
        </MemoryRouter>
        );

    // Fill in the form fields
    fireEvent.change(screen.getByLabelText(/title/i), { target: { value: 'Test Title' } });
    fireEvent.change(screen.getByLabelText(/content/i), { target: { value: 'Test Content' } });

    // Submit the form
    fireEvent.click(screen.getByText(/save/i));

    // Assert that the addPost function is called with the correct arguments
    expect(mockAddPost).toHaveBeenCalledWith({
        title: 'Test Title',
        content: 'Test Content',
        id: '',
        author: '',
        videoUrl: '',
        imageUrl: '',
        createdAt: '',
        updatedAt: '',
        likes: 0,
    });

    // Assert that the page navigates to the correct path after submission
    // expect(screen.getByText(/add post/i)).toBeInTheDocument();
  });
});
