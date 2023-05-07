import { create } from 'zustand';
import { v4 as uuidv4 } from 'uuid';

const getDataStorage = () => {
    const data = localStorage.getItem('posts');
    return data ? JSON.parse(data) : [];
};
const initialState = {
    posts: getDataStorage(),
};

interface Post {
    id: string;
    title: string;
    content: string;
}

type PostState = {
    posts: Post[];
    addPost: (post: Post) => void;
    removePost: (post: Post) => void;
    editPost: (post: Post) => void;
    getPost: (id: string) => void;
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
    editPost: (post: any) =>
        set((state) => ({
            posts: state.posts.map((p) => (p.id === post.id ? post : p)),
        })),
    getPost: (id: string) => {
        get((state) =>{console.log(state,'statecin')})
        const post = initialState.posts.find((p) => p.id === id);
        return post;
    }


}));
