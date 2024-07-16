import React from "react";
import HorizThreeDots from '../../assets/more_horiz.svg';
export default function Patient({user, isSelected}) {
    return (
        <div className={`flex justify-between my-5 w-full px-8 py-4 ${isSelected ? 'bg-teal-100' : ''}`}>
            <div className="flex gap-2">
                <img src={user.profile_picture} alt={user.name} className="h-12 w-12 rounded-full"/>
                <div className="flex flex-col">
                    <span>{user.name}</span>
                    <span>{user.gender},{user.age}</span>
                </div>
                </div>
            <div className="items-center flex">
                <img src={HorizThreeDots} alt="More" className="h-1 w-[18px]"/>
            </div>
        </div>
    )
}