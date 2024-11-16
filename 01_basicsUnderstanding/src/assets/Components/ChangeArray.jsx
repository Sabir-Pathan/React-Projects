import React, { useState } from "react";

function ChangeArray (){
let [val , setVal] = useState ([1,2,3,4,5]);
return (
    <div className="bg-zinc-200 w-[20vw] h-[50vh] p-5 ">
        {val.map((item,index)=><h1 key={index}>{item}</h1>)}
        <button onClick={()=>setVal([...val, val[val.length-1]+1])} className="bg-blue-700 text-white py-1 px-3 rounded">Add Number</button>            
    </div>
)
   
}

export default ChangeArray