// import React from "react"
//import 'index.css'
interface InputProps {
    type: string;
    placeholder: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = (params: InputProps) => {
    return (
        <>
        <input
          {...params}
          className="px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        </>);
}

export default Input
