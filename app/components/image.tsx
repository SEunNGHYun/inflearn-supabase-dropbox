"use client";

import Image from "next/image";
import { IconButton } from "node_modules/@material-tailwind/react";

export default function DropboxImage() {
    return (
        <div className="relative w-full flex flex-col p-4 border border-gray-100">
            <div className="absolute top-4 right-4">
                <IconButton color="red" onClick={() => {}}>
                    <i className="fas fa-trash" />
                </IconButton>
            </div>
            <Image
                width={"300"}
                height={"100"}
                className="w-fit! h-auto! aspect-square rounded-xl "
                alt="cat"
                src={"/images/funny-cat.png"}
            />

            <div>title</div>
        </div>
    );
}
