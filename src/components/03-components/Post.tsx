import { Post as PostType } from '../../types/interfaces';
import Image from '../01-atoms/Image';

export default function Post({ title, content,author, imageUrl }: PostType) {
    return (
        <div className=" bg-white shadow-lg rounded-lg p-4 mb-4">
            <Image
                images={[
                    {
                        url: `https://${imageUrl}` ,
                        width: '100%',
                    }]}
            />
            <div className="px-5 pb-5">
                <h5 className="mt-5 text-xl font-semibold tracking-tight text-gray-900 ">{title}</h5>
                <div className="flex items-center mt-2.5 mb-5">{content}</div>
                <div className="flex items-center justify-between">
                <span className="text-xl  text-gray-900 ">{author}</span>
                {/* <span className="font-medium rounded-lg text-sm px-5 py-2.5 text-center ">{Date.parse(JSON.parse(createdAt)).toString()}</span> */}
                </div>
            </div>
        </div>
    )
}
