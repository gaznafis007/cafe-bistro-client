import React from "react";

const Card = ({ item }) => {
  const { name, price, image, description } = item;
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt={name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-amber-950 capitalize">
          {name}
          <div className="badge badge-primary">NEW</div>
        </h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline p-4 border-amber-950 text-amber-950 font-semibold">
            {price} BDT
          </div>
          {/* <div className="badge badge-outline">Products</div> */}
        </div>
      </div>
    </div>
  );
};

export default Card;
