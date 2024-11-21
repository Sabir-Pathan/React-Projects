import React from "react";
import Card from "./Card";

function Cards({ data , handleRemove}) {
  return (
    <>
      <div className="w-full h-[50vh] max-h-[50vh] p-5 flex items-center justify-center gap-4">
        {data.map((item, index) => (
          <Card key={index} item={item} id={index} handleRemove={handleRemove} />
        ))}
      </div>
    </>
  );
}

export default Cards;
