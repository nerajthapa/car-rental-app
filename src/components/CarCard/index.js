import React, { useState } from "react";
import { connect } from "react-redux";
import CarCard from "./CarCard";
import CarDetailsPage from "../CarDetails";

function RenderCarCard(props) {
  const [carDetailPage, setcarDetailPage] = useState("");
  return (
    <>
      {!carDetailPage ? (
        <div>
          {props.carsDetail.map((carDetail) => {
            return <CarCard car={carDetail} setcarDetailPage={setcarDetailPage} />;
          })}
        </div>
      ) : (
        <CarDetailsPage carDetailPage={carDetailPage} setcarDetailPage={setcarDetailPage}/>
      )}
    </>
  );
}

function mapStateToProps(state) {
  return { carsDetail: state.carsDetail };
}

export default connect(mapStateToProps)(RenderCarCard);
