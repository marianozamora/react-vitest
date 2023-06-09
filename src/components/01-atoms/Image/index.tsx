import { v4 as uuidv4 } from 'uuid';
interface ImageProps {
    images: {
        url: string;
        alt?: string;
        width?: string;
    }[]
}

interface ContainerImageProps {
    children: React.ReactNode;
}

export function ContainerImage({ children }:ContainerImageProps) {
    return (
        <div className='flex mt-8 justify-between'>
            {children}
        </div>
    )
}
export default function Image({images}:ImageProps) {
    return (
        <ContainerImage>
            {images.map((image) => (
                <img key={uuidv4()} width={image.width} src={image.url} alt={ image.alt } />
            ))}

        </ContainerImage>

    )
}