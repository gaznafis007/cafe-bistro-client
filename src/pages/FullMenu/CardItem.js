import React from "react";

const CardItem = ({ item }) => {
  const { name, image, description, price } = item;
  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt={name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title capitalize">{name}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <button className="btn bg-amber-950">{price} BDT</button>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
