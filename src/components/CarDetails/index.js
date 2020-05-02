import React from "react";
import { connect } from "react-redux";
import moment from "moment";
import * as actions from "../../actions";
import CarCard from "../CarCard/CarCard";
function CarDetails(props) {
  return (
    <>
      <CarCard car={props.carDetailPage} setcarDetailPage={props.setcarDetailPage} isDetail/>
      <h5>Car Details</h5>
      <hr
        style={
          {
            // color: "blue",
            // backgroundColor: color,
          }
        }
      />
      <p>Vehicle Number : {props.carDetailPage.vehicleNumber}</p>
      <p>Fuel Type : {props.carDetailPage.fuelType}</p>
      <h5>Current Booking</h5>
      <hr
        style={
          {
            // color: "blue",
            // backgroundColor: color,
          }
        }
      />
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

// export default CarDetails;
function mapStateToProps(state) {
  return { carsDetail: state.carsDetail };
}

export default connect(mapStateToProps, actions)(CarDetails);
