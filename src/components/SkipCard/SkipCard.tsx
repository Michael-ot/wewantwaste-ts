
import React, {useContext} from 'react';
import clsx from 'clsx';
import type { SkipItemType } from '../../types/skip';
import { SelectedSkipContext } from '../../contexts/SelectedSkipContext';
import { skipImages } from '../../utils/SkipImages';

type SkipCard = {
    skip: SkipItemType,
}

const SkipCard : React.FC<SkipCard> = ({skip}) => {

    const {selectedSkip,setSelectedSkip} = useContext(SelectedSkipContext)

    const isSelected = selectedSkip && (selectedSkip.id == skip.id)

    return (
        <div onClick={() => setSelectedSkip(skip)} className={clsx(" group border-2 border-transparent hover:border-primary hover:bg-primary rounded-xl transition-all duration-300 ease-in-out transform hover:scale-[1.02] hover:shadow-xl cursor-pointer", {"border-primary bg-primary scale-[1.02] shadow-xl":isSelected})}>
            <div className=" rounded-xl bg-white/15 border border-white/25 group-hover:border-transparent h-[250px] relative overflow-hidden transition-all duration-300 ease-in-out">
                    {/* <iframe src='https://my.spline.design/untitled-BvKg48Q7BSlHr5kylXVa2OdN/' frameBorder='0' width='50%' height='50%'></iframe> */}
                <img src={skipImages[skip.size]} className="h-full w-full object-cover transition-opacity duration-300 ease-in-out group-hover:opacity-90" />
                {!skip.allowed_on_road &&  <div className="absolute top-2 left-2 p-1.5 bg-primary rounded-2xl text-white flex space-x-1.5 w-max shadow-md transition-transform duration-300 group-hover:scale-105">
                    <svg width={16} height={16} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                        <path d="M12 9v4" />
                        <path d="M12 17h.01" />
                    </svg>
                    <p className="text-xs">Not Allowed On The Road</p>
                </div>}
            </div>
            <div className={clsx("py-4 px-4 flex justify-between bg-transparent transition-colors duration-300 group-hover:bg-primary rounded-b-lg",{"bg-primary":isSelected})}>
                <div>
                    <h3 className="text-xl text-white font-semibold transition-colors duration-300">{skip.size} Yards Skip</h3>
                    <p className="text-gray-400 text-sm">{skip.hire_period_days} days hire period</p>
                </div>
                <div>
                    <p className="text-xl text-white font-bold">{"£"+skip.price_before_vat}</p>
                </div>
                
            </div>
        </div>
    );
}

export default SkipCard;
