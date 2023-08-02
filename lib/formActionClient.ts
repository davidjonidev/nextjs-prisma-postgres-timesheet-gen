export type FormData = {
    clientName: string;
    weekDay: string;
};

export async function formActionClient(data: FormData) {
    console.log(data);
}
