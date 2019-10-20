import React from 'react'; 

import { START_FETCHING, FETCH_SUCCESS, FETCH_FAILURE, ADD_SMURF} from '../actions'

const initialState = {
    village : [], 
    isFetching: false, 
    error: ''
}; 

const reducer = (state = initialState, action) => {
    console.log(action, state); 
    switch (action.type) {
        case START_FETCHING: 
            return {
                ...state, 
                isFetching: true, 
                error: ''
            }; 
        case FETCH_SUCCESS: 
            return {
                ...state, 
                isFetching: false, 
                error: '', 
                village: action.payload
            }; 
        case FETCH_FAILURE: 
            return {
                ...state, 
                error: action.payload, 
                isFetching: false, 
            }; 
     

        default:
            return state; 
    }
}; 

export default reducer; 