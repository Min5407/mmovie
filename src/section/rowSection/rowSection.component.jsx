import React, { useState, useEffect } from "react";
import "./rowSection.style.scss";
import Row from "../../components/row/row.component";
import { fetchRowMovies } from "../../api";
import Loading from "../../components/loading/loading.component";

const RowSection = () => {
  const [movies, setMovies] = useState(null);
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const data = await fetchRowMovies();

        setMovies(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMovies();
  }, []);
  if (movies) {
    return (
      <div className="rowSection">
        <Row title="popular" data={movies.popular} />
        <Row title="upcoming" data={movies.upcoming} />
        <Row title="top Rated" data={movies.topRated} />
      </div>
    );
  } else {
    return (
      <div>
        <Loading />
      </div>
    );
  }
};

export default RowSection;
