import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { getPlaceById, getPlaceList } from "../../store/places";
import { deletePlace } from "../../store/places";
import { useHistory } from "react-router-dom";
import "./placeDetailPage.css";
import { getReviews } from "../../store/reviews";


function PlaceDetailPage() {
    const dispatch = useDispatch();
    const history = useHistory();
    const { placeId } = useParams();
    const place = useSelector(state => (state.places[placeId]));
    // const reviews = useSelector(state => {
    //     return Object.values(state.reviews)
    // })


    // useEffect(() => {
    //     dispatch(getReviews())
    //   }, [dispatch]);

      useEffect(() => {
        dispatch(getPlaceById(placeId))
      }, [placeId, dispatch]);

      if(!place) return null;

      const removePlace = async (e) => {
        await dispatch(deletePlace(placeId));
        dispatch(getPlaceList(place?.id));
        history.push("/places")
        }
        console.log(place.imageUrl)
    return (
        <div>
            <h1>{place.name}</h1>
            <img className="image" src={place.imageUrl} alt="" />
            <ul>{place.address}</ul>
            <ul>
            {place.city}, {place.state}
            </ul>
            <ul>Per Night:  ${place.price}</ul>
            <h2>Reviews</h2>
                <li></li>

            <NavLink to={`/reviews/places/${place.id}`}>
            <button>Review</button>
            </NavLink>
            <NavLink to={`/editForm/${place.id}`}>
                <button>Edit</button>
            </NavLink>
            <button onClick={removePlace}>Delete</button>
        </div>
    )
}

export default PlaceDetailPage;
