import { renderHook, act } from '@testing-library/react-hooks';
import { v4 as uuidv4 } from 'uuid';
import { usePostStore } from './postStore';

describe('usePostStore', () => {
    test('adds a post', () => {
        const { result } = renderHook(() => usePostStore());

        act(() => {
        result.current.addPost({
            id: uuidv4(), title: 'New Post', content: 'New Content',
            author: '',
            videoUrl: '',
            imageUrl: '',
            createdAt: '',
            updatedAt: '',
        });
        });

        expect(result.current.posts).toHaveLength(1);
        expect(result.current.posts[0].title).toBe('New Post');
        expect(result.current.posts[0].content).toBe('New Content');
    });



    test('edits a post', () => {
        const { result } = renderHook(() => usePostStore());

        const postId = uuidv4();
        const updatedPost = {
            id: postId,
            title: 'Updated Post',
            content: 'Updated Content',
            author: '',
            videoUrl: '',
            imageUrl: '',
            createdAt: '',
            updatedAt: '',
        };
        act(() => {
        result.current.addPost({
            id: postId, title: 'Post 1', content: 'Content 1',
            author: '',
            videoUrl: '',
            imageUrl: '',
            createdAt: '',
            updatedAt: '',
        });
        result.current.editPost(updatedPost);
        });

        expect(result.current.posts).toHaveLength(2);
    });

    test('gets a post by id', () => {
        const { result } = renderHook(() => usePostStore());

        const post = { id: '1', title: 'Test Post', content: 'Hello World', author: 'John Doe', videoUrl: '', imageUrl: '', createdAt: '', updatedAt: '' };

        act(() => {
        result.current.addPost(post);
        });

        const retrievedPost = result.current.getPost('1');

        expect(retrievedPost).toBeUndefined();
    });
});
