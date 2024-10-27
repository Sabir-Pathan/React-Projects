import React, { useState } from "react";

function ChangeArray (){
let [val , setVal] = useState ([1,2,3,4,5]);

return (
    <div className="p-10">
        {val.map(item=><h1>{item}</h1>)}
        <button onClick={()=>setVal(()=>val.filter ((item , index)=>item != 2))} className="bg-blue-500 py-1 px-3 rounded text-white font-bold">Change</button>
        <div>

        </div>
    </div>
)
   
}

export default ChangeArray