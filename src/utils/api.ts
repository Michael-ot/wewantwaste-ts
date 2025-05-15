import type { SkipItemType } from "../types/skip";
const baseUrl = import.meta.env.VITE_API_BASE_URL;

export const fetchSkips = async (): Promise<SkipItemType[]> => {
    const res = await fetch(`${baseUrl}/skips/by-location?postcode=NR32&area=Lowestoft`);
    const data = await res.json();
    return data;
};