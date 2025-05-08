"use client";

import Image from "./image";

export default function ImageList() {
    return (
        <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <Image />
            <Image />
        </section>
    );
}
