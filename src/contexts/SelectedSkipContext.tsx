import React,{useState} from "react";
import type { SkipItemType } from "../types/skip";

type SelectedSkipContextType = {
    selectedSkip : SkipItemType | null,
    setSelectedSkip : React.Dispatch<React.SetStateAction<SkipItemType|null>>
}

type SelectedSkipProviderType = {
    children : React.ReactNode
}

const defaultValue: SelectedSkipContextType = {
    selectedSkip: null,
    setSelectedSkip: () => {},
}

export const SelectedSkipContext = React.createContext<SelectedSkipContextType>(defaultValue)

const SelectedSkipProvider : React.FC<SelectedSkipProviderType> = ({children}) => {
    const [selectedSkip, setSelectedSkip] = useState<SkipItemType|null>(null)

    return (
        <SelectedSkipContext.Provider value={{selectedSkip,setSelectedSkip}}>
            {children}
        </SelectedSkipContext.Provider>
    )
}

export default SelectedSkipProvider;