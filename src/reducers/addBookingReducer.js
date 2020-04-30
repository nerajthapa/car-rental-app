import { ADD_BOOKING } from '../actions/types';
import initalState from './initalState.js';

export default function(state = initalState, action){
    //console.log(action);
    switch(action.type){
        case ADD_BOOKING: 
            return action.payload || false;
        default: return state;
    }
};