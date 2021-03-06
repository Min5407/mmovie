import React, { useState, useEffect } from "react";
import "./header.style.scss";

import Loading from "../loading/loading.component";

import { fetchHeaderMovie, imageUrl } from "../../api";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";

const Header = ({ setheaderLoading }) => {
  const [movie, setMovie] = useState(null);
  const [trailer, setTrailer] = useState(null);

  const opts = {
    width: "400",
    height: "300",
    playerVars: {
      autoplay: 1,
    },
  };

  useEffect(() => {
    const recentMovie = async () => {
      try {
        let {
          data: { results },
        } = await fetchHeaderMovie();
        setMovie(results[1]);
        setheaderLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    recentMovie();
  }, []);

  useEffect(() => {
    if (movie) {
      movieTrailer(movie.original_title).then((url) => {
        //https://www.youtube.com/watch?v=ZTs37z_FYZw
        const urlSearch = new URL(url).search;
        //urlSearch will get everything after ? mark
        const urlSearchParam = new URLSearchParams(urlSearch);
        // urlSearchParam this is a function that gets the value from a search key like `v`;
        setTrailer(urlSearchParam.get("v"));
      });
    }
  }, [movie]);

  if (trailer) {
    return (
      <div className="headerBackground">
        <img src={imageUrl + movie.poster_path} alt="headerImage" />
        <div className="header">
          <div className="headerContent">
            <span> - {movie.release_date} - </span>
            <h1>{movie.title}</h1>
            <a href="https://www.themoviedb.org/movie/396535" target="blank">
              Check me Out
            </a>
          </div>

          <div className="trailer">
            <Youtube videoId={trailer} opts={opts} />
          </div>
        </div>
        <div className="shadowBottom"></div>
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

export default Header;
