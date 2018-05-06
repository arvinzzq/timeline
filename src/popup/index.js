import React, {PureComponent, Component} from 'react';
import ReactDOM from 'react-dom';
import './popup.scss';

class App extends (PureComponent || Component) {
  render() {
    return (
      <div>hello timeline</div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));