import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import PostsList from './PostsList';

const posts = [
    { id: 1, title: 'Post 1' },
    { id: 2, title: 'Post 2' },
    { id: 3, title: 'Post 3' },
];

describe('PostsList', () => {
    test('renders all posts', () => {
        render(
        <Router>
            <PostsList posts={posts} />
        </Router>
        );

        posts.forEach((post) => {
        const linkElement = screen.getByText(post.title);
        expect(linkElement).toBeDefined();
        });
    });

    test('renders "Add Post" link', () => {
        render(
        <Router>
            <PostsList posts={posts} />
        </Router>
        );

        const addPostLink = screen.getByText('Add Post');
        expect(addPostLink).toBeDefined();
    });
});
