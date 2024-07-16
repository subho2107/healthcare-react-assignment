import React from "react";
import ArrowDown from "../../assets/ArrowDown.svg";
import ArrowUp from "../../assets/ArrowUp.svg";

export default function CustomLegend({ title, color, latestData, pressureLevels }) {

    return (
        <div className="flex flex-col gap-2 p-4 justify-start">
            <div className="flex items-center">
                <div className="rounded-full mr-2 h-4 w-4" style={{backgroundColor: color}}></div>
                <span className="text-sm font-medium">{title}</span>
            </div>
            <span className="font-bold text-[22px]">{latestData}</span>
            <div className="flex gap-2">
                {pressureLevels?.toLowerCase() === 'higher than average' ? <img src={ArrowUp} alt="arrow-up" height='10' width='10'/> : <img src={ArrowDown} alt="arrow-down" height='10' width='10'/>}
                <span className="text-sm">{pressureLevels}</span>
            </div>
        </div>
    );

}
