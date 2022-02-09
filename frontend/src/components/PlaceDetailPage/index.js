import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Redirect, useParams } from "react-router-dom";
import placesReducer, { getPlaceById, getPlaceList } from "../../store/places";
import * as sessionActions from "../../store/session";

function PlaceDetailPage() {
    const dispatch = useDispatch();

    const { placeId } = useParams();
    const place = useSelector(state => (state.places[placeId]));

      useEffect(() => {
        dispatch(getPlaceById(placeId))
      }, [placeId, dispatch]);

      if(!place) return null;

    return (
        <div>
            <h1>{place.name}</h1>
            <ul>{place.address}</ul>
            <ul>
            {place.city}, {place.state}
            </ul>
            <ul>Per Night:  ${place.price}</ul>
            <button>Book</button> <button>Edit</button> <button>Delete</button>
        </div>
    )
}

export default PlaceDetailPage;
