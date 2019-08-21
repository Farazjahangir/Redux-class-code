import React from 'react';
import logo from './logo.svg';
import './App.css';
import store from './store';

class App extends React.Component {
  componentDidMount() {
    // store.getState();
    store.dispatch({
      type: "LOGIN_SUCCESSFULL"
    })

    console.log(store.getState());
  }
  render() {
    return (
      <h1>Hello World</h1>
    )
  }
}
export default App;
