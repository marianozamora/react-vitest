import { create } from 'zustand';

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
    posts: [],
    addPost: (post) => set((state) => ({    posts: [...state.posts, post] })),
    removePost: (post) =>
        set((state) => ({
            posts: state.posts.filter((p) => p !== post),
        })),
    
}));
