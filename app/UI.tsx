"use client";

import Image from "next/image";
import Logo from "./components/logo";
import SearchBar from "./components/searchbar";
import FileDragDropArea from "./components/file-dragdroparea";
import ImageList from "./components/image-list";
import React from "react";

export default function UI() {
    const [searchValue, setSearchValue] = React.useState<string>("");

    return (
        <div className="w-full p-2 flex flex-col gap-4">
            <Logo />

            <SearchBar value={searchValue} setValue={setSearchValue} />

            <FileDragDropArea />

            <ImageList searchValue={searchValue} />
        </div>
    );
}
