import React from "react";

function PropesCard({ Values,btnHandler,index }) {
  let { image, name, profession, cityName, friendStatus} = Values;
  return (
    <div className="w-[15vw] h-[30vh] flex items-center justify-center flex-col bg-zinc-300 rounded">
      <div className="w-[50%] h-[45%] m-1">
        <img
          className="w-full h-full overflow-hidden object-cover rounded-full"
          src={image}
          alt=""
        />
      </div>
      <div className="w-[100%] h-[55%] bg-zinc-100 flex flex-col px-2 overflow-hidden">
        <h1 className="font-bold">{name}</h1>
        <h1 className="text-sm text-blue-500">{profession}</h1>
        <h1>{cityName}</h1>
        <button
          onClick={()=>btnHandler(index)}
          className={` ${friendStatus?"bg-blue-600":"bg-red-600"} text-white px-3 py-1 font-sm rounded mt-3`}
        >
          {friendStatus ? 'Friends' : 'Add Friends'}
        </button>
      </div>
    </div>
  );
}

export default PropesCard;
