import React from 'react';

type RoundIconProps = {
    children : React.ReactNode
}

const RoundIcon: React.FC<RoundIconProps> = ({children}) => {
    return (
        <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center mb-2 mx-auto">
            {children}
        </div>
    );
}

export default RoundIcon;
