import React from "react";

function Card (){
    return <>
    <div className="w-[15%] h-[50%] rounded flex items-center flex-col justify-center bg-blue-500 flex p-1">
        <div className="w-16 h-16 rounded-full bg-white">
            
        </div>
        <div>
            <h1>Name</h1>
            <h1>Email</h1>
            <h1>About</h1>
            <button>Remove it</button>
        </div>
        
    </div>
    </>
}

export default Card