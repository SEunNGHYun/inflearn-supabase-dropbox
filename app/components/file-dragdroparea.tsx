"use client";

import { Button } from "@material-tailwind/react";
import { UploadFile } from "actions/storageActions";
import { queryClient } from "app/config/ReactQueryClientProvirer";
import { useMutation } from "@tanstack/react-query";
import React from "react";

export default function FileDragDropArea() {
    const fileRef = React.useRef<null>();
    const uploadImageMutation = useMutation({
        mutationFn: UploadFile,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["images"],
            });
        },
    });

    return (
        <form
            onSubmit={async (e) => {
                e.preventDefault();
                const file = fileRef.current?.files?.[0];
                if (file) {
                    const formData = new FormData();
                    formData.append("file", file);

                    const result = await uploadImageMutation.mutate(formData);

                    console.log(result);
                }
            }}
            className="w-full
            py-20
            flex flex-col items-center justify-center border-2 border-dotted border border-orange-300 rounded-lg"
        >
            <input ref={fileRef} type="file" className="" />
            <Button loading={uploadImageMutation.isPending} type="submit">
                파일 업로드
            </Button>
        </form>
    );
}
