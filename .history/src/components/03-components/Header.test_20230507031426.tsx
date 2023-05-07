import React from 'react';
import { render, screen } from '@testing-library/react';
import { usePostStore } from '../../store/postStore';
import { useNavigate } from 'react-router-dom';
import Header from './Header';

let mockStore = vi.mock('../../store/postStore.ts'); // Mock the postStore module

describe('Header', () => {
  test('renders correctly', () => {
    const mockPosts = [
      { id: 1, name: 'Post 1' },
      { id: 2, name: 'Post 2' },
    ];

    vi.fn().mockReturnValue({ posts: mockPosts });
    const mockNavigate = jest.fn();
    useNavigate.mockReturnValue(mockNavigate);

    render(<Header />);

    // Assert that NavBar component is rendered
    expect(screen.getByRole('navigation')).toBeInTheDocument();

    // Assert that SearchBar component is rendered with correct props
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toHaveAttribute('placeholder', 'Search by post name');
    expect(screen.getAllByRole('listitem')).toHaveLength(2); // Assuming 2 mock posts

    // Simulate selecting a post in SearchBar
    const postLink = screen.getByText('Post 1');
    postLink.click();

    // Assert that navigate function is called with correct argument
    expect(mockNavigate).toHaveBeenCalledWith('posts/1');
  });
});
