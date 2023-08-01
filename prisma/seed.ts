import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const alice = await prisma.user.upsert({
        where: { email: "alice@prisma.io" },
        update: {},
        create: {
            name: "Alice",
            email: "alice@prisma.io",
            timesheets: {
                create: {
                    clientName: "Dash Media",
                    employeeName: "Alice Keys",
                    position: "Project Manager",
                    supervisor: "Dave Jones",
                    workerCategory: "Front Desk",
                    weekEnding: "4th April 23",
                    days: {
                        create: [
                            {
                                name: "Monday",
                                start: "10:00",
                                end: "17:00",
                                breaks: 1.5,
                            },
                            {
                                name: "Tuesday",
                                start: "12:00",
                                end: "20:00",
                                breaks: 3,
                            },
                        ],
                    },
                },
            },
        },
    });
    const shane = await prisma.user.upsert({
        where: { email: "shane@prisma.io" },
        update: {},
        create: {
            name: "Shane",
            email: "shane@prisma.io",
            timesheets: {
                create: {
                    clientName: "Aldi Warehouse",
                    employeeName: "Shane Bowen",
                    position: "Picker Packer",
                    supervisor: "Rhys Evans",
                    workerCategory: "Dispensable",
                    weekEnding: "20 July 23",
                    days: {
                        create: [
                            {
                                name: "Monday",
                                start: "08:00",
                                end: "14:00",
                                breaks: 2,
                            },
                            {
                                name: "Tuesday",
                                start: "09:00",
                                end: "17:00",
                                breaks: 1.5,
                            },
                        ],
                    },
                },
            },
        },
    });
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
