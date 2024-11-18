import React from "react";

function Form (){

    return<>
    <div className="flex gap-3 ">

    <input className="outline-none border-solid border-2 rounded-md px-1 border-blue-500" type="text" placeholder="Image Src" />
    <input className="outline-none border-solid border-2 rounded-md px-1 border-blue-500" type="text" placeholder="Name" />
    <input className="outline-none border-solid border-2 rounded-md px-1 border-blue-500" type="email" placeholder="Email" />
    <input className="outline-none border-solid border-2 rounded-md px-1 border-blue-500" type="text" placeholder="City Name" />
    <button className="bg-blue-500 text-white px-3 py-1 rounded-md" type="submite">Submite</button>
    </div>
    </>
}

export default Form;