import { csrfFetch } from './csrf';

const LOAD_PLACES = 'places/LOAD_PLACES';
const ADD_PLACE = 'places/ADD_PLACE';
const LOAD_ONE = 'places/LOAD_ONE'

const load = list => ({
    type: LOAD_PLACES,
    list
});

const addPlace = (place) => ({
    type: ADD_PLACE,
    place
})

const onePlace = list => ({
    type: LOAD_ONE,
    list
})

export const getPlaceList = () => async dispatch => {
    const response = await fetch('/api/places');

    if(response.ok) {
        const list = await response.json();
        dispatch(load(list));
    }
};


export const getPlaceById = (id) => async (dispatch) => {
    const response = await fetch(`/api/places/${id}`);
    if(response.ok) {
        let list = await response.json();
        console.log(list)
        dispatch(onePlace(list));
    }

    return response;
}

export const createPlace = (payload) => async (dispatch) => {
    const response = await csrfFetch('/api/placesForm', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(payload)
    })
    console.log(response)
    if(response.ok){
      const newPlace = await response.json()
      dispatch(addPlace(newPlace))
      return newPlace;
    }
    return response;
  }

const initialState = {}

const placesReducer = (state = initialState, action) => {

    switch(action.type) {
        case LOAD_PLACES:
            const allPlaces = {}
            action.list.forEach(place => {
                allPlaces[place.id] = place;
            });
            return {
                ...allPlaces,
                ...state,
            }
        case LOAD_ONE:
            const place = {...state}
            let newList = {}
            newList[action.list.id] = action.list
            place.list = newList
            return place;

        case ADD_PLACE:
          if (!state[action.place.id]) {
            const newState = {
                ...state,
                [action.place.id]: action.place
            };
            return newState;
        }
        return {
            ...state,
            [action.place.id]: {
                ...state[action.place.id],
                ...state.place
            }
        }
        default: return state;
    }
}

export default placesReducer;


// const placeList = newState.list.map(id => newState[id]);
// placeList.push(action.place);
// newState.list = placeList;
