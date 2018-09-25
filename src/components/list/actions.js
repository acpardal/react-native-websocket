import io from 'socket.io-client';

/*
 * action types
 */

export const INIT_CONNECTION = 'INIT_CONNECTION';
export const CONNECTION_ESTABLISHED = 'CONNECTION_ESTABLISHED';
export const DISCONNECTED = 'DISCONNECTED';
export const RECEIVED_DATA = 'RECEIVED_DATA';

/*
 * action creators
 */

export function initConnection(endpoint) {
  return dispatch => {
    /* ANDROID EMULATOR */
    const socket = io(endpoint);
    socket.on('connect', () => {
      dispatch(connectionEstablished());
    });
    socket.on('chat message', msg => {
      dispatch(receivedData(msg));
    });
    socket.on('disconnect', () => {
      dispatch(disconnected());
    });
  }
}

export function connectionEstablished() {
  return { type: CONNECTION_ESTABLISHED }
}

export function disconnected() {
  return { type: DISCONNECTED }
}

export function receivedData(msg) {
  return { type: RECEIVED_DATA, msg }
}
