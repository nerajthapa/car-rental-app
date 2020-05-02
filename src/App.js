import React from 'react';
// import logo from './logo.svg';
import CarCard from './components/CarCard';
import { BrowserRouter, Route } from 'react-router-dom';
import FinalForm from './components/BookingForm'
import CarDetails from './components/CarDetails'
// import './App.css';

function App() {
  return (
    // <>
    //   <CarCard />
    //   <FinalForm />
    // </>
     <div>
     <BrowserRouter>
         <div>
             {/* <Header /> */}
             <Route exact path="/" component={CarCard} />
             <Route exact path="/booking-form" component={FinalForm} />
             <Route exact path="/car-details" component={CarDetails} />
             {/* <Route path="/surveys/new" component={Surveynew} /> */}
         </div>

     </BrowserRouter>
     </div>
  );
}

export default App;
