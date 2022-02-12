import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {useHistory, useParams} from 'react-router-dom';
import { createReview } from '../../store/reviews'


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

    const handleSubmit = (e) => {
        e.preventDefault();
        const newReview = {
            content,
            userId,
            placeId
        };

        console.log(newReview)
    let createdReview = dispatch(createReview(newReview));


        history.push(`/places/${placeId}`)
    };

    if (!user || !user.id) return null;

  return (
      <div>
      <h1>Hi</h1>
      <form>
        <label>
        <input
          type="text"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          />
      </label>
      <button onClick={handleSubmit} type="submit">Submit</button>
    </form>
    </div>
      );
    };

export default ReviewForm;


// const payload = { userId: user.id, content: content, placeId: idNum[0]}
//         let createdReview = dispatch(createReview(payload))
//         console.log(payload)


// return (
//     <h1>HI</h1>
// )


    // const [errors, setErrors] = useState([]);

    // if (sessionUser) return <Redirect to="/" />;

    // const handleSubmit = (e) => {
    //   e.preventDefault();
    //     setErrors([]);
    //     return dispatch(.({ review }))
    //       .catch(async (res) => {
    //         const data = await res.json();
    //         if (data && data.errors) setErrors(data.errors);
    //       });
    //   }
    //   return setErrors(['Need a review!']);

    //     <form className=".signup-form"onSubmit={handleSubmit}>
    //   <ul>
    //     {errors.map((error, idx) => <li key={idx}>{error}</li>)}
    //   </ul>
    //   <label>
    //     <input
    //       type="text"
    //       value={review}
    //       onChange={(e) => setReview(e.target.value)}
    //       required
    //       />
    //   </label>
    //   <button type="submit">Submit</button>
    // </form>
