import React from "react";
import { Header } from "./header";
import { Search } from "./search";

class App extends React.Component {
  onSearch = query => {
    console.log("Searching...");
  }
  render () {

    return (
      <div>
        <Header>
          <Search onSearch={this.onSearch} />
        </Header>
      </div>
    );
  }
}

export default App;
