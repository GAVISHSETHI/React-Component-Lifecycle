import React, { Component } from 'react';
import { Router, Route, browserHistory } from 'react-router';
import Wrapper from './update-no.jsx';
import Shouldupdate from './shouldComponenUpdate.jsx';



class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <Router history={browserHistory}>
            <Route path={"/"} component={Wrapper} />
            <Route path={"should"} component={Shouldupdate} />
          </Router>
        </div>
      </div>

    );
  }
}

export default App;
