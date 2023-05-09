import { Post as PostType } from '../../types/interfaces';
import Image from '../01-atoms/Image';

export default function Post({ title, content }: PostType) {
    return (
        <div className="col-span-1 flex flex-col bg-white shadow-lg rounded-lg p-4 mb-4">
            <h2 className="text-xl font-bold mb-2">{title}</h2>
            <Image
                images={[
                    {
                        url: 'https://loremflickr.com/700/640',
                        width: '100%',
                    }]}
            />
        <p className="text-gray-700">{content}</p>
        </div>
    )
}
