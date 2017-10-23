import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import ReactDOM from 'react-dom';


class Shouldupdate extends Component {

  constructor() {
    super();
    this.state = {increasing: false}
  }

  update() {
    ReactDOM.render(
      <Shouldupdate val={this.props.val + 1}/>,
      document.getElementById('root'))
  }

  componentWillReceiveProps(nextProps) {
    this.setState({increasing: nextProps.val > this.props.val})
  }

  shouldComponentUpdate(nextProps, nextstate) {
    return (nextProps.val % 4 === 0);
  }

  render() {
    console.log(this.state.increasing);
    return ( <Button onClick={this.update.bind(this)}>
        {this.props.val}
      </Button>
    )
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(`prevProps: ${prevProps}.val`)
  }
}
Shouldupdate.defaultProps = {val: 0}
export default Shouldupdate;

