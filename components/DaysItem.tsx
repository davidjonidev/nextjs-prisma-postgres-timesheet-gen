"use client";

type DaysProps = {
    id: string;
    name: string;
    start: string;
    end: string;
    breaks: number;
};
export function DaysItem({ id, name, start, end, breaks }: DaysProps) {
    return (
        <p className="cursor-pointer bg-slate-700 text-white hover:bg-slate-500 py-2 px-4 rounded flex gap-2 justify-evenly">
            <p>{name}</p>
            <p>{start}</p>
            <p>{end}</p>
            <p>{breaks}</p>
        </p>
    );
}
