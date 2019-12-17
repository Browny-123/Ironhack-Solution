import React, { Component } from "react";
import axios from "axios";
import CelebDisplay from "./CelebDisplay";

const apiReq = axios.create();

export default class CelebMain extends Component {
  state = {};

  componentDidMount() {
    apiReq
      .get(
        "https://api.themoviedb.org/3/person/popular?page=2&api_key=695d5e9535683f524e1af6012b670e21"
      )
      .then(apiRes => {
        this.setState(apiRes.data);
      })
      .catch(err => console.log(err));
  }
  render() {
    return (
      <div>
        <h1>Celebrities</h1>
        {!this.state ? (
          <p>No Celebrities</p>
        ) : (
          <CelebDisplay celeb={this.state} />
        )}
      </div>
    );
  }
}
