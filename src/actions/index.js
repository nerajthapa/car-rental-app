import { ADD_BOOKING } from './types';

export const addBookingAction = (values, history) => {
    return async function(dispatch) {
        console.log("values from addBookingAction", values)
        dispatch({ type: ADD_BOOKING, payload: values});
    }



}
