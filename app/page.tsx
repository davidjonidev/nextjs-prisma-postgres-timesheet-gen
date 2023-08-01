// import Image from "next/image";
import { prisma } from "@/lib/prisma";
import { TimesheetItem } from "@/components/TimesheetItem";

function getTimesheets() {
    return prisma.timesheet.findMany();
}

export default async function Home() {
    const timesheets = await getTimesheets();
    console.log(timesheets);

    return (
        <main className="container mx-auto min-h-screen p-24">
            <header className="flex flex-col items-center gap-4 mb-10">
                <h1 className="text-4xl font-bold uppercase tracking-wide">
                    Timesheet Generator
                </h1>
                <hr className="bg-slate-700 h-1 w-full rounded" />
            </header>
            <section className="flex flex-col gap-10">
                <ul className="flex  flex-col gap-2">
                    <li className="cursor-pointer bg-slate-700 text-white hover:bg-slate-500 py-2 px-4 rounded">
                        Data coming soon
                    </li>
                    <li className="cursor-pointer bg-slate-700 text-white hover:bg-slate-500 py-2 px-4 rounded">
                        Data coming soon
                    </li>
                    {timesheets.map((timesheet) => (
                        <TimesheetItem key={timesheet.id} {...timesheet} />
                    ))}
                </ul>
            </section>
        </main>
    );
}
