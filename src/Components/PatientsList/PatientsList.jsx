import React from "react";
import Search from '../../assets/search.svg';
import Patient from "../Patient/Patient";
export default function PatientsList({users, hardCodedSelectedUser}) {
    return (
        <div className="bg-white rounded-lg py-7 m-[18px] w-96 flex flex-col">
            <div className="flex items-center justify-between px-8">
                <span className="font-bold text-2xl">Patients</span>
                <img src={Search} alt="Search" className="h-[54px] w-[18px] justify-end"/>
            </div>
            <div className="max-h-[54rem] overflow-scroll my-5">
                <ul>
                    {
                        users?.map((user) => (
                           <li key={user.phone_number}><Patient user={user} isSelected={hardCodedSelectedUser === user.name}/></li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
}