import React from "react";
import DownloadIcon from "../../assets/download.svg";
export default function LabResults({labResults}) {
    return (
        <div className="bg-white p-4 w-full mt-5 rounded-lg">
            <h1 className="text-2xl font-bold mb-6">Lab Results</h1>
            <ul className="max-h-48 overflow-y-scroll">
                {
                    labResults?.map((result, index) => {
                        return(
                            <li key={index}>
                                <div className="grid grid-cols-[5fr_1fr] p-2 py-4">
                                    <span className="text-sm">{result}</span>
                                    <img src={DownloadIcon} alt="download" height='20' width='20'/>
                                </div>
                            </li>
                        );
                    })
                }
            </ul>
        </div>
    );
}