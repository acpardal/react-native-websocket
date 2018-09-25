import io from 'socket.io-client';

/*
 * action types
 */

export const INIT_CONNECTION = 'INIT_CONNECTION';
export const RECEIVED_DATA = 'RECEIVED_DATA';

/*
 * action creators
 */

export function initConnection(endpoint) {
  return dispatch => {
    /* ANDROID EMULATOR */
    const socket = io(endpoint);
    socket.on('chat message', msg => {  
      dispatch(receivedData(msg));
    });

  }
}

export function receivedData(msg) {
  return { type: RECEIVED_DATA, msg }
}