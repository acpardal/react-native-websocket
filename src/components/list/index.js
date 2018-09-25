import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';

import conf from '../../conf.json';
import { initConnection } from './actions';
import List from './list.js';

class ContainerList extends Component {
  constructor(props) {
    super(props);

    this.state = { text: conf.main.title };
  }

  componentDidMount() {
    this.props.initConnection(conf.endpoint);
  }

  render() {
    return (
      <View>
        <View style={styles.list}>
          <Text>{this.state.text}</Text>
          <Text>{this.props.isConnectionEstablished ? 'Connected' : 'Disconnected'}</Text>
        </View>
        <List feed={this.props.prices}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  list: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});

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
