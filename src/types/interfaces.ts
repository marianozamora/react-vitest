import React, { ReactNode } from 'react';


export interface Post{
    id:string
    title: string;
    author: string;
    content: string;
    videoUrl: string;
    imageUrl: string;
    createdAt: string;
    updatedAt: string;
    likes: number;
}

export interface PostParams {
    postId: string ;
}

export interface LinkProps {
    href: string;
    target?: string;
    children: React.ReactNode;
    className?: string;
}

export interface SearchBarProps {
    posts: Post[];
    onSelectPost: (post: Post) => void;
}

export interface ImageHeroProps {
    imageUrl: string;
    altText: string;
}

export interface YouTubeVideoProps {
    videoId: string;
}

export interface PostsListProps {
    title: string;
    posts: Post[];
}

export interface ContainerProps {
    children: ReactNode;
}

export type PostState = {
    posts: Post[];
    addPost: (post: Post) => void;
    removePost: (post: Post) => void;
    editPost: (post: Post) => void;
    getPost: (id: string) => Post | undefined;
};
// posts: Post[];
//   addPost: (post: Post) => void;