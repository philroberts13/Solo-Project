import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useParams } from "react-router-dom";
import placesReducer, { getPlaceList } from "../../store/places";
import * as sessionActions from "../../store/session";

function PlacesPage() {
    const dispatch = useDispatch();

    const { place } = useParams();

    // const place = useSelector(state => {
    //     return state.place.list.map(placeId => state.place[placeId]);
    //   });

      useEffect(() => {
        dispatch(getPlaceList())
      }, [dispatch]);

    return (
        <div>
            <h1>Tree Houses</h1>
            <ul>
                {/* {place.name} */}
            </ul>
        </div>
    )
}

export default PlacesPage;
