import React from 'react';
import { Switch, Route, BrowserRouter } from "react-router-dom";

import HomePage from '../HomePage/index';
import FormPage from '../Form/FormPage';
import AdminPage from '../Admin/AdminPage';
import CreateTripPage from '../CreateTrip/CreateTripPage';
import ListTripsPage from '../ListTrips/ListTripsPage';
import TripDetailsPage from '../TripDetails/TripDetailsPage';

const Router = () => {
  return (
    <div className="AppRouter">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/application-form/:tripId">
            <FormPage />
          </Route>
          <Route exact path="/admin">
            <AdminPage />
          </Route>
          <Route exact path="/trips/create">
            <CreateTripPage />
          </Route>
          <Route exact path="/trips/list">
            <ListTripsPage />
          </Route>
          <Route exact path="/trips/details">
            <TripDetailsPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default Router;