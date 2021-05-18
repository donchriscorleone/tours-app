import React, { useState } from "react";
import Tour from "./Tour";
import { data } from "../data";

const Tours = () => {
  const [tours, setTours] = useState(data);
  const [isEmpty, setIsEmpty] = useState(false);

  const handleDelete = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    if (newTours.length === 0) setIsEmpty(true);
    setTours(newTours);
  };

  return (
    <>
      <div className="title">
        <h2>{isEmpty ? "No Tours Left" : "our tours"}</h2>
        {isEmpty ? (
          <button
            className="btn"
            onClick={() => {
              setTours(data);
            }}
          >
            refresh
          </button>
        ) : (
          <div className="underline"></div>
        )}
      </div>
      <div>
        {tours.map((tour) => {
          return <Tour key={tour.id} tour={tour} ondelete={handleDelete} />;
        })}
      </div>
    </>
  );
};

export default Tours;
