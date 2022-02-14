import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { getPlaceById, getPlaceList } from "../../store/places";
import { deletePlace } from "../../store/places";
import { useHistory } from "react-router-dom";
import { deleteReview } from "../../store/reviews";
import "./placeDetailPage.css";


function PlaceDetailPage() {
    const dispatch = useDispatch();
    const history = useHistory();
    const { placeId } = useParams();
    const user = useSelector((state) => state.session.user);
    const place = useSelector(state => (state.places[placeId]));
    const reviews = useSelector(state => (place.Reviews))
    console.log(reviews)



    const removePlace = async (e) => {
        await dispatch(deletePlace(placeId));
        dispatch(getPlaceList(place?.id));
        history.push("/places")
    }

    // const removeReview = async (e) => {
    //     await dispatch(deleteReview(reviews.id));
    //     dispatch(getPlaceList(place?.id));
    //     history.push("/places")
    // }

    useEffect(() => {
        dispatch(getPlaceList(user?.id))
    }, [dispatch]);
    if(!place) return null;
    return (
        <div>
            <h1>{place.name}</h1>
            <img className="image" src={place.imageUrl} alt="" />
            <ul>{place.address}</ul>
            <ul>
            {place.city}, {place.state}
            </ul>
            <ul>Per Night:  ${place.price}</ul>
            <NavLink to={`/editForm/${place.id}`}>
                <button>Edit</button>
            </NavLink>
            <button onClick={removePlace}>Delete</button>
            <h2>Reviews</h2>
            {place?.Reviews?.map(review => (
                <NavLink to={`/editReviewForm/${place.id}/${review.id}`}>
                <li key={review.id}>{review.content}
                {/* <button onClick={removeReview(review.id)}>Delete</button> */}
                </li>
                </NavLink>

            ))}
            <NavLink to={`/reviews/places/${place.id}`}>
            <button>Review</button>
            </NavLink>
        </div>
    )
}

export default PlaceDetailPage;


// const reviews = useSelector(state => {
    //     return Object.values(state.reviews)
    // })


    // useEffect(() => {
    //     dispatch(getReviews())
    //   }, [dispatch]);

    //   useEffect(() => {
    //     dispatch(getPlaceById(placeId))
    //   }, [placeId, dispatch]);
    // place.Review.map()
