import { create } from 'zustand';
import { v4 as uuidv4 } from 'uuid';
import { Post, PostState } from '../types/interfaces';

const getDataStorage = () => {
    const data = localStorage.getItem('posts');
    return data ? JSON.parse(data) : [];
};
const initialState = {
    posts: getDataStorage(),
};



export const usePostStore = create<PostState>((set, get) => ({
    posts: initialState.posts,
    addPost: (post) => {
        post.id = uuidv4();
        set(
            (state) => ({ posts: [...state.posts, post] }))
        localStorage.setItem('posts', JSON.stringify([...initialState.posts, post]));
    },
    removePost: (post) =>
        set((state) => ({
            posts: state.posts.filter((p) => p !== post),
        })),
    editPost: (post: Post) => {
        const getLocalStorage = localStorage.getItem('posts');
        const data = getLocalStorage ? JSON.parse(getLocalStorage) : [];
        const postIndex = data.findIndex((p: Post) => p.id === post.id);
        data[postIndex] = post;
        localStorage.setItem('posts', JSON.stringify(data));

        set((state) => ({
            posts: state.posts.map((p) => {
                if (p.id === post.id) {
                    return post;
                }
                return p;
            } ),
        }));
    },
    getPost: (id: string) => {
        const data = get();
        const post = data.posts.find((p) => p.id === id);
        return post;
    }


}));
