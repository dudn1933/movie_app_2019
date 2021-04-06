import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function Movie({ id, year, title, summary, poster, genres }) {
  return (
    <Link
      to={{
        pathname: "/movie-detail",
        state: {
          id,
          year,
          title,
          summary,
          poster,
          genres,
        },
      }}
    >
      <div class="movie">
        <img className="movie__poster" src={poster} alt={title} title={title} />
        <div className="movie__data">
          <h3 className="movie__title">{title}</h3>
          <ul className="genres">
            {genres.map((genre) => (
              <li className="genres__genre">{genre}</li>
            ))}
          </ul>
          <h5 className="movie__year">{year}</h5>
          <div className="movie__summary">{summary}</div>
        </div>
      </div>
    </Link>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};
