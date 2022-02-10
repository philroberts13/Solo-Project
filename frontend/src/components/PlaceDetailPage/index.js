import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Redirect, useParams } from "react-router-dom";
import placesReducer, { getPlaceById, getPlaceList } from "../../store/places";
import * as sessionActions from "../../store/session";
import { deletePlace } from "../../store/places";
import { useHistory } from "react-router-dom";


function PlaceDetailPage() {
    const dispatch = useDispatch();
    const history = useHistory();

    const { placeId } = useParams();
    const place = useSelector(state => (state.places[placeId]));

      useEffect(() => {
        dispatch(getPlaceById(placeId))
      }, [placeId, dispatch]);

      if(!place) return null;

      const removePlace = async (e) => {
        await dispatch(deletePlace(placeId));
        dispatch(getPlaceList(place?.id));
        history.push("/places")
        }

    return (
        <div>
            <h1>{place.name}</h1>
            <ul>{place.address}</ul>
            <ul>
            {place.city}, {place.state}
            </ul>
            <ul>Per Night:  ${place.price}</ul>
            <button>Book</button>
            <NavLink to={`/editForm/${place.id}`}>
                <button>Edit</button>
            </NavLink>
            <button onClick={removePlace}>Delete</button>
        </div>
    )
}

export default PlaceDetailPage;
