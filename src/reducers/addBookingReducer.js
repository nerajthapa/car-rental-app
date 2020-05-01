import { ADD_BOOKING } from "../actions/types";
import initalState from "./initalState.js";

export default function (state = initalState, action) {
  //console.log(action);
  switch (action.type) {
    case ADD_BOOKING: {
      console.log("from add booking reducer", action);
      return action.payload || false;
    }
    default:
      return state;
  }
}
