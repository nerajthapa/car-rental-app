import React from "react";
import "./CarCard.sass";
import { connect } from "react-redux";

function getButtonText(isBooked, isSelected) {
  if (isBooked) return "Not Available";
  if (isSelected) return "SELECTED";
  return "SELECT";
}

function CarCard(props) {
  const {
    // id,
    // name,
    // seats,
    // carType,
    // fuelType,
    // photo,
    // rent ,
    // isBooked,
    // location,
    isSelected= false,
    // transmission
    id,
    name,
    seats,
    color,
    fuelType,
    vehicleNumber,
    rent,
    isBooked,
    img,
    bookingDetails,
  } = props.car;
//   console.log("props from carCard", props);
  // const id = 1, name = "BMW", seats = 3,price = "$100000",isSelected = false, fuelType= "petrol";
  // // const isBooked = availability.indexOf(props.startDate.day()) === -1;
  // const isBooked = false;
  return (
    <div className="car-card">
      <header className="backgrounded">
        <h3>
          {name} ({fuelType})
        </h3>
      </header>

      <div className="card-content backgrounded">
        <img src={img} alt={`${name}`} />
        <div>
          {/* <p><strong>Location : </strong> {location}</p> */}
          <p>
            <strong>Number of Seats : </strong> {seats}
          </p>
          {/* <p><strong>Car Type : </strong> {carType}</p> */}
          {/* <p><strong>Transmission : </strong> {transmission}</p> */}
        </div>
      </div>

      <footer className="backgrounded">
        <span className="price-tag">&#8377;{rent}</span>
        <button
          className={isSelected ? "selected" : ""}
          disabled={isBooked}
          onClick={() => props.onSelect(id)}
        >
          {getButtonText(isBooked, isSelected)}
        </button>
      </footer>
    </div>
  );
}

// function mapStateToProps(state){
//     return { carDetails: state.carDetails }
// }

// export default connect(mapStateToProps)(CarCard);
export default CarCard;
