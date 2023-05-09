
interface ButtonProps {
    handleClick: () => void;
    label: string;
    type?: string;
}
export default function Button({ handleClick, label }: ButtonProps): JSX.Element {
    return (
        <button
            className="bg-blue-500 text-white py-2 px-4 rounded-md mt-4 inline-block hover:bg-blue-600"
            onClick={handleClick}
        >
            {label}
        </button>
    )
}