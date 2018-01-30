import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";
import SearchActions from "store/actions/search";

class SearchResults extends React.Component {
  componentWillMount () {
    const { query } = this.props.match.params;
    this.props.searchActions.search(query);
  }

  componentWillUpdate (nextProps) {
    const { query: nextQuery } = nextProps.match.params;
    const { query: currentQuery } = this.props.match.params;

    if ( nextQuery !== currentQuery) {
      this.props.searchActions.search(nextQuery);
    }
  }

  render () {
    const { searchResults } = this.props;
    return (
      <div>
        <h2>Results</h2>
        <ul>
          {searchResults.map(result =>
            <li key={result.name}>
              <Link to={`/season/${result.season}/${result.name}`}>{result.name}</Link>
            </li>)}
        </ul>
      </div>
    );
  }
};

SearchResults.propTypes = {
  searchResults: PropTypes.array,
  match: PropTypes.shape({
    params: PropTypes.shape({
      query: PropTypes.string
    })
  })
};

export default connect(
  ({ searchResults }) => ({ searchResults }),
  dispatch => ({
    searchActions: bindActionCreators(SearchActions, dispatch)
  })
)(SearchResults);
