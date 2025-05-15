import type { SkipItemType } from "../types/skip";


export const fetchSkips = async (): Promise<SkipItemType[]> => {
    const res = await fetch('https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft');
    const data = await res.json();
    return data;
};