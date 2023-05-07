import { Post } from '../../types/interfaces';

export default function Post({title, content}:Post) {
    return (
        <div className="bg-white shadow-lg rounded-lg p-4 mb-4">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-gray-700">{post.content}</p>
        </div>
    )
}