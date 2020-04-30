import { combineReducers } from 'redux';
import addBookingReducer from './addBookingReducer';
// import { reducer as reduxForm } from 'redux-form';

export default combineReducers({
    carsDetail: addBookingReducer,
    // form: reduxForm
});