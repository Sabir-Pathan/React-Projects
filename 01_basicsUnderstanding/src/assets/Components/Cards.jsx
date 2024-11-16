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
          Product_Image: "https://images.unsplash.com/photo-1523191339508-68905a77d5e7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHdpbmRvd3xlbnwwfHwwfHx8MA%3D%3D",
          Product_Name: "Window",
          Product_Description: "This is the description for Product 2",
          Stock_Qty: 0
        },
        {
          Productcode: "P003",
          Product_Image: "https://media.istockphoto.com/id/1255220357/photo/modern-metallic-floor-stand-electric-fan.webp?a=1&b=1&s=612x612&w=0&k=20&c=nh9H6-B2e-86BZ-E49oETmlGBtuxA3riepr6JjQz5LA=",
          Product_Name: "Fan",
          Product_Description: "This is the description for Product 3",
          Stock_Qty: 150
        },
        {
          Productcode: "P004",
          Product_Image: "https://plus.unsplash.com/premium_photo-1676638667142-721e7c99dbda?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dGlsZXN8ZW58MHx8MHx8fDA%3D",
          Product_Name: "Tiles",
          Product_Description: "This is the description for Product 4",
          Stock_Qty: 0
        }
      ];
           
    return <>


    <div className="w-full h-screen bg-zinc-500 flex items-center justify-center gap-10 flex-wrap">

{products.map((product,index)=>(
  <div key={index} className="w-[20vw] h-[40vh] bg-zinc-200 rounded overflow-hidden">
  <div className="w-[100%] h-[50%]">
    <img className="w-full h-full object-cover" src={product.Product_Image} alt="" />

  </div>
  <div className="w-full py-3 px-2">
    <h1 className="text-xl font-bold">{product.Product_Name}</h1>
    <p className="text-sm mt-2">{product.Product_Description}</p>
    <button className={`py-1 px-3 rounded mt-5 text-white font-bold ${product.Stock_Qty > 0 ? 'bg-zinc-700' :'bg-red-700' }`}> {product.Stock_Qty > 0 ? 'Stock Qty' : 'Out Of Stock'} :- <span className=""> {product.Stock_Qty}</span></button>

  </div>
</div>
))}


    </div>
    </>
}

export default Cards