import React from 'react';
import clsx from 'clsx';

type H1Props = {
    children : React.ReactNode
    className?: string | null
}

const H1: React.FC<H1Props> = ({children,className}) => {
    return (
        <h1 className={clsx("text-2xl sm:text-3xl font-bold mb-3 text-white",className)}>{children}</h1>
    );
}

export default H1;
