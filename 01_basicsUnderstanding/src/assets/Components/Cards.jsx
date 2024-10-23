import React from "react";

function Cards (){
    const products = [
        {
          Productcode: "P001",
          Product_Image: "https://images.unsplash.com/photo-1581613856477-f65208436a48?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8RG9vcnxlbnwwfHwwfHx8MA%3D%3D",
          Product_Name: "Door",
          Product_Description: "This is the description for Product 1",
          Stock_Qty: 100
        },
        {
          Productcode: "P002",
          Product_Image: "image2.jpg",
          Product_Name: "Window",
          Product_Description: "This is the description for Product 2",
          Stock_Qty: 50
        },
        {
          Productcode: "P003",
          Product_Image: "image3.jpg",
          Product_Name: "Fan",
          Product_Description: "This is the description for Product 3",
          Stock_Qty: 150
        },
        {
          Productcode: "P004",
          Product_Image: "image4.jpg",
          Product_Name: "Tube Light",
          Product_Description: "This is the description for Product 4",
          Stock_Qty: 200
        },
        {
          Productcode: "P005",
          Product_Image: "image5.jpg",
          Product_Name: "Mobile",
          Product_Description: "This is the description for Product 5",
          Stock_Qty: 75
        }
      ];
           
    return <>
    {products.map((Product)=>(
        <div className="w-[20%] h-[40%] py-2 px-2 bg-slate-100 rounded">
            <div className="w-[100%] h-[40%] overflow-hidden rounded">
                <img className="w-full h-full object-center" src="https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGFtYXpvbiUyMGxvZ298ZW58MHx8MHx8fDA%3D" alt="" />
            </div>
            <h1>Name</h1>
            <p className="text-xm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita perspiciatis cum aliquam atque quos. Atque impedit reiciendis architecto itaque nesciunt.</p>
            <button>Order Now</button>
        </div>

    ))}
    
    </>
}

export default Cards