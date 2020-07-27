import React, { Component } from "react";
import axios from "axios";
import Header from "./Header";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

class App extends Component {
  state = {
    users: [],
  };

  componentDidMount() {
    axios
      .get(`https://yalantis-react-school-api.yalantis.com/api/task0/users`)
      .then((response) => {
        this.setState({ users: response.data });
      });
  }

  render() {
    return (
      <div>
        <Header months={months} users={this.state.users} />
      </div>
    );
  }
}

export default App;
