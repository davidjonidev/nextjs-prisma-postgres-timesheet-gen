"use client";

type TimesheetItemProps = {
    id: string;
    clientName: string;
    employeeName: string;
    position: string;
    supervisor: string;
    workerCategory: string;
    weekEnding: string;
};

export function TimesheetItem({
    id,
    clientName,
    employeeName,
    position,
    supervisor,
    workerCategory,
    weekEnding,
}: TimesheetItemProps) {
    return (
        <li className="flex gap-1 items-center">
            <p>{clientName}</p>
            <p>{employeeName}</p>
            <p>{position}</p>
            <p>{supervisor}</p>
            <p>{workerCategory}</p>
            <p>{weekEnding}</p>
        </li>
    );
}
