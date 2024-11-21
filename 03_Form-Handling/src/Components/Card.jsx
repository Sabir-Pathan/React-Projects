import React from "react";

function Card ({item , handleRemove , id}){
    let {image , name , email,cityName ,added}=item;
    return <>
    <div className="w-[15%] h-[50%] flex items-center flex-col justify-center border-solid border-2 rounded-md px-1 border-blue-500 flex p-1">
        <div className="w-16 h-16 rounded-full overflow-hidden bg-white">
            <img className="w-full h-full object-fit " src={image} alt="" />
        </div>
        <div className="text-center">
            <h1>{name}</h1>
            <h1 className="text-zinc-500 text-sm">{email}</h1>
            <h1>{cityName}</h1>
            <button onClick={()=>handleRemove(id)} className="text-white px-4 bg-red-600 py-0.5 mt-2 rounded-md hover:bg-white hover:text-black">Remove it</button>
        </div>
        
    </div>
    </>
}

export default Card