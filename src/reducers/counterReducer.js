import {INCREASE, DECREASE,ADDTWO} from '../actions/types';

const initialState = 0;

export default function (state = initialState, action) {
  console.log(action.type);
  
  switch (action.type) {
    case INCREASE:
    return state + 1;

    case DECREASE:
      return state - 1;
      case ADDTWO:
        return state +2;
    default:
      return state;
  }
}