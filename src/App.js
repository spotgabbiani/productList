import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import ListLayout from './partsComponents/listLayout';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ListLayout />
      </Provider>
    );
  }
}

export default App;