//import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { usePostStore } from '../../store/postStore';
import { MemoryRouter, Route, Routes, useNavigate } from 'react-router-dom';
import AddPost from './AddPost';
import {vi} from 'vitest'
// import '@testing-library/jest-dom/extend-expect';

vi.mock('../../store/postStore', () => ({
  usePostStoreMock: vi.fn(),
}));

describe('AddPost', () => {
    test('renders form and submits post', () => {
      const addPost = vi.fn();
      vi.fn().mockReturnValue({ addPost });
      const navigate = vi.fn();
  vi.spyOn(ReactRouterDOM, 'useNavigate').mockReturnValue(navigate);

    // Render the component
    render(<AddPost />);

    // Get the input fields and button
    const titleInput = screen.getByLabelText('Title:');
    const contentTextarea = screen.getByLabelText('Content:');
    const saveButton = screen.getByText('Save');


      // Simulate user input
    fireEvent.change(titleInput, { target: { value: 'Test Title' } });
    fireEvent.change(contentTextarea, { target: { value: 'Test Content' } });

    // Trigger form submission
    fireEvent.click(saveButton);

    expect(addPost).toHaveBeenCalledWith({
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

    // Verify that the input fields are cleared
    expect(titleInput.innerText).toBe('');
    expect(contentTextarea.innerText).toBe('');
  });
});
