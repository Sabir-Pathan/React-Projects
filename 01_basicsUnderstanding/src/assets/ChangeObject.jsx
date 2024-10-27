import React, { useState } from "react";

function ChangeObject() {
    let arr = [1,2,3,4,5]
  let [val, setVal] = useState({ Name: "Sabir", isBanned: false });

  return (
    <>
      <div className="m-10">
        <h1>Name : {val.Name}</h1>
        <h1 className={`${val.isBanned ? "text-green-700" : "text-red-700"}`}>
          Banned : {val.isBanned.toString()}
        </h1>
        <button
          onClick={() => setVal({ ...val, isBanned: !val.isBanned })}
          className={`bg-zinc-500 px-3 py-1 rounded ${
            val.isBanned ? "bg-green-700" : "bg-red-500"
          } font-bold  text-white`}
        >
          Change Banned
        </button>
        {console.log(arr.length)}
        
      </div>
    </>
  );
}

export default ChangeObject;
