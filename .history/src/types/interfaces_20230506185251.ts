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
