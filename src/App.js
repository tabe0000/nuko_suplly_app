import React, {Component} from 'react';
import axios from 'axios';

const server = "https://api.thecatapi.com/v1/images/search";

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
        console.log(res);
        console.log(res.data[0].url);
      })
      .catch((e) => {
        console.log(e);
        this.setState({
          status: false,
          result: e,
        });
      });
    console.log('handleClick is called');
  }

  render() {
    return (
      <div>
        <h1>Welcome nuko get page!!</h1>
        <img src={this.state.result}></img>
        <div>
          <button onClick={this.handleClick}>Get nuko!</button>
        </div>
      </div>
    );
  }
}

export default App;
