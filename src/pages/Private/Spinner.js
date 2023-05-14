import React from "react";

const Spinner = () => {
  return (
    <div
      className="radial-progress animate-spin text-primary p-4"
      style={{ "--value": 70 }}
    ></div>
  );
};

export default Spinner;
