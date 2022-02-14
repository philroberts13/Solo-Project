import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import PlacesPage from './components/PlacesPage';
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import PlaceDetailPage from "./components/PlaceDetailPage";
import CreateListingPage from './components/CreateListingPage';
import SplashPage from './components/SplashPage';
import EditPlacePage from "./components/EditPlacePage";
import ReviewForm from "./components/ReviewForm";
import EditReviewForm from "./components/EditReviewForm";


function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path='/'>
            <SplashPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route exact path='/places'>
            <PlacesPage />
          </Route>
          <Route exact path='/places/:placeId'>
            <PlaceDetailPage />
          </Route>
          <Route exact path='/editForm/:id'>
            <EditPlacePage />
          </Route>
          <Route exact path='/placesForm'>
            <CreateListingPage />
          </Route>
          <Route exact path='/reviews/places/:id'>
            <ReviewForm />
          </Route>
          <Route exact path='/EditReviewForm/:placeId/:reviewId'>
            <EditReviewForm />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
