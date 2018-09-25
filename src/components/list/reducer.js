import {
  RECEIVED_DATA,
  INIT_CONNECTION,
  DISCONNECTED,
  CONNECTION_ESTABLISHED
} from './actions';

export default function app(state = {}, action) {
  switch (action.type) {
    case INIT_CONNECTION:
      return Object.assign({}, state, {
        isConnectionPending: true
      });
    case CONNECTION_ESTABLISHED:
      return Object.assign({}, state, {
        isConnectionPending: false,
        isConnectionEstablished: true
      });
    case DISCONNECTED:
      return Object.assign({}, state, {
        isConnectionPending: false,
        isConnectionEstablished: false
      });
    case RECEIVED_DATA:
      return Object.assign({}, state, {
        prices: action.msg
      });
    default:
      return state;
  }
}
