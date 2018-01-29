import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export class Seasons extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      seasons: []
    };
  }

  componentDidMount () {
    fetch("http://localhost:3001/seasons")
      .then(response => response.json())
      .then(seasons => {
        this.setState({
          seasons
        });
      })
  }

  render () {
    const { seasons } = this.state;

    return (
      <div>
        <h2>Seasons</h2>
        <ul>
          {seasons.map(season => (
            <li key={season.name}>
              <Link to={`/season/${season.name}`}>{season.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}
