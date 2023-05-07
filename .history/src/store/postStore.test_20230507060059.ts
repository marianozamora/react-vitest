import { renderHook, act } from '@testing-library/react-hooks';
import { create } from 'zustand';
import { v4 as uuidv4 } from 'uuid';
import { usePostStore } from './postStore';

describe('usePostStore', () => {
    test('adds a post', () => {
        const { result } = renderHook(() => usePostStore());

        act(() => {
        result.current.addPost({ id: uuidv4(), title: 'New Post', content: 'New Content' });
        });

        expect(result.current.posts).toHaveLength(1);
        expect(result.current.posts[0].title).toBe('New Post');
        expect(result.current.posts[0].content).toBe('New Content');
    });

    test('removes a post', () => {
        const { result } = renderHook(() => usePostStore());

        const postId = uuidv4();
        act(() => {
        result.current.addPost({ id: postId, title: 'Post 1', content: 'Content 1' });
        result.current.removePost(postId);
        });

        expect(result.current.posts).toHaveLength(0);
    });

    test('edits a post', () => {
        const { result } = renderHook(() => usePostStore());

        const postId = uuidv4();
        const updatedPost = { id: postId, title: 'Updated Post', content: 'Updated Content' };
        act(() => {
        result.current.addPost({ id: postId, title: 'Post 1', content: 'Content 1' });
        result.current.editPost(updatedPost);
        });

        expect(result.current.posts).toHaveLength(1);
        expect(result.current.posts[0]).toEqual(updatedPost);
    });

    test('gets a post by id', () => {
        const { result } = renderHook(() => usePostStore());

        const postId = uuidv4();
        const post = { id: postId, title: 'Post 1', content: 'Content 1' };
        act(() => {
        result.current.addPost(post);
        });

        const fetchedPost = result.current.getPost(postId);

        expect(fetchedPost).toEqual(post);
    });
});
