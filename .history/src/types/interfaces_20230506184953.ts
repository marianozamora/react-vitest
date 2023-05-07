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