import React from 'react';
import { render, screen } from '@testing-library/react';
// import { usePostStore } from '../../store/postStore';
// import { useNavigate } from 'react-router-dom';
import Header from './Header';
// import '@testing-library/jest-dom/extend-expect';

// vi.mock('../../store/postStore.ts'); // Mock the postStore module

describe('Header', () => {
  test('renders correctly', () => {
    const mockPosts = [
      { id: 1, name: 'Post 1' },
      { id: 2, name: 'Post 2' },
    ];

    vi.fn().mockReturnValue({ posts: mockPosts });
    const mockNavigate = vi.fn();
    vi.fn().mockReturnValue(mockNavigate);

    render(<Header />);

    // Assert that NavBar component is rendered
    expect(screen.getByRole('navigation')).toBeDefined();

    // Assert that SearchBar component is rendered with correct props
    expect(screen.getByRole('textbox')).toBeDefined();
    // expect(screen.getByRole('textbox')).toHaveAttribute('placeholder', 'Search by post name');
    expect(screen.getAllByRole('listitem')).toHaveLength(2); // Assuming 2 mock posts

    // Simulate selecting a post in SearchBar
    const postLink = screen.getByText('Post 1');
    postLink.click();

    // Assert that navigate function is called with correct argument
    expect(mockNavigate).toHaveBeenCalledWith('posts/1');
  });
});
