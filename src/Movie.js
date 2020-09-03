import React from 'react';
import PropTypes from 'prop-types';

function Movie({ id, year, title, summary, poster }) {
  return (
    <div>
      <img src={poster} alt={title} />
      <h3>{title}</h3>
      <h4>{year}</h4>
      <h5>{summary}</h5>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};

export default Movie;
