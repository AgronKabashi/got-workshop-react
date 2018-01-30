import React from "react";
import { Route } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Header from "./header";
import Search from "./search";
import SearchResults from "./search-results";
import Seasons from "./seasons";
import Season from "./season";
import Episode from "./episode";
import ApplicationActions from "store/actions/app";
import SearchActions from "store/actions/search";

class App extends React.Component {
  componentDidMount () {
    this.props.appActions.fetchEverything();
  }

  onSearch = query => {
    const { history, searchActions } = this.props;

    history.push(`/search/${encodeURIComponent(query)}`);
    searchActions.search(query);
  }

  render () {
    const { isLoading } = this.props;
    if (isLoading) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <Header>
          <Search onSearch={this.onSearch} />
        </Header>
        <Route exact path="/" component={Seasons} />
        <Route exact path="/season/:season" component={Season} />
        <Route exact path="/season/:season/:episode" component={Episode} />
        <Route exact path="/search/:query" component={SearchResults} />
      </div>
    );
  }
}

export default connect(
  ({ app }) => ({
    isLoading: app.isLoading
  }),
  dispatch => ({
    appActions: bindActionCreators(ApplicationActions, dispatch),
    searchActions: bindActionCreators(SearchActions, dispatch)
  })
)(App);
