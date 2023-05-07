import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Router, Route, MemoryRouter } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { usePostStore } from '../../store/postStore';
import EditPost from './EditPost';
import { vi } from 'vitest';

vi.mock('../../store/postStore');

describe('EditPost', () => {
    it('renders the edit form', () => {

        const postId = '123';
        render(
            <MemoryRouter>
                <Router
                >
                <Route path="/posts/:postId">
                    <EditPost />
                </Route>
                </Router>
            </MemoryRouter>,
            { route: `/posts/${postId}` }
        );
        expect(screen.getByLabelText('Title:')).toBeDefined();
        expect(screen.getByLabelText('Content:')).toBeDefined();
    });
});