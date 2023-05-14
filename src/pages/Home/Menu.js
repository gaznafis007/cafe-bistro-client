import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "./Card";

const Menu = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/shortmenu")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setItems(data);
      });
  }, []);
  return (
    <div className="my-4">
      <h2 className="text-5xl text-amber-950 text-center font-bold">Menu</h2>
      <div className="grid grid-cols-3 mx-8 mt-4 gap-4">
        {items.map((item) => (
          <Card key={item._id} item={item}></Card>
        ))}
      </div>
      <div className="flex my-2 justify-center">
        <Link to="/menu" className="btn bg-amber-950 my-4">
          View full menu
        </Link>
      </div>
    </div>
  );
};

export default Menu;
