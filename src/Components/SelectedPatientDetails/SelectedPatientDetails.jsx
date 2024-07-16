import React from "react";
import DiagnosisHistory from "../DiagnosisHistory/DiagnosisHistory";
import DiagnosticList from "../DiagnosticList/DiagnosticList";
import UserDetails from "../UserDetails/UserDetails";
import LabResults from "../LabResults/LabResults";

export default function SelectedPatientDetails({user}) {
    return (
        <div className="grid grid-cols-[4.5fr_2fr]">
            <div className="grid grid-rows-[3fr_1.3fr] h-fit mt-5 mr-8">
                <DiagnosisHistory user={user}/>
                <DiagnosticList diagnostics={user?.diagnostic_list}/>
            </div>
            <div className="mt-[1.1rem] mr-8 h-fit grid grid-rows-[3fr_1.3fr]">
                <UserDetails user={user}/>
                <LabResults labResults={user?.lab_results}/>
            </div>
        </div>
    );
}