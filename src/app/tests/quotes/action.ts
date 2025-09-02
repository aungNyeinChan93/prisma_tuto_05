'use server'

import prisma from "@/db/prisma-db";
import { revalidatePath } from "next/cache";


export async function deleteQuote(formData: FormData) {
    const id = formData.get('id') as string | number | undefined;

    if (!id) {
        console.log('fail');

        return
    }
    await prisma.qoute.delete({ where: { id: Number(id) } });
    console.log('success');
    revalidatePath('/tests/quotes')
    return
}