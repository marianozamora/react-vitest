import { create } from 'zustand';

const getDataStorage = () => {
    const data = localStorage.getItem('posts');
    return data ? JSON.parse(data) : [];
};
const initialState = {
    posts: getDataStorage(),
};

interface Post {
    title: string;
    content: string;
}

type PostState = {
    posts: Post[];
    addPost: (post: Post) => void;
    removePost: (post: Post) => void;
};

export const usePostStore = create<PostState>((set) => ({
    posts: initialState.posts,
    addPost: (post) => set(
        (state) => ({ posts: [...state.posts, post] })),
    removePost: (post) =>
        set((state) => ({
            posts: state.posts.filter((p) => p !== post),
        })),
    
}));
