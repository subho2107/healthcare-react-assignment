import React from "react";
import ArrowDown from "../../assets/ArrowDown.svg";
import ArrowUp from "../../assets/ArrowUp.svg"; 
export default function Vitals({icon, vitalType, value, level, color}) {
    return (
        <div style={{backgroundColor: color}} className="gap-4 w-full h-fit rounded-lg p-4">
            <div className="icon bg-white rounded-full w-fit h-fit mb-2">
                <img src={icon}></img>
            </div>
            <div className="flex flex-col gap-2 mb-6">
                <span className="text-base">{vitalType}</span>
                <span className="text-3xl font-bold">{value}</span>
            </div>
            <div className="flex gap-2 items-center">
                <div>
                    {level?.toLowerCase() === 'higher than average' && <img src={ArrowUp} alt="arrow-up" height='10' width='10'/> }
                    {level?.toLowerCase() === 'lower than average' && <img src={ArrowDown} alt="arrow-down" height='10' width='10'/>}
                </div>
                <span className="text-sm">{level}</span>
            </div>
        </div>
    );
}