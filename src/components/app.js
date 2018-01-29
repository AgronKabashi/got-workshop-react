import React from "react";
import { Header } from "./header";
import { Search } from "./search";
import { SearchResults } from "./search-results";

class App extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      searchResults: []
    };
  }

  onSearch = query => {
    console.log("Searching...");
    fetch("http://localhost:3001/episodes")
      .then(response => response.json())
      .then(searchResults => {
        this.setState({
          searchResults
        });
      });
  }

  render () {
    const { searchResults } = this.state;

    return (
      <div>
        <Header>
          <Search onSearch={this.onSearch} />
        </Header>
        <SearchResults results={searchResults} />
      </div>
    );
  }
}

export default App;
