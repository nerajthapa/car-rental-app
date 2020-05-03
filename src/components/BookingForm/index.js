import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Styles from "./Styles";
import { Form, Field } from "react-final-form";
import { connect } from "react-redux";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment'
import ModalPopUp from "../ModalPopUp";
import * as actions from "../../actions";


// For phone input
const phoneAdapter = ({ input }) => {
  return (
    <PhoneInput
      containerStyle={{ flex: 1 }}
      country={"in"}
      countryCodeEditable={false}
      disableDropdown
      value={input.value}
      onChange={(value) => {
        input.onChange(value);
      }}
    />
  );
};

class FinalForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phone: "",
      rentDate: new Date(),
      returnDate: new Date(),
      isPopUpOpen: false,
      carName: ""
    };
  }


  onSubmit = (values) => {
    let updatedCarsDetail = this.props.carsDetail.filter((carDetail) => {
      return this.props.history.location.state.id === carDetail.id;
    });
    updatedCarsDetail[0].isBooked = true;
    updatedCarsDetail[0].bookingDetails = {
      cusName: values.name,
      fromDate: values.rentDate,
      toDate: values.returnDate,
      contactDetails: {
        phoneNumber: values.phoneNumber,
      },
    };

    this.props.addBookingAction(updatedCarsDetail[0]);
    this.setState({ isPopUpOpen: !this.state.isPopUpOpen, carName: updatedCarsDetail[0].name });
  };


  render() {
    return (
      <Styles>
        <>
          <h1>Booking Form</h1>
          <Form
            onSubmit={this.onSubmit}
            initialValues={{ name: "Neeraj" }}
            render={({ handleSubmit, form, submitting, pristine, values }) => {
              return (
                <form onSubmit={handleSubmit}>
                  <div>
                    <label>Name</label>
                    <Field
                      name="name"
                      component="input"
                      type="text"
                      placeholder="Name"
                    />
                  </div>
                  <div>
                    <label>Phone Number</label>
                    <Field name="phoneNumber" component={phoneAdapter} />
                  </div>
                  <div>
                    <label>Rent Date</label>
                    <Field
                      name="rentDate"
                      component={({ input }) => {
                        return (
                          <DatePicker
                            selected={this.state.rentDate}
                            dateFormat="d MMMM, yyyy"
                            minDate={new Date()}
                            onChange={(value) => {
                              input.onChange(value);
                              this.setState({ rentDate: value });
                            }}
                          />
                        );
                      }}
                    />
                  </div>

                  <div>
                    <label>Return Date</label>
                    <Field
                      name="returnDate"
                      component={({ input }) => {
                        return (
                          <DatePicker
                          dateFormat="d MMMM, yyyy"
                            selected={this.state.returnDate}
                            minDate={values.rentDate}
                            onChange={(value) => {
                              input.onChange(value);
                              this.setState({ returnDate: value });
                            }}
                          />
                        );
                      }}
                    />
                  </div>
                  <div className="buttons">
                    <button
                      type="submit"
                      disabled={submitting || pristine}
                    >
                      Submit
                    </button>
                    <button
                      type="button"
                      onClick={()=> {
                        this.props.history.push('/')
                      }}
                    >
                      Back
                    </button>
                  </div>
                </form>
              );
            }}
          />
        </>
        {this.state.isPopUpOpen && (
          <ModalPopUp
            show={this.state.isPopUpOpen}
            rentDate = {moment(this.state.rentDate).format("MMM D, YYYY")}
            returnDate = {moment(this.state.returnDate).format("MMM D, YYYY")}
            carName={this.state.carName}
            onHide={() =>
              this.setState({ isPopUpOpen: !this.state.isPopUpOpen })
            }
          />
        )}
      </Styles>
    );
  }
}

function mapStateToProps(state) {
  return { carsDetail: state.carsDetail };
}

export default connect(mapStateToProps, actions)(withRouter(FinalForm));
