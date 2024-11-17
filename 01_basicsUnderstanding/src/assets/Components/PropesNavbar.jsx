import React from "react";

function PropesNavbar({data}) {
  return (
    <>
      <div className="w-[70vw] bg-zinc-300 flex justify-between py-3 rounded px-5 items-center">
        <h1>Home</h1>
        <div className="bg-zinc-100 flex py-1 px-3 rounded bg-gray-500 text-white font-bold gap-2">
          <h1 >Friends : </h1>
          <h1 className="text-[rgb(150,250,150)]">{data.filter(item=>item.friendStatus).length}</h1>
        </div>
      </div>
    </>
  );
}

export default PropesNavbar;
