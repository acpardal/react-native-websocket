import React, { Component } from 'react';
import { View } from 'react-native';

import { connect } from 'react-redux';
import { initConnection } from './actions';

import List from './list.js';

class ContainerList extends Component {
  componentDidMount() {
    this.props.initConnection('http://10.0.2.2:3000');
  }

  render() {
    return (
      <View>
        <List feed={this.props.prices}/>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    text: state.text,
    prices: state.prices
  };
};

const mapDispatchToProps = dispatch => {
  return {
    initConnection: (endpoint) => dispatch(initConnection(endpoint))
  }
}

const PriceList = connect(
  mapStateToProps,
  mapDispatchToProps
)(ContainerList);

export default PriceList;