import React, { Component } from "react";
// import Food from "./food.js";
import axios from "axios";
import Movie from "../components/Movie.js";

class Home extends Component {
  state = {
    isLoading: true,
    movies: [],
  };

  getMovies = async () => {
    // const movies = await fetch("https://yts-proxy.nomadcoders1.now.sh/list_movies.json").then(res => res.json())
    // .then(res => res.json())
    // .then(res => console.log(res))

    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating"
    );
    this.setState({ movies, isLoading: false });
    console.log(movies);
  };

  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { isLoading, movies } = this.state;

    return (
      <div className="Home">
        {isLoading
          ? "Loading"
          : movies.map((movie) => {
              return (
                <Movie
                  key={movie.id}
                  id={movie.id}
                  year={movie.year}
                  title={movie.title}
                  summary={movie.summary}
                  poster={movie.medium_cover_image}
                  genres={movie.genres}
                />
              );
            })}
      </div>
    );
  }
}

export default Home;
