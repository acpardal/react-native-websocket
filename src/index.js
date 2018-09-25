import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

/* Reducers */
import getText from './components/list/reducer';

/* Components */
import PriceList from './components/list';

const store = createStore(getText, applyMiddleware(thunk));

class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Cryptocurrencies',
    headerStyle: {
      backgroundColor: '#060BA3',
    }
  };

  constructor(props) {
    super(props);

    this.state = { text: 'Price Feed' };
  }

  render() {
    return (
      <Provider store={store}>
        <View>
          <Text>{this.state.text}</Text>
          <PriceList></PriceList>
        </View>
      </Provider>
    );
  }
}

export default HomeScreen;