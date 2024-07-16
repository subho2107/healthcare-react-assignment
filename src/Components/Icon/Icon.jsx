import React from "react";

export default function Icon({icon, text, selected}) {
    return (
        <div className={`home flex items-center px-4 py-3 ${selected ? 'bg-teal-400 rounded-full' : ''}`}>
            <img src={icon} alt="Home" className="h-4 w-4 mr-2"/>
            <span className="text-sm">{text}</span>
        </div>
    );
}