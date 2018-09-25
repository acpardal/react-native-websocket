import React, { Component } from 'react';
import { Text, View } from 'react-native';

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
        <Text>{this.props.isConnectionEstablished ? 'Connected' : 'Disconnected'}</Text>
        <List feed={this.props.prices}/>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return Object.assign({}, state);
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