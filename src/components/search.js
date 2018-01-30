import React from "react";
import PropTypes from "prop-types";

class Search extends React.Component {
  onClick = () => {
    this.props.onSearch(this.searchElement.value);
    this.searchElement.value = "";
  }

  render () {
    return (
      <div>
        <input type="text" ref={ref => (this.searchElement = ref)} />
        <button onClick={this.onClick}>Search</button>
      </div>
    );
  }
}

Search.propTypes = {
  onSearch: PropTypes.func.isRequired
};

export default Search;
