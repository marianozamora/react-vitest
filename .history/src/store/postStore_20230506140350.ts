import { create } from 'zustand';


type PostState = {
    posts: string[];
    addPost: (post: string) => void;
    removePost: (post: string) => void;
};

export const usePostStore = create<PostState>((set) => ({
    posts: [],
    addPost: (post) => set((state) => ({ posts: [...state.posts, post] })),
    removePost: (post) => set((state) => ({ posts: state.posts.filter((p) => p !== post) })),
}));
