import React from 'react';


type H1Props = {
    children : React.ReactNode
}

const H1: React.FC<H1Props> = ({children}) => {
    return (
        <h1 className="text-2xl sm:text-3xl font-bold mb-3 text-white">{children}</h1>
    );
}

export default H1;
