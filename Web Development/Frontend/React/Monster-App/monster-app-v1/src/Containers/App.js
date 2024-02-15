import React, { Component } from "react";
import DisplayCardsList from "../Components/CardsList";
import SearchBox from "../Components/SearchBox";
import Scroll from "../Components/Scroll";
import ErrorBoundary from "../Components/ErrorBoundary";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchFieldValue: "",
      robotsList: [],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((robos) => this.setState({ robotsList: robos }));
  }

  onSearchChange = (event) => {
    this.setState({ searchFieldValue: event.target.value });
  };

  render() {
    const { robotsList, searchFieldValue } = this.state;
    const filteredList = robotsList.filter((robot) => {
      return robot.name.toLowerCase().includes(searchFieldValue.toLowerCase());
    });
    return !robotsList.length ? (
      <h1>Loading</h1>
    ) : (
      <div className="tc">
        <h1>RoboFriends</h1>
        <SearchBox onSearchChange={this.onSearchChange} />
        <Scroll>
          <ErrorBoundary>
            <DisplayCardsList robotsList={filteredList} />
          </ErrorBoundary>
        </Scroll>
      </div>
    );
  }
}
export default App;
