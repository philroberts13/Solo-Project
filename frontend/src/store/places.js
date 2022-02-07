import { csrfFetch } from './csrf';

const PLACES_LIST = 'places/PLACES_LIST';
const ADD_PLACE = 'places/ADD_PLACE';

const load = list => ({
    type: PLACES_LIST,
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
        dispatch(load(list));
    }
};

const initialState = {
    list: [],
}

const placesReducer = (state = initialState, action) => {
    switch(action.type) {
        case PLACES_LIST:
            const allPlaces = {}
            action.list.forEach(place => {
                allPlaces[place.id] = place;
            });
            return {
                ...allPlaces,
                ...state,
            }
    }
}

export default placesReducer;
