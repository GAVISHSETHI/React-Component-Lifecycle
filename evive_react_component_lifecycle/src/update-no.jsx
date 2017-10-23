import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';

  class App extends Component {
    constructor() {
      super();
      this.state = {val: 0}
    }
    update = () => {
      this.setState({val: this.state.val + 1})
    }
    componentWillMount(){
    console.log("component will mount");
    this.setState({m: 2})
  }

  render() {
    console.log('render');
    return <Button color="red" onClick={this.update}>{this.state.val *  this.state.m}</Button>
  }
  componentDidMount() {
    console.log("component did mount");
    console.log(ReactDOM.findDOMNode(this));
    this.inc = setInterval(this.update,5000)
  }


  componentWillUnmount(){
    console.log('component will unmount');
    clearInterval(this.inc)
  }
}

class Wrapper extends Component {
  mount = () => {
    ReactDOM.render(<App />, document.getElementById('a'))
  }

  unmount = () => {
    ReactDOM.unmountComponentAtNode(document.getElementById('a'))
  }
  render() {
    return (
      <div>
        <Button onClick={this.mount.bind(this)}>Mount</Button>
        <Button onClick={this.unmount}>Unmount</Button>
        <div id="a">

        </div>
      </div>
    )
  }
}
export default Wrapper;
