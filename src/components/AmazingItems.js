import React from "react";
import glass from "../image/sunglass.webp";
import laptop from "../image/laptop.jpg";
import mobile from "../image/mobile.jpg";
import camera from "../image/camera.png";
import ShopCard from "./ShopCard";
import bag from "../image/bag.jpg";
import denim from "../image/denim.jpg";
import shoes from "../image/shoes.jpg";
import highHeel from "../image/high-heel.jpg";
import { Present } from "../image/images";

export const AmazingItems = () => {
  const items = [
    { id: 1, price: "2400", disc: "10", image: glass },
    { id: 2, price: "2460", disc: "9", image: laptop },
    { id: 3, price: "2500", disc: "50", image: mobile },
    { id: 5, price: "3550", disc: "25", image: camera },
    { id: 6, price: "4600", disc: "33", image: bag },
    { id: 7, price: "7500", disc: "45", image: denim },
    { id: 8, price: "8700", disc: "12", image: shoes },
    { id: 9, price: "6450", disc: "40", image: highHeel },
  ];
  return (
    <div className="bg-red-600 h-72 w-screen flex  items-center  gap-x-3 overflow-x-scroll p-2 rounded-md m-2 ">
      <div className="w-40 h-56 border-2 flex flex-col opacity-60 justify-between p-2 rounded-md   ">
        <p className="text-center text-white text-xl font-black  "> پیشنهاد شگفت انگیز</p>
        {Present}
        <p className="text-center text-white font-semibold  cursor-pointer  "> مشاهده همه</p>
      </div>
      {items?.map(({  id , price, disc, image }) => (
        <ShopCard key={id} disc={disc} price={price} image={image} />
      ))}
    </div>
  );
};
