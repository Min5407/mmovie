import React from "react";
import "./row.style.scss";
import { fetchRowMovies, imageUrl } from "../../api";

const Row = ({ title, data }) => {
  console.log(title);
  console.log(data);
  return (
    <div className="row">
      <span>
        {title} <span> Scroll Sides -></span>
      </span>

      <div className="rowImage">
        {data.map((movie) => {
          return (
            <div key={movie.id}>
              <img src={`${imageUrl}${movie.poster_path}`} alt={movie.title} />
              <p> {movie.title}</p>
              <p> {movie.release_date}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Row;
