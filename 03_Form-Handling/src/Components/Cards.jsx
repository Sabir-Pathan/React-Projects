import React from "react";
import Card from "./Card";

function Cards (){

    return <>
    <div className="w-full h-[50vh] bg-zinc-300 p-5 flex gap-4">
        <Card />
        <Card />
    </div>
    </>
}

export default Cards