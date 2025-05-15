import React,{useState,useEffect} from "react";
import H1 from "../components/UI/H1";
import SkipList from "../components/SkipList/SkipList";
import type { SkipItemType } from "../types/skip";
import SelectedSkipPanel from "../components/SelectedSkip/SelectedSkipPanel";
import { fetchSkips } from "../utils/api";
import Loader from "../components/Loader/Loader";
import Error from "../components/Error/Error";

const SkipSelectPage: React.FC = ()=>{
    const [skips, setSkips] = useState<SkipItemType[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
      
    useEffect(() => {
        fetchSkips()
          .then(data => setSkips(data))
          .catch(() => setError('Failed to fetch skips.'))
          .finally(() => setIsLoading(false));
      }, []);


    if( isLoading )
        return <Loader></Loader> 

    if (error)
        return <Error></Error>
    
    return (
        <>
            <div>
                <header className=" mb-10">
                    <H1>Available Skip Sizes</H1>
                    <p className="text-gray-400">Select the skip size that best suits your needs </p>
                </header>
                <SkipList skips={skips}></SkipList>
            </div>
            <SelectedSkipPanel></SelectedSkipPanel>
        </>
    )
}

export default SkipSelectPage;