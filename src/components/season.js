import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Season = ({ episodes }) =>
  <div>
    <ul>
      {episodes.map(episode =>
        <li key={episode.name}>
          <Link to={`/season/${episode.season}/${episode.name}`}>{episode.name}</Link>
        </li>)}
    </ul>
  </div>;

Season.propTypes = {
  episodes: PropTypes.array,
  match: PropTypes.object
};

export default connect(
  ({ episodes }, { match }) => ({
    episodes: episodes.filter(episode => episode.season === match.params.season)
  })
)(Season);
