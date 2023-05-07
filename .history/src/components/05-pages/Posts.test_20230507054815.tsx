import React from 'react';
import { render, screen } from '@testing-library/react';
import PostsList from '../PostList';
import Home from '../Home';

jest.mock('../../store/postStore', () => ({
  usePostStore: jest.fn(() => ({
    posts: [
      { id: 1, title: 'Post 1', content: 'Content 1' },
      { id: 2, title: 'Post 2', content: 'Content 2' },
    ],
  })),
}));

describe('Home', () => {
  test('renders PostsList with correct props', () => {
    render(<Home />);

    expect(screen.getByText('Posts')).toBeInTheDocument();
    expect(screen.getByText('Post 1')).toBeInTheDocument();
    expect(screen.getByText('Post 2')).toBeInTheDocument();
  });
});
