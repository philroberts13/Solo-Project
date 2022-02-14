import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {useHistory, useParams} from 'react-router-dom';
import { createReview } from '../../store/reviews'
import { getPlaceList } from "../../store/places";


const ReviewForm = () => {
    // const [formData, setFormData] = useState({ review: "" });
    const history = useHistory();
    const dispatch = useDispatch();
    const user = useSelector((state) => state.session.user);
    const userId = user.id
    const [content, setContent] = useState("");
    const {id} = useParams();
    const idNum = Object.values(id)
    const placeId = idNum[0]
    const place = useSelector(state => (state.places[placeId]));

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newReview = {
            content,
            userId,
            placeId
        };

        let createdReview = dispatch(createReview(newReview));

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
          onChange={(e) => setContent(e.target.value)}
          />
      </label>
      <button type="submit">Submit</button>
    </form>
    </div>
      );
    };

export default ReviewForm;
