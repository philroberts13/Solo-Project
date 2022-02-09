import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Redirect, useParams } from "react-router-dom";
import placesReducer, { getPlaceList } from "../../store/places";
import * as sessionActions from "../../store/session";

function PlacesPage() {
    const dispatch = useDispatch();

    // const { placeId } = useParams();

    const places = useSelector(state => {
        return Object.values(state.places);
      });

      useEffect(() => {
        dispatch(getPlaceList())
      }, [dispatch]);

      if(!places) return null;

    return (
        <div>
            <h1>Tree Houses</h1>
            <ul>
                {places.map(place => (<NavLink key={place.id} to={`/places/${place.id}`}>
                    {place.name}, {place.city}
                </NavLink>))}
            </ul>
            <NavLink to={'/placesForm'}>Create Listing</NavLink>
        </div>
    )
}

export default PlacesPage;
