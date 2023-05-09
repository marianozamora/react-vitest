import React from "react"
//import 'index.css'
interface InputProps {
    type?: string;
    placeholder?: string;
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    ref?: React.Ref<HTMLInputElement>;
  name?: string;
  errors?: any;
  label?: string;
  rows?: number;
  cols?: number;
  id?: string;
  className?: string;

}
interface TextFormProps {
  name?: string;
  errors?: any;
  label?: string;
  rows?: number;
  cols?: number;
  id?: string;
  className?: string;
  ref?: React.Ref<HTMLTextAreaElement>;
}
export const InputForm = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  return (
    <div className="mb-4">
      <label htmlFor={props.label} className="block mb-2 font-medium text-gray-700">
        {props.label}
      </label>
      <input
      {...props}
      ref={ref}
      className="px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
      />
      {props.errors && <span>{ props.errors.message }</span>}
    </div>

  );
});

export const TextForm = React.forwardRef<HTMLTextAreaElement, TextFormProps>((props, ref) => {
  return (
    <div>
      <label htmlFor="content" className="block mb-2 font-medium">
      Content:
      </label>
      <textarea
      {...props}
        rows={6}
        ref={ref}
      className="border border-gray-300 rounded px-2 py-1 w-full"
      ></textarea>
    </div>)
});

function Input(params: InputProps) {
  return (
    <>
      <input
        {...params}
        className="px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
    </>);
}

export default Input
