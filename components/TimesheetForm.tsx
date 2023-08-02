"use client";

import { useTransition } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { formActionClient } from "@/lib/formActionClient";

const schema = yup
    .object({
        clientName: yup.string().required(),
        weekDay: yup.string().required(),
    })
    .required();
type FormData = yup.InferType<typeof schema>;

export default function TimesheetForm() {
    const [isPending, startTransition] = useTransition();
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<FormData>({
        resolver: yupResolver(schema),
    });

    const onSubmit = handleSubmit((data: FormData) => {
        startTransition(() => {
            formActionClient(data);
        });
    });

    const { clientName, weekDay } = watch();

    // const onSubmit = (data: FormData) => console.log(data);

    return (
        <div className="flex flex-col">
            <div className="flex flex-col p-4 bg-slate-200 rounded">
                <table className="table-fixed">
                    <tbody>
                        <tr>
                            <td className="w-1/2 uppercase tracking-wide text-gray-700 text-sm font-bold text-right p-2">
                                Client Name
                            </td>
                            <td className="w-1/2 uppercase tracking-wide text-gray-700 text-sm font-bold text-left p-2">
                                {clientName ?? "Waiting..."}
                            </td>
                        </tr>
                        <tr>
                            <td className="w-1/2 uppercase tracking-wide text-gray-700 text-sm font-bold text-right p-2">
                                Day
                            </td>
                            <td className="w-1/2 uppercase tracking-wide text-gray-700 text-sm font-bold text-left p-2">
                                {weekDay ?? "Waiting..."}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <form onSubmit={onSubmit} className="w-full">
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label
                            className="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2"
                            htmlFor="clientName"
                        >
                            Client Name
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            {...register("clientName")}
                        />
                        <p>{errors.clientName?.message}</p>
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <label
                            className="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2"
                            htmlFor="weekDay"
                        >
                            Day
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            {...register("weekDay")}
                        />
                        <p>{errors.weekDay?.message}</p>
                    </div>
                </div>
                <input
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                />
            </form>
        </div>
    );
}
