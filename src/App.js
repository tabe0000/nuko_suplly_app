/* eslint-disable */
require('dotenv').config()

import React, { Component } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Button } from 'react-bootstrap';

/* eslint-enable */

const server = process.env.REACT_APP_URL;

class App extends Component {
  constructor() {
    super();
    this.state = {
      status: false,
      result: 'https://cdn2.thecatapi.com/images/2kj.jpg',
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    axios.get(server)
      .then((res) => {
        this.setState({
          status: true,
          result: res.data[0].url,
        });
      })
      .catch((e) => {
        console.log(e);
        this.setState({
          status: false,
          result: e,
        });
      });
  }

  render() {
    return (
      <div>
        <h1>ぬこ補給用ページ</h1>
        <img src={this.state.result}></img>
        <div>
          <Button className="btn" variant="info" onClick={this.handleClick}>ぬこを補給する</Button>
        </div>
      </div>
    );
  }
}

export default App;
