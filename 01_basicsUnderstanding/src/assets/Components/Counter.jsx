import React, { useState } from "react";

function Counter ( ){
let [val , setVal] = useState(1)
    return (
        <>
        <h1 className="m-5">{val}</h1>
        <button onClick={()=>setVal(val+1)} className="bg-zinc-400 py-2 px-3 rounded">Counter</button>
        </>
    )
}

export default Counter