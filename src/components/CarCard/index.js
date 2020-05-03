import React, { useState } from "react";
import { connect } from "react-redux";
import CarCard from "./CarCard";
import CarDetailsPage from "../CarDetailsPage";

function RenderCarCard(props) {
  // Hooks for which card is selected for details page
  const [carDetailPage, setcarDetailPage] = useState("");
  return (
    <>
      {!carDetailPage ? (
        <div>
          {props.carsDetail.map((carDetail) => {
            // pass the setcarDetailPage hook to set the carDetailPage
            return <CarCard car={carDetail} setcarDetailPage={setcarDetailPage} />;
          })}
        </div>
      ) : (
        // show Car details page if carDetailPage is set
        <CarDetailsPage carDetailPage={carDetailPage} setcarDetailPage={setcarDetailPage}/>
      )}
    </>
  );
}

function mapStateToProps(state) {
  return { carsDetail: state.carsDetail };
}

export default connect(mapStateToProps)(RenderCarCard);
