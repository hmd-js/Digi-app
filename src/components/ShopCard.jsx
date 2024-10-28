import { useState } from "react";

const ShopCard = ({ disc, price, image }) => {

  const [display,setDisplay] = useState(false)

  


  return (
    <>
    <div onClick={()=>setDisplay(!display)} className=" bg-white border-2  border-black w-40 h-56 cursor-pointer  flex flex-col  justify-between p-0.5 rounded-md divide-y-2 divide-gray-400   ">
      <div   className="w-full h-full flex items-center">
        <img className="" src={image}  alt="img" />
      </div>
      <div className="flex  justify-between p-2 gap-3 ">
        <div className="bg-red-600 w-12 h-6 rounded-full text-center text-white  ">
          <p className="">{disc}%</p>
        </div>
        <p> {price}$</p>
      </div>
    </div>
    <div   className={` ${display?"":"hidden"} absolute top-48 w-100% h-full flex items-center`}>
        <img className="" src={image}  alt="img" />
      </div>
    </>
  );
};

export default ShopCard;
