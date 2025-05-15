import React,{useContext, useState, useEffect} from 'react';
import ReactDom from 'react-dom';
import type { SkipItemType } from '../../types/skip';
import { SelectedSkipContext } from '../../contexts/SelectedSkipContext';
import clsx from 'clsx';
import Button from '../UI/Button';
import H1 from '../UI/H1';
import { skipImages } from '../../utils/SkipImages';


type SkipItemProps = {
    skip :SkipItemType
}

const SkipItem : React.FC<SkipItemProps> = ({skip}) => {
    
    const [counter, setCounter] = useState<number>(1);

    useEffect(() =>{
        setCounter(1)
    },[skip])

    const increaseCounter = () => {setCounter(prevCounter => prevCounter+1)}
    const decreaseCounter = () => {counter > 1 && setCounter(prevCounter =>  prevCounter-1 )}

    return (
            <div className="flex flex-col xl:flex-row space-y-4 xl:space-y-0 xl:space-x-4  mt-10 xl:items-end">
                <div className="xl:w-50 h-34 ">
                    <img src={skipImages[skip.size]} className="h-full w-full object-cover rounded-xl" />
                </div>
                <div>
                    <h2 className="text-white text-lg">{skip.size} Yards Skip</h2>
                    <p className="text-gray-400 text-xs mb-3">{skip.hire_period_days} days hire period</p>
                    <p className="text-xl text-white font-bold mb-2">{"£"+skip.price_before_vat}</p>
                    <div className="text-white flex   items-center border border-white rounded w-max mb-2">
                        <button onClick={() => decreaseCounter()} className="hover:text-gray-400 px-2">
                            -
                        </button>
                        <p className="px-1 w-8 text-center">{counter}</p>
                        <button onClick={() => increaseCounter()} className="hover:text-gray-400 px-2">
                            +
                        </button>
                    </div>
                </div>
            </div>
    )
}

const SelectedSkipPanel : React.FC = ({}) => {

    const {selectedSkip,setSelectedSkip} = useContext(SelectedSkipContext)

    const portalElement = document.getElementById("PanelPortal")
    if (!portalElement){
        return <></>
    }

    const width = "w-full md:w-[250px] xl:w-[400px]"

    return ReactDom.createPortal(
        <div className={clsx('relative ',width,{'hidden':!selectedSkip})}>
            <div className={clsx("fixed top-0 right-0 border-0 h-full bg-black md:bg-white/20 px-10 md:px-5 xl:px-10 py-10 flex flex-col justify-between z-50",width)}>
                <div>
                    <div onClick={() => setSelectedSkip(null)} className="flex items-center space-x-2 text-white mb-10 cursor-pointer hover:text-gray-400">
                        <svg width={20} height={20} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18 6 6 18" />
                            <path d="m6 6 12 12" />
                        </svg>
                        <p>Close</p>
                    </div>

                    <div>
                        <H1>You selected</H1>

                        {selectedSkip && <SkipItem skip={selectedSkip}></SkipItem>}
                    </div>
                </div>
                <div>
                    <Button>
                        <p className="">
                            Continue
                        </p>
                        <svg width={20} height={20} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 12h14" />
                            <path d="m12 5 7 7-7 7" />
                        </svg>
                    </Button>
                </div>
            </div>
        </div>,
        portalElement
    );
}

export default SelectedSkipPanel;
