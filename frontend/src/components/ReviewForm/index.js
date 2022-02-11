import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";


function ReviewForm() {
  const dispatch = useDispatch();
//   const sessionUser = useSelector((state) => state.session.user);
  const [review, setReview] = useState("");

  return (
      <h1>Hi</h1>
      );
    };

    export default ReviewForm;



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
