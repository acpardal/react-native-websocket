import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { connect } from 'react-redux';

import conf from '../../conf.json';
import { initConnection, disconnect } from './actions';
import List from './list.js';

class ContainerList extends Component {
  constructor(props) {
    super(props);

    this.state = { text: conf.main.title };
  }

  componentDidMount() {
    this.props.initConnection(conf.endpoint);
  }

  componentWillUnmount() {
    this.props.disconnect(this.props.socket);
  }

  _onPressReconnect = () => {
    let { isConnectionEstablished, isConnectionPending } = this.props;
    if(!isConnectionEstablished && !isConnectionPending) {
      this.props.initConnection(conf.endpoint);
    }
  }

  _onPressDisconnect = () => {
    this.props.disconnect(this.props.socket);
  }

  render() {
    return (
      <View>
        <View style={styles.list}>
          <Text>{this.state.text}</Text>
          <Text>{this.props.isConnectionEstablished ? 'Connected' : 'Disconnected'}</Text>
        </View>
        <List feed={this.props.prices}/>
        <Button
          onPress={this._onPressReconnect}
          title={conf.button.reconnect.title}
          color={conf.button.reconnect.color}
        />
        <Button
          onPress={this._onPressDisconnect}
          title={conf.button.disconnect.title}
          color={conf.button.disconnect.color}
        />
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

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => {
  return {
    disconnect: (socket) => dispatch(disconnect(socket)),
    initConnection: (endpoint) => dispatch(initConnection(endpoint))
  }
}

const PriceList = connect(
  mapStateToProps,
  mapDispatchToProps
)(ContainerList);

export default PriceList;
