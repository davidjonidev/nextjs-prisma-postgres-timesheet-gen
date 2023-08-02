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
        <div className="cursor-pointer rounded flex flex-col gap-2 justify-evenly">
            <h4>{name}</h4>
            <table className="table-fixed border">
                <tbody>
                    <tr className="border-b">
                        <td className="whitespace-nowrap border-r font-bold">
                            Start Time
                        </td>
                        <td className="whitespace-nowrap border-r">{start}</td>
                        <td className="whitespace-nowrap border-r font-bold">
                            End Time
                        </td>
                        <td className="whitespace-nowrap border-r">{end}</td>
                        <td className="whitespace-nowrap border-r font-bold">
                            Breaks
                        </td>
                        <td className="whitespace-nowrap border-r">{breaks}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
