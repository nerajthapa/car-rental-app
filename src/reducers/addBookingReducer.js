import { ADD_BOOKING } from "../actions/types";
import initalState from "./initalState.js";

export default function (state = initalState, action) {
  //console.log(action);
  switch (action.type) {
    case ADD_BOOKING: {
      state[action.payload.id - 1] = action.payload;
      console.log("from add booking reducer state", state);
      console.log("from add booking reducer action", action);
      return [...state];
    }
    default:
      return state;
  }
}
