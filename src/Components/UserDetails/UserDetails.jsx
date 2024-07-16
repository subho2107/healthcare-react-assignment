import React, { useEffect, useState } from "react";
import UserDetaiItem from "../UserDetaiItem/UserDetaiItem";
import Calendar from "../../assets/BirthIcon.svg";
import FemaleIcon from "../../assets/FemaleIcon.svg";
import MaleIcon from "../../assets/MaleIcon.svg";
import PhoneIcon from "../../assets/PhoneIcon.svg";
export default function UserDetails({user}) {
    const [formattedDob, setFormattedDob] = useState('');
    const getFormattedDOB = (dob) => {
        const [month, day, year] = dob?.split("/");
        if (!day || !month || !year || isNaN(day) || isNaN(month) || isNaN(year)) {
            return;
        }
        const date = new Date(`${year}-${month}-${day}`);
        const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
        ];
        return `${monthNames[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
    }
    useEffect(() => {
        if(user){
            const formattedDate = getFormattedDOB(user?.date_of_birth);
            setFormattedDob(formattedDate);
        }
    }, [user]);
    return (
        <div className="bg-white p-8 items-center justify-center rounded-lg grid grid-rows-[5fr_1.3fr_repeat(4,_1fr)_2fr] grid-cols-1 gap-6">
            <div className="flex justify-center">
                <img src={user?.profile_picture} alt="profile" className="rounded-full w-52 h-52"/>
            </div>
            <h1 className="text-2xl font-bold flex justify-center">{user?.name}</h1>
            <UserDetaiItem icon={Calendar} itemType="Date of Birth" value={formattedDob}/>
            <UserDetaiItem icon={user?.gender?.toLowerCase() === 'female' ? FemaleIcon : MaleIcon} itemType="Gender" value={user?.gender}/>
            <UserDetaiItem icon={PhoneIcon} itemType="Contact Info." value={user?.phone_number}/>
            <UserDetaiItem icon={PhoneIcon} itemType="Emergency Contacts" value={user?.emergency_contact}/>
            <button className="bg-teal-400 p-2 rounded-lg text-sm font-semibold">Show All Information</button>
        </div>
    );
}