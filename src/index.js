import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

/* From app developer */
import conf from './conf.json';
import PriceList from './components/list';
import getText from './components/list/reducer';

const store = createStore(getText, applyMiddleware(thunk));

class HomeScreen extends Component {
  static navigationOptions = {
    title: conf.title,
    headerStyle: {
      backgroundColor: conf.header.backgroundColor,
    }
  };

  render() {
    return (
      <Provider store={store}>
        <PriceList></PriceList>
      </Provider>
    );
  }
}

export default HomeScreen;
