import React from "react";
import Modal from "react-bootstrap/Modal";
import { withRouter } from "react-router-dom";
import Button from "react-bootstrap/Button";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Booking Confirmed
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          You have booked <b>{props.carName}</b>
        </p>
        <p>
          for the duration{" "}
          <b>
            {props.rentDate} - {props.returnDate}
          </b>
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={()=>{
            props.history.push('/')
            props.onHide()}}>Continue</Button>
      </Modal.Footer>
    </Modal>
  );
}


export default withRouter(MyVerticallyCenteredModal)
