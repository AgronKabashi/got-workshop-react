import React from "react";
import { Route, Switch } from "react-router-dom";
import { Header } from "./header";
import { Search } from "./search";
import { SearchResults } from "./search-results";
import { Seasons } from "./seasons";
import { Season } from "./season";

class App extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      searchResults: []
    };
  }

  onSearch = query => {
    fetch(`http://localhost:3001/episodes?q=${query}`)
      .then(response => response.json())
      .then(searchResults => {
        this.props.history.push(`/search?query=${query}`);
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
        <Route exact path="/" component={Seasons} />
        <Route exact path="/season/:season" component={Season} />
        <Route exact path="/search" render={() => <SearchResults results={searchResults} />} />
      </div>
    );
  }
}

export default App;
