import React from 'react';
import logo from './logo.svg';
import './App.css';
import store from './Store/Store';
import AuthAction from './Store/Actions/AuthActions';
import { connect } from 'react-redux';

class App extends React.Component {
  state = {

  }

  static getDerivedStateFromProps(nextProps, state) {
    console.log("nextProps_________", nextProps);

    return {
      auth: nextProps.auth
    }
  }

  componentDidMount() {
    store.dispatch(AuthAction.authentication());

    setTimeout(() => {
      store.dispatch(AuthAction.authenticationSuccessfull({
        name: "Irfan Ali"
      }));
    }, 3000);
  }

  render() {
    return (
      <h1>Hello World</h1>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.Auth
  }
}

export default connect(mapStateToProps)(App)








