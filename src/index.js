import React, { Component } from 'react'
import ReactDOM from 'react-dom'


class HelloWorld extends Component {
  render () {
    return (<p>Hello World</p>);
  }
};

ReactDOM.render(<HelloWorld />, document.getElementById('root'));
