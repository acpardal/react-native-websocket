import {
  CONNECTION_INIT,
  CONNECTION_ESTABLISHED,
  CONNECTION_ERROR,
  DISCONNECTED,
  RECEIVED_DATA,
  initConnection,
  disconnect,
  connectionInit,
  connectionEstablished,
  connectionError,
  receivedData,
  disconnected
} from './actions';

describe('actions', () => {
  it('should create an action for connection established', () => {
    const expectedAction = {
      type: CONNECTION_ESTABLISHED
    }
    expect(connectionEstablished()).toEqual(expectedAction)
  })
  it('should create an action with received data', () => {
    const msg = [{ name:'aaaa', age:Math.random() * 100 }];
    const expectedAction = {
      type: RECEIVED_DATA,
      msg
    }
    expect(receivedData(msg)).toEqual(expectedAction)
  })
})
