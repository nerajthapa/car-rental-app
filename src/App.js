import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import CarCard from './components/CarCard';
import FinalForm from './components/BookingForm'
import CarDetailsPage from './components/CarDetailsPage'
import './App.css';

function App() {
  return (
     <div>
     <BrowserRouter>
         <div>
             <Route exact path="/" component={CarCard} />
             <Route exact path="/booking-form" component={FinalForm} />
             <Route exact path="/car-details" component={CarDetailsPage} />
         </div>

     </BrowserRouter>
     </div>
  );
}

export default App;
