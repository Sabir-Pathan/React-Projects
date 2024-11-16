import ChangeObject from "./assets/ChangeObject";
import ChangeArray from "./assets/Components/ChangeArray";
import Cards from "./assets/Components/Cards";
import Counter from "./assets/Components/Counter";
import Propes from "./assets/Components/Propes";
import PropesCard from "./assets/Components/PropesCard";
import { useState } from "react";

function App() {
  const people = [
    {
      image:
        "https://images.unsplash.com/photo-1652018145149-b61a9566b245?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fHBvcnRyYXRlfGVufDB8fDB8fHww",
      name: "Aarav Mehta",
      profession: "Software Engineer",
      cityName: "Mumbai",
      friendStatus: false,
    },
    {
      image:
        "https://images.unsplash.com/photo-1641320485649-7063cd9f4a79?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cG9ydHJhdGV8ZW58MHx8MHx8fDA%3D",
      name: "Priya Sharma",
      profession: "Doctor",
      cityName: "Delhi",
      friendStatus: false,
    },
    {
      image:
        "https://images.unsplash.com/photo-1652541187120-45c9d718b86e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cG9ydHJhdGV8ZW58MHx8MHx8fDA%3D",
      name: "Rahul Verma",
      profession: "Teacher",
      cityName: "Bengaluru",
      friendStatus: true,
    },
    {
      image:
        "https://images.unsplash.com/photo-1663402230048-979bf99a9f44?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHBvcnRyYXRlfGVufDB8fDB8fHww",
      name: "Sneha Singh",
      profession: "Graphic Designer",
      cityName: "Chennai",
      friendStatus: false,
    },
    {
      image:
        "https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBvcnRyYXRlJTIwbWFufGVufDB8fDB8fHww",
      name: "Vikram Desai",
      profession: "Entrepreneur",
      cityName: "Hyderabad",
      friendStatus: true,
    },
  ];

  let [data, setData] = useState(people);

function changeStatus (cardIndex){
  return setData(prev=>prev.map((item , index)=>{
if(cardIndex===index){
 return {...item, friendStatus: !item.friendStatus}
}
    return item;
  }))
}

 
  return (
    <>
      {/* <Cards />  */}
      {/* <Counter/> */}

      {/* <ChangeObject /> */}

      {/* <ChangeArray /> */}

      {/* <Propes text='Show More' colorName="bg-blue-500" />
    <Propes text='No More' colorName="bg-red-700" />
    <Propes text='Download Now' colorName="bg-green-700" /> */}

      <div className="w-[100%] h-screen bg-zinc-200 flex flex-wrap items-center justify-center gap-2 ">

        {data.map((item,index) => (
          <PropesCard Values={item} btnHandler={changeStatus} index={index}/>
        ))}
        
      </div>
    </>
  );
}

export default App;
