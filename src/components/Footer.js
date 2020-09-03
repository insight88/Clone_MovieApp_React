import React from 'react';
import axios from 'axios';
import Movie from '../components/Movie';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Navigation.css';
import './Footer.css';

function Footer({ id, year, title, summary, poster, genres }) {
  return (
    <div className="movie">
      <Link
        to={{
          pathname: `/movie/${id}`,
          state: {
            year,
            title,
            summary,
            poster,
            genres,
          },
        }}
      >
        {/* Link를 통해 state 정보를 라우터로 보냄 */}

        <img src={poster} alt={title} title={title} />
        <div className="movie__data">
          <h3 className="movie__title">{title}</h3>
          <h5 className="movie__year">{year}</h5>
          <ul className="movie__genres">
            {genres.map((genre, index) => (
              <li key={index} className="genres__genre">
                {genre}
              </li>
            ))}
          </ul>
          <p className="movie__summary">{summary.slice(0, 300)}...</p>
        </div>
      </Link>
    </div>
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

export default Footer;
