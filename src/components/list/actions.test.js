import io from 'socket.io-client';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import {
  CONNECTION_INIT,
  CONNECTION_ESTABLISHED,
  CONNECTION_ERROR,
  RECEIVED_DATA,
  initConnection,
  connectionEstablished,
  connectionError,
  receivedData
} from './actions';

import conf from '../../conf.json';

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('actions', () => {

  it('should create an action initiating a connection', () => {
    const expectedAction = [{
      type: CONNECTION_INIT,
      socket: io(conf.endpoint)
    }]

    const store = mockStore({ todos: [] });

    store.dispatch(initConnection(conf.endpoint));
    expect(JSON.parse(JSON.stringify(store.getActions()))).toEqual(JSON.parse(JSON.stringify(expectedAction)));
  });

  it('should create an action for connection established', () => {
    const expectedAction = {
      type: CONNECTION_ESTABLISHED
    }
    expect(connectionEstablished()).toEqual(expectedAction)
  });

  it('should create an action for connection error', () => {
    const error = 'Mocking error, it should be like an exception';
    const expectedAction = {
      type: CONNECTION_ERROR,
      error
    }
    expect(connectionError(error)).toEqual(expectedAction)
  });

  it('should create an action with received data', () => {
    const msg = [{ name:'aaaa', age:Math.random() * 100 }];
    const expectedAction = {
      type: RECEIVED_DATA,
      msg
    }
    expect(receivedData(msg)).toEqual(expectedAction)
  });
});
