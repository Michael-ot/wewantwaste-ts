import React, {useState,useContext, useMemo} from 'react';
import { SortByPrice } from "../SortByPrice/SortByPrice";
import SkipCard from '../SkipCard/SkipCard';
import type { SkipItemType } from '../../types/skip';
import { SelectedSkipContext } from '../../contexts/SelectedSkipContext';
import clsx from 'clsx';


type SkipListProps = {
    skips: SkipItemType[]
}

const SkipList: React.FC<SkipListProps> = ({ skips }) => {
    const {selectedSkip} = useContext(SelectedSkipContext)
    const [sortBy, setSortBy] = useState<"low-to-high" | "high-to-low">("low-to-high");
    // Work on Sorting

    const sortedSkips = useMemo(()=>{
        return [...skips].sort((a,b) => {
            if( sortBy == 'low-to-high'){
                return a.price_before_vat - b.price_before_vat
            }else{
                return b.price_before_vat - a.price_before_vat
            };

        }
    )},[skips,sortBy])

    return (
        <>
            <SortByPrice setSortBy={setSortBy}></SortByPrice>
            <div className={clsx("grid gap-8 mb-10",selectedSkip ? "lg:grid-cols-2 md:grid-cols-1" : "lg:grid-cols-3 md:grid-cols-2")}>
                {
                    sortedSkips.map((item:SkipItemType) =><SkipCard skip={item} key={item.id}></SkipCard>)
                }      
            </div>
        </>
    );
}

export default SkipList;
