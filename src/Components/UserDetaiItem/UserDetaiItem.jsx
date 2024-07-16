import React from "react";

export default function UserDetaiItem({icon, itemType, value}) {
    return (
        <div className="gap-2 grid grid-cols-[1fr_5fr]">
            <img src={icon} height="42" width="42"/>
            <div className="flex flex-col">
                <span className="text-sm">{itemType}</span>
                <span className="text-sm font-semibold">{value}</span>
            </div>
        </div>
    );
}