import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Seasons = ({ seasons }) =>
  <div>
    <h2>Seasons</h2>
    <ul>
      {seasons.map(season => (
        <li key={season.name}>
          <Link to={`/season/${season.name}`}>{season.name}</Link>
        </li>
      ))}
    </ul>
  </div>;

Seasons.propTypes = {
  seasons: PropTypes.array
};

export default connect(
  ({ seasons }) => ({ seasons })
)(Seasons);
