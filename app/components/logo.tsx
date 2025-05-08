"use client";

import Image from "next/image";

export default function Logo() {
    return (
        <div className="flex  gap-2 items-center">
            <Image
                src="/images/dropbox_icon.png"
                alt="dropbox-logo"
                width={30}
                height={30}
                className="w-10! h-auto!"
            />
            <span className="text-lg font-bold">Mini Box</span>
        </div>
    );
}
