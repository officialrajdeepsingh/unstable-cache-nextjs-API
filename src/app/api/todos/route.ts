import { supabase } from "@/utils/database";

import { type NextRequest } from 'next/server'
import { revalidateTag } from "next/cache";

export async function GET(request: NextRequest) {

    const { data, error, status } = await supabase
        .from('todos')
        .select()

    return Response.json({ todos: data, error, status })
}


export async function POST(request: NextRequest) {

    const { todo } = await request.json()

    const { error, status, statusText } = await supabase
        .from('todos')
        .insert({ todo: todo })

    revalidateTag('todo')

    return Response.json({ error, status, statusText })
}