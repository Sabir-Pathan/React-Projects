import React from "react";

function ColorBtn ({btnColor , text , btnHandler}){

return <>
<button onClick={()=>btnHandler(btnColor)} className={`${btnColor} px-4 py-1 rounded-3xl text-white font-bold shadow-2xl`}>{text}</button>
</>
}
export default ColorBtn