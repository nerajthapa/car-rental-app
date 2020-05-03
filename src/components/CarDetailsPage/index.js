import React from "react";
import { connect } from "react-redux";
import moment from "moment";
import * as actions from "../../actions";
import CarCard from "../CarCard/CarCard";
function CarDetailsPage(props) {
  return (
    <>
      <CarCard
        car={props.carDetailPage}
        // Pass the setcarDetailPage function to reset the carDetailPage hooks
        setcarDetailPage={props.setcarDetailPage}
        isDetail
      />
      <h5>Car Details</h5>
      <hr />
      <p>Vehicle Number : {props.carDetailPage.vehicleNumber}</p>
      <p>Fuel Type : {props.carDetailPage.fuelType}</p>
      <p>Color : {props.carDetailPage.color}</p>
      <h5>Current Booking</h5>
      <hr />
      {props.carDetailPage.bookingDetails.cusName && (
        <>
          <p>Name {props.carDetailPage.bookingDetails.cusName}</p>
          <p>
            Phone Number +
            {props.carDetailPage.bookingDetails.contactDetails.phoneNumber}
          </p>
          <p>
            Issue Date{" "}
            {moment(props.carDetailPage.bookingDetails.fromDate).format(
              "MMM D, YYYY"
            )}
          </p>
          <p>
            Return Date{" "}
            {moment(props.carDetailPage.bookingDetails.toDate).format(
              "MMM D, YYYY"
            )}
          </p>
        </>
      )}
    </>
  );
}

function mapStateToProps(state) {
  return { carsDetail: state.carsDetail };
}

export default connect(mapStateToProps, actions)(CarDetailsPage);
