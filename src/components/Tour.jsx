import React, { useState } from "react";

const Tour = ({ tour, ondelete }) => {
  const [readMore, setReadMore] = useState(true);

  return (
    <article className="single-tour">
      <img src={tour.img} alt={tour.title} />
      <footer>
        <div className="tour-info">
          <h4>{tour.title}</h4>
          <h4>{tour.price}</h4>
        </div>
        <p>{tour.description}</p>
        {/* <button>{readMore ? "Read More" : "Show Less"}</button> */}
        <button className="delete-btn" onClick={() => ondelete(tour.id)}>
          not interested
        </button>
      </footer>
    </article>
  );
};

export default Tour;
