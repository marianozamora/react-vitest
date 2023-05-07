import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import PostsList from './PostList';

const posts = [
    { id: '1', title: 'Post 1', content: 'Content 1', likes: 0, author: '', createdAt: '', updatedAt: '', videoUrl: '', imageUrl: '' },
    { id: '2', title: 'Post 2',content: 'Content 1', likes: 0, author: '', createdAt: '', updatedAt: '', videoUrl: '', imageUrl: '' },
    { id: '3', title: 'Post 3', content: 'Content 1', likes: 0, author: '', createdAt: '', updatedAt: '', videoUrl: '', imageUrl: '' },
  ];

describe('PostsList', () => {
    test('renders all posts', () => {
        render(
        <MemoryRouter>
            <PostsList posts={posts} />
        </MemoryRouter>
        );

        posts.forEach((post) => {
        const linkElement = screen.getByText(post.title);
        expect(linkElement).toBeDefined();
        });
    });

    test('renders "Add Post" link', () => {
        render(
        <Router>
            <PostsList title='' posts={posts} />
        </Router>
        );

        const addPostLink = screen.getByText('Add Post');
        expect(addPostLink).toBeDefined();
    });
});
