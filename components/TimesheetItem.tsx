"use client";
import { DaysItem } from "./DaysItem";
import React from "react";

type DaysProps = {
    id: string;
    name: string;
    start: string;
    end: string;
    breaks: number;
};

type TimesheetItemProps = {
    id: string;
    clientName: string;
    employeeName: string;
    position: string;
    supervisor: string;
    workerCategory: string;
    weekEnding: string;
    days: DaysProps[];
};

export function TimesheetItem({
    id,
    clientName,
    employeeName,
    position,
    supervisor,
    workerCategory,
    weekEnding,
    days,
}: TimesheetItemProps) {
    return (
        <div className="cursor-pointer bg-slate-700 text-white py-6 px-6 rounded flex flex-col items-center gap-2">
            <div className="w-full flex justify-between gap-10 flex-wrap">
                <div className="flex flex-row items-center gap-2 min-w-[25%]">
                    <p>Client Name:</p>
                    <p className="bg-slate-500 p-2">{clientName}</p>
                </div>
                <div className="flex flex-row items-center gap-2 min-w-[25%]">
                    <p>Employee Name:</p>
                    <p>{employeeName}</p>
                </div>
                <div className="flex flex-row items-center gap-2 min-w-[25%]">
                    <p>Position:</p>
                    <p className="bg-slate-500 p-2">{position}</p>
                </div>
                <div className="flex flex-row items-center gap-2 min-w-[25%]">
                    <p>Supervisor:</p>
                    <p>{supervisor}</p>
                </div>
                <div className="flex flex-row items-center gap-2 min-w-[25%]">
                    <p>Worker Category:</p>
                    <p className="bg-slate-500 p-2">{workerCategory}</p>
                </div>
                <div className="flex flex-row items-center gap-2 min-w-[25%]">
                    <p>Week Ending:</p>
                    <p>{weekEnding}</p>
                </div>
            </div>
            {/* {days.map((day) => (
                <React.Fragment key={day.id}>
                    <div className="w-full flex justify-between">
                        <div className="bg-slate-500 p-2">{day.name}</div>
                        <div>{day.start}</div>
                        <div className="bg-slate-500 p-2">{day.end}</div>
                        <div>{day.breaks}</div>
                    </div>
                </React.Fragment>
            ))} */}
            {days.map((day) => (
                <DaysItem key={day.id} {...day} />
            ))}
        </div>
    );
}
