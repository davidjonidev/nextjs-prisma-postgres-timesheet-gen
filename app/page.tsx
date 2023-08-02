// import Image from "next/image";
import { prisma } from "@/lib/prisma";
import TimesheetForm from "@/components/TimesheetForm";

async function getTimesheets() {
    const timesheets = await prisma.timesheet.findMany({
        include: {
            days: true,
        },
    });

    return timesheets;
}

export default async function Home() {
    const timesheets = await getTimesheets();
    // console.log(timesheets);

    return (
        <main className="container mx-auto min-h-screen p-24">
            <header className="flex flex-col items-center gap-4 mb-10">
                <h1 className="text-4xl font-bold uppercase tracking-wide">
                    Timesheet Generator
                </h1>
                <hr className="bg-slate-700 h-1 w-full rounded" />
            </header>
            <section className="flex flex-col gap-10">
                <TimesheetForm />
            </section>
        </main>
    );
}
