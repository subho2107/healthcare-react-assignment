import React from "react";
import TestLogo from '../../assets/testLogo.svg';
import Home from '../../assets/home.svg'
import Group from '../../assets/group.svg';
import Calendar from '../../assets/calendar.svg';
import Chat from '../../assets/chat.svg';
import Card from '../../assets/credit_card.svg';
import Icon from "../Icon/Icon";
import Doctor from '../../assets/doctor.png';
import Settings from '../../assets/settings.svg';
import ThreeDots from '../../assets/more_vert.svg';
export default function Navbar() {
    return (
       <div className="w-fit rounded-full bg-white h-[72px] m-[18px] items-center px-8 py-3 grid grid-cols-[2fr_15fr_4fr]">
            <img src={TestLogo} alt="Test Logo" className="h-12 w-52"/>
            <div className="navigating-icons flex mx-auto">
                <Icon icon={Home} text="Home"/>
                <Icon icon={Group} text="Patients" selected={true}/>
                <Icon icon={Calendar} text="Schedule"/>
                <Icon icon={Chat} text="Message"/>
                <Icon icon={Card} text="Transaction"/>
            </div>
            <div className="flex justify-end">
                <div className="flex space-x-4 pr-3 border-r-2 border-solid border-gray-100">
                    <img src={Doctor} alt="Doctor" className="h-11 w-11 rounded-full"/>
                    <div className="flex flex-col">
                        <span className="font-bold text-sm">Dr. Jose Simmons</span>
                        <span className="text-sm">General Practitioner</span>
                    </div>
                </div>
                <div className="flex ml-3 justify-center items-center">
                    <img src={Settings} alt="Settings" className="h-5 w-5"/>
                    <img src={ThreeDots} alt="Three Dots" className="h-5 w-5"/>
                </div>
            </div>
       </div>
    );
}