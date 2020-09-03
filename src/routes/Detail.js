import React from 'react';
import './Detail.css';

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push('/');
    }
    console.log(location.state);
  }
  render() {
    const { location } = this.props;
    if (location.state) {
      return (
        <div className="detail__container">
          <img src={location.state.poster} alt={location.state.title} />
          <div className="contents">
            <div className="detail__title">{location.state.title}</div>
            <ul className="movie__genres">
              {location.state.genres.map((genre, index) => (
                <li key={index} className="genres__genre">
                  {genre}
                </li>
              ))}
            </ul>
            <div>{location.state.summary}</div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Detail;
