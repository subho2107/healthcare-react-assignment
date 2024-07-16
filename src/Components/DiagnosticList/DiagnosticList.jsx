import React from "react";

export default function DiagnosticList({diagnostics}) {
    return (
        <div className="bg-white h-fit p-5 rounded-lg">
            <h1 className="text-2xl font-bold mb-10">Diagnostic List</h1>
            <div className="">
                <div className="headers grid grid-cols-[14rem_21rem_7rem] pl-8 bg-gray-50 rounded-full p-2 w-fit h-fit">
                    <h2 className="text-sm font-semibold">Problem/Diagnosis</h2>
                    <h2 className="text-sm font-semibold">Description</h2>
                    <h2 className="text-sm font-semibold">Status</h2>
                </div>
                <div className="max-h-36 overflow-y-scroll">
                    {diagnostics?.map((diagnostic, index) => (
                        <div key={index} className="grid grid-cols-[14rem_21rem_7rem] pr-0 pl-8 p-2 w-fit h-fit">
                            <p className="text-sm">{diagnostic?.name}</p>
                            <p className="text-sm">{diagnostic?.description}</p>
                            <p className="text-sm">{diagnostic?.status}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}