import { csrfFetch } from './csrf';

const LOAD_REVIEWS = 'reviews/LOAD_REVIEWS';
const ADD_REVIEW = 'reviews/ADD_REVIEW';
const EDIT_REVIEW = 'reviews/EDIT_REVIEW';
const REMOVE_REVIEW = 'reviews/REMOVE_REVIEW';

const load = list => ({
    type: LOAD_REVIEWS,
    list
});

const addReview = (review) => ({
    type: ADD_REVIEW,
    review
});

const editReview = (review) => ({
    type: EDIT_REVIEW,
    review
});

const remove = (reviewId) => ({
    type: REMOVE_REVIEW,
    reviewId
})

// export const getReviews = () => async dispatch => {
//     const response = await fetch(`/api/places/:id`);

//     if(response.ok) {
//         const list = await response.json();
//         dispatch(load(list));
//     }
// };

export const createReview = (payload) => async (dispatch) => {
    const response = await csrfFetch(`/api/reviews/places/:id/`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(payload)
    });
    console.log(response)
    if(response.ok){
      const newReview = await response.json()
      dispatch(addReview(newReview))
      return newReview;
    }
    return response;
  }

  export const updateReview = (review) => async (dispatch) => {
    const response = await csrfFetch(`/api/editReviewForm/${review.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(review)
    })
    console.log(review)
    if (response.ok) {
      const editedReview = await response.json()
      dispatch(updateReview(editedReview))
      return editedReview;
    }

    return response;
  }

  export const deleteReview = (reviewId) => async (dispatch) => {
    const response = await csrfFetch(`/api/reviews/${reviewId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (response.ok) {
        const deletedReview = await response.json();
        dispatch(remove(reviewId));
        return deletedReview;
    }
    };

    const initialState = {}

    const reviewsReducer = (state = initialState, action) => {

        switch(action.type) {
            case LOAD_REVIEWS:
                const allReviews = {}
                action.list.forEach(review => {
                    allReviews[review.id] = review;
                });
                return {
                    ...allReviews,
                    ...state,
                }
            case ADD_REVIEW:
                if (!state[action.review.id]) {
                    const newState = {
                        ...state,
                        [action.review.id]: action.review
                    };
                    return newState;
                }
                return {
                    ...state,
                    [action.review.id]: {
                        ...state[action.review.id],
                        ...state.review
                    }
                }

            case EDIT_REVIEW:
                const newState = {...state, [action.review.id]: action.review};
                return newState;

            case REMOVE_REVIEW: {
                const newState = { ...state };
                delete newState[action.review];
                return newState;
            }
        default: return state;
        }
}

export default reviewsReducer;

// if (!state[action.review.id]) {
//     const newState = {
//         ...state,
//         [action.review.id]: action.review
//     };
//     return newState;
// }
// return {
//     ...state,
//     [action.review.id]: {
//         ...state[action.review.id],
//         ...state.review
//     }
// }
