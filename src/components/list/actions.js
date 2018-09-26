import io from 'socket.io-client';

/*
 * action types
 */

export const CONNECTION_INIT = 'CONNECTION_INIT';
export const CONNECTION_ESTABLISHED = 'CONNECTION_ESTABLISHED';
export const CONNECTION_ERROR = 'CONNECTION_ERROR';
export const RECEIVED_DATA = 'RECEIVED_DATA';
export const DISCONNECTED = 'DISCONNECTED';
export const DISCONNECTING_ERROR = 'DISCONNECTING_ERROR';

/*
 * action creators
 */

export function initConnection(endpoint) {
  return dispatch => {
    /* ANDROID EMULATOR */
    const socket = io(endpoint);
    dispatch(connectionInit(socket));

    socket.on('connect', () => {
      dispatch(connectionEstablished());
    });
    socket.on('connect_error', error => {
      dispatch(connectionError(error));
    });
    socket.on('chat message', msg => {
      dispatch(receivedData(msg));
    });
    socket.on('disconnect', () => {
      dispatch(disconnected());
    });
  }
}

export function disconnect(socket) {
  return dispatch => {
    try {
      socket && socket.close();
    } catch (error) {
      dispatch(disconnectingError(error));
    }
  }
}

export function connectionInit(socket) {
  return { type: CONNECTION_INIT, socket }
}
export function connectionEstablished() {
  return { type: CONNECTION_ESTABLISHED }
}

export function connectionError(error) {
  return { type: CONNECTION_ERROR, error }
}

export function receivedData(msg) {
  return { type: RECEIVED_DATA, msg }
}

export function disconnected() {
  return { type: DISCONNECTED }
}

export function disconnectingError(error) {
  return { type: DISCONNECTING_ERROR, error }
}
