import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {useHistory, useParams} from 'react-router-dom';
import { createReview, updateReview } from '../../store/reviews'
// import { getPlaceList } from "../../store/places";
import { deleteReview } from "../../store/reviews";
import { getPlaceList } from "../../store/places";


const EditReviewForm = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const user = useSelector((state) => state.session.user);
    const userId = user.id
    const {placeId} = useParams();
    const {reviewId} = useParams();

    const review = useSelector(state => (state.places[placeId].Reviews))
    const reviewStuff = (Object.values(review))
    console.log(placeId, reviewId)
    const [content, setContent] = useState(reviewStuff[0].content);
    const updateContent = (e) => setContent(e.target.value)

    const removeReview = async (e) => {
        await dispatch(deleteReview(reviewId));
        dispatch(getPlaceList(placeId));
        history.push("/places")
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newReview = {
            ...reviewStuff[0],
            content,
            userId,
            placeId
        };
        console.log(newReview)
        let createdReview = dispatch(updateReview(newReview));


        if (createdReview) {
            history.push(`/places/${placeId}`)

        }


        // await dispatch(getPlaceList(user?.id))
        // await dispatch(getPlaceList(place?.id))


    };

    if (!user || !user.id) return null;

  return (
      <div>
      <h1>Hi</h1>
      <form onSubmit={handleSubmit}>
        <label>
        <input
          type="text"
          value={content}
          onChange={updateContent}
          />
      </label>
      <button type="submit">Submit</button>
    </form>
      <button onClick={removeReview}>Delete</button>
    </div>
      );

    };

export default EditReviewForm;
