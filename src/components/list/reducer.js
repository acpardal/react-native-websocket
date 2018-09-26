import {
  CONNECTION_INIT,
  CONNECTION_ESTABLISHED,
  CONNECTION_ERROR,
  DISCONNECTED,
  RECEIVED_DATA
} from './actions';

export default function app(state = {}, action) {
  switch (action.type) {
    case CONNECTION_INIT:
      return Object.assign({}, state, {
        isConnectionPending: true,
        isConnectionEstablished: false,
        connectionError: false,
        socket: action.socket
      });
    case CONNECTION_ESTABLISHED:
      return Object.assign({}, state, {
        isConnectionPending: false,
        isConnectionEstablished: true,
        connectionError: false
      });
    case CONNECTION_ERROR:
      return Object.assign({}, state, {
        isConnectionPending: false,
        isConnectionEstablished: false,
        connectionError: action.error
      });
    case DISCONNECTED:
      return Object.assign({}, state, {
        isConnectionPending: false,
        isConnectionEstablished: false,
        connectionError: false,
        socket: null
      });
    case RECEIVED_DATA:
      return Object.assign({}, state, {
        prices: action.msg
      });
    default:
      return state;
  }
}
