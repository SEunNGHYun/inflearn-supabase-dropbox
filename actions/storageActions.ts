"use server";

import { createServerSupabaseClient } from "app/utils/supabase/server";
import { randomUUID } from "crypto";

function handleError(err) {
    console.log(err);

    throw new Error(err);
}

export async function UploadFile(formData: FormData) {
    const supabase = await createServerSupabaseClient();
    const file = formData.get("file") as File;
    const filePath = randomUUID() + "-" + file.name;

    const { data, error } = await supabase.storage
        .from("minibox")
        .upload(filePath 
            , file, { upsert: true });

    if (error) handleError(error);

    return data;
}

export async function SearchFile(search: string) {
    const supabase = await createServerSupabaseClient();

    const { data, error } = await supabase.storage
        .from("minibox")
        .list(null, { search });

    if (error) handleError(error);

    return data;
}
