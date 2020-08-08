import axios from "axios";
const apiKey = "aa9f093c1472a9dd9eec1ffb577df03c";
export const imageUrl = "https://image.tmdb.org/t/p/original";
const requests = {
  popularMovies: `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`,
  headerMovie: `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=train%20to%20busan&page=1&include_adult=false`,
  upcomingMovies: `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=en-US&page=1`,
};

export const fetchHeaderMovie = async () => {
  try {
    const response = await axios.get(requests.headerMovie);
    return response;
  } catch (error) {
    console.log(error);
  }
};
