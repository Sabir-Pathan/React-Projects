import React from "react";

function Propes ({text, colorName}){

    return (
        <>
        <button className={`m-5 ${colorName} py-1 px-3 rounded text-white font-semibold`}>{text}</button>
        </>
    )

}

export default Propes