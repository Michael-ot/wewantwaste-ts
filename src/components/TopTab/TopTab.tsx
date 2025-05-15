import React from 'react';
import clsx from 'clsx'
import RoundIcon from '../UI/RoundIcon';


type TabItemProps = {
    children: React.ReactNode,
    tab: string,
    isActive: boolean
}

type TopTabProps = {
    activeTab : number,
    setActiveTab: React.Dispatch<React.SetStateAction<number>>
}

type TabType = {
    tab : string,
    icon : React.ReactElement
}

const TabItem : React.FC<TabItemProps> = ({children,tab,isActive = false}) =>{
    return (
        <>
          <div className={clsx('text-white shrink-0 scale-75 md:scale-100', { 'opacity-60 hover:opacity-80': isActive })}>
                <RoundIcon>
                    {children}
                </RoundIcon>
                <p className='hidden xl:block'>{tab}</p>
            </div>  
        </>
    )
}

const TopTab: React.FC<TopTabProps> = ({activeTab, setActiveTab}) => {

    const tabs : TabType[] = [
        {
            tab: "Postcode",
            icon: <svg width={20} height={20} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <path d="M12 7a3 3 0 1 0 0 6 3 3 0 1 0 0-6z" />
                </svg>
        },
        {
            tab: "Waste Type",
            icon: <svg width={20} height={20} viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_2211_39)">
                        <path d="M5.00001 9.64286C7.50001 9.64286 9.28572 8.75715 9.28572 6.78572C9.28572 4.64286 8.21429 3.55715 6.07144 2.48572L6.99858 1.03715C7.03497 0.967264 7.05298 0.889272 7.05091 0.810512C7.04884 0.731751 7.02676 0.654813 6.98675 0.58694C6.94674 0.519066 6.89011 0.462491 6.82221 0.42254C6.7543 0.382589 6.67734 0.360576 6.59858 0.358574H3.57001C3.486 0.356977 3.40312 0.37821 3.33023 0.42001C3.25733 0.46181 3.19715 0.522609 3.15609 0.595924C3.11504 0.66924 3.09465 0.752323 3.0971 0.836316C3.09955 0.920309 3.12475 1.00206 3.17001 1.07286L3.92858 2.48572C1.78572 3.57143 0.714294 4.65715 0.714294 6.8C0.714294 8.75715 2.50001 9.64286 5.00001 9.64286Z" stroke="#fff" stroke-width="0.595238" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M3.92859 2.5C4.04621 2.67635 4.20553 2.82095 4.39244 2.92095C4.57934 3.02096 4.78804 3.07328 5.00002 3.07328C5.21199 3.07328 5.42069 3.02096 5.6076 2.92095C5.7945 2.82095 5.95383 2.67635 6.07145 2.5" stroke="#fff" stroke-width="0.595238" stroke-linecap="round" stroke-linejoin="round"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_2211_39">
                            <rect width="10" height="10" fill="white"/>
                        </clipPath>
                    </defs>
                </svg>
        },
        {
            tab: "Select Skip",
            icon: <svg width={20} height={20} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 3h15v13H1z" />
                    <path d="M16 8h4l3 3v5h-7V8z" />
                    <path d="M5.5 16a2.5 2.5 0 1 0 0 5 2.5 2.5 0 1 0 0-5z" />
                    <path d="M18.5 16a2.5 2.5 0 1 0 0 5 2.5 2.5 0 1 0 0-5z" />
                </svg>
        },
        {
            tab: "Permit Check",
            icon: <svg width={20} height={20} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
        },
        {
            tab: "Choose Date",
            icon: <svg width={20} height={20} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <rect width={18} height={18} x={3} y={4} rx={2} ry={2} />
                    <path d="M16 2v4" />
                    <path d="M8 2v4" />
                    <path d="M3 10h18" />
                </svg>
        },
        {
            tab: "Payment",
            icon: <svg width={20} height={20} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <rect width={22} height={16} x={1} y={4} rx={2} ry={2} />
                    <path d="M1 10h22" />
                </svg>
        },
    ]

    const tabItems = tabs.map((item:TabType,index:number)=>{
        const isLast = index === tabs.length - 1;

        return (
            <>
                <TabItem tab={item.tab} key={index} isActive={activeTab <= index}>
                    {item.icon}
                </TabItem>
                {!isLast && <div className=" w-full max-w-[100px] h-0.5 bg-primary rounded mt-5"></div>}
            </>
        )
    })
    return (
        <nav className="mb-12 xl:mb-25 flex justify-between">
            {tabItems}
        </nav>
    );
}

export default TopTab;
