import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
// import { Router, Route } from 'react-router-dom';
import { createMemoryHistory } from 'history';
// import { usePostStore } from '../../store/postStore';
// import EditPost from './EditPost';
import { vi } from 'vitest';

vi.mock('../../store/postStore');

describe('EditPost', () => {
    // it('renders the edit form', () => {
    //     const history = createMemoryHistory();
    //     const postId = '123';
    //     render(
    //         <Router
    //             history={history}

    //             >
    //             <Route
                    
    //                 path="/posts/:postId">
    //                 <EditPost />
    //             </Route>
    //         </Router>,
    //         { route: `/posts/${postId}` }
    //     );
    //     expect(history.location.pathname).toBe("/posts/123");

    //     expect(screen.getByLabelText('Title:')).toBeDefined();
    //     expect(screen.getByLabelText('Content:')).toBeDefined();
    // });
    it('saves the edited post', async () => {
        // ...
        const mockEditPost = vi.fn();
        vi.fn().mockReturnValue({ editPost: mockEditPost });
        const history = createMemoryHistory();
        const postId = '123';
        const saveButton = screen.getByText(/Save/i);
        // Click the Save button
        fireEvent.click(saveButton);

        // Assert that the editPost function was called with the correct arguments
        expect(mockEditPost).toHaveBeenCalledWith({
            id: postId,
            content: 'New Content',
            title: 'New Title',
            author: '',
            videoUrl: '',
            imageUrl: '',
            createdAt: '',
            updatedAt: '',
            likes: 0,
            });

        // Assert that the user is navigated to the "/login" route
        expect(history.location.pathname).toBe('/posts/123');
    });
});