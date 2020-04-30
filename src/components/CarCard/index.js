import React from "react";
import { connect } from "react-redux";
import CarCard from "./CarCard";

function RenderCarCard(props) {
  return (
    <>
      {props.carsDetail.map((carDetail) => {
        return <CarCard car={carDetail} />;
      })}
    </>
  );
}

function mapStateToProps(state) {
  return { carsDetail: state.carsDetail };
}

export default connect(mapStateToProps)(RenderCarCard);
