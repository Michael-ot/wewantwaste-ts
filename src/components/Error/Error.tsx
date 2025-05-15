import React from "react";
import H1 from "../UI/H1";
import Button from "../UI/Button";

 const Error : React.FC = () => {

    const reload = () => {
        window.location.reload();
    }
    return (
        <div id="spinner" className="fixed inset-0 flex items-center justify-center bg-black/80 z-50" >
            <div className="text-center text-white lg:w-1/2 xl:w-1/3 px-5">
                <svg className="mx-auto" width={146} height={146} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                    <path d="M12 9v4" />
                    <path d="M12 17h.01" />
                </svg>
                <H1 className={"mt-10"}>Request Failed</H1>
                <p className="text-gray-400 mb-10">Sorry, an error occured when processing your Request</p>
                <Button onClick={() => reload()}>
                    Reload Page
                </Button>
            </div>
        </div>
    )
}

export default Error;