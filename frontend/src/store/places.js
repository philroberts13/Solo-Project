import { csrfFetch } from './csrf';

const LOAD_PLACES = 'places/LOAD_PLACES';
const ADD_PLACE = 'places/ADD_PLACE';

const load = list => ({
    type: LOAD_PLACES,
    list
});

const addPlace = place => ({
    type: ADD_PLACE,
    place
})

export const getPlaceList = () => async dispatch => {
    const response = await fetch('/api/places');

    if(response.ok) {
        const list = await response.json();
        console.log(list);
        dispatch(load(list));
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
        default: return state;
    }
}

export default placesReducer;
