import React, { useState } from "react";
import Cards from "./Components/Cards";
import Form from "./Components/Form";

function App() {
  const people = [
    {
      image:
        "https://images.unsplash.com/photo-1641320485649-7063cd9f4a79?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cG9ydHJhdGV8ZW58MHx8MHx8fDA%3D",
      name: "Priya Sharma",
      email: "priya.sharma@y.com",
      cityName: "Delhi",
      Added: false,
    },
    {
      image:
        "https://images.unsplash.com/photo-1652541187120-45c9d718b86e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cG9ydHJhdGV8ZW58MHx8MHx8fDA%3D",
      name: "Rahul Verma",
      email: "rahul.verma@y.com",
      cityName: "Bengaluru",
      Added: true,
    },
  ];

  const [data, setData] = useState(people);

  function handleForm(newdata) {
    setData((prevData) => [...prevData,newdata]);
  }

  function handleRemove (id){
setData(data.filter((item,index)=>id !=index))
  }

  return (
    <>
      <div className="bg-zinc-300 h-full w-full flex flex-col items-center justify-center">
        <Cards data={data} handleRemove={handleRemove}/>
        <Form handleForm={handleForm} />
      </div>
    </>
  );
}

export default App;
 