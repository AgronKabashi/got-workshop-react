import React from "react";
import PropTypes from "prop-types";

export class Season extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      episodes: []
    };
  }

  componentDidMount () {
    fetch(`http://localhost:3001/episodes?season=${this.props.match.params.season}`)
      .then(response => response.json())
      .then(episodes => {
        this.setState({
          episodes
        });
      })
  }

  render () {
    const { episodes } = this.state;

    return (
      <div>
        <ul>
          {episodes.map(episode => <li key={episode.name}>{episode.name}</li>)}
        </ul>
      </div>
    )
  }
}

Season.propTypes = {
  match: PropTypes.object
};
