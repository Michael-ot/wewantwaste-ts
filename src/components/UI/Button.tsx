import React from 'react';

type ButtonProps = {
    children: React.ReactNode,
    onClick?: () => void
  }

const Button: React.FC<ButtonProps> = ({children, onClick}) => {
    return (
        <button onClick={onClick} className=" py-3 flex space-x-2 justify-center items-center text-white bg-primary w-full rounded-lg">
            {children}
        </button>
    );
}

export default Button;
