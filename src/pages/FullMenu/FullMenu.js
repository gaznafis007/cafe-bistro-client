import React, { useEffect, useState } from "react";
import CardItem from "./CardItem";

const FullMenu = () => {
  const [fullItems, setFullItems] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/menu")
      .then((res) => res.json())
      .then((data) => {
        console.log();
        setFullItems(data);
      });
  }, []);
  return (
    <div className="min-h-screen">
      <h1 className="text-5xl text-center text-amber-950 capitalize font-semibold">
        watch full menu
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:w-3/4 mx-4 lg:mx-auto my-6">
        {fullItems.map((item) => (
          <CardItem key={item._id} item={item}></CardItem>
        ))}
      </div>
    </div>
  );
};

export default FullMenu;
