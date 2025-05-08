"use client";

export default function FileDragDropArea() {
    return (
        <section
            className="w-full
            py-20
            flex flex-col items-center justify-center border-2 border-dotted border border-orange-300 rounded-lg"
        >
            <input type="file" className="" />
            <p>파일을 여기에다가 끌어다놓거나 업로드해주세요</p>
        </section>
    );
}
