import { csrfFetch } from './csrf';

const LOAD_PLACES = 'places/LOAD_PLACES';
const ADD_PLACE = 'places/ADD_PLACE';
const LOAD_ONE = 'places/LOAD_ONE'
const UPDATE_PLACE = 'places/UPDATE_PLACE'
const REMOVE_PLACE = 'places/REMOVE_PLACE'


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

const updatePlace = (place) => ({
    type: UPDATE_PLACE,
    place
})

const remove = (placeId) => ({
    type: REMOVE_PLACE,
    placeId
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
    if(response.ok){
      const newPlace = await response.json()
      dispatch(addPlace(newPlace))
      return newPlace;
    }
    return response;
  }

  export const editPlace = (payload) => async (dispatch) => {
    const response = await csrfFetch(`/api/editForm/${payload.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    })
    console.log(payload)
    if (response.ok) {
      const updatedPlace = await response.json()
      dispatch(updatePlace(updatedPlace))
      return updatedPlace;
    }

    return response;
  }

  export const deletePlace = (placeId) => async (dispatch) => {
    const response = await csrfFetch(`/api/places/${placeId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (response.ok) {
        const deletedPlace = await response.json();
        dispatch(remove(placeId));
        return deletedPlace;
    }
    };

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
        case UPDATE_PLACE:
            const newState = {...state, [action.place.id]: action.place};
            return newState;

        case REMOVE_PLACE: {
                const newState = { ...state };
                delete newState[action.placeId];
                return newState;
            }

        default: return state;
    }
}

export default placesReducer;


// const placeList = newState.list.map(id => newState[id]);
// placeList.push(action.place);
// newState.list = placeList;
