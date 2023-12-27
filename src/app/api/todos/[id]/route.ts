import { revalidateTag } from "next/cache";
import { NextRequest } from "next/server";
import { supabase } from "@/utils/database";

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {

    const id: number = Number(params.id)

    const { error, status, statusText } = await supabase
        .from('todos')
        .delete()
        .eq('id', id)

    revalidateTag('todo')

    return Response.json({ status: status, error, statusText })
}

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {

    const { completed } = await request.json()

    const id: number = Number(params.id)

    const { error, status, statusText } = await supabase
        .from('todos')
        .update({ completed: completed })
        .eq('id', id)

    revalidateTag('todo')

    return Response.json({ error, status, statusText })
}