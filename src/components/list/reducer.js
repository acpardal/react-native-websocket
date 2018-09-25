import {
  RECEIVED_DATA
} from './actions';

export default function getText(state = {}, action) {
  switch (action.type) {
    case RECEIVED_DATA:
      return {
        prices: action.msg
      }
    default:
      return state;
  }
}