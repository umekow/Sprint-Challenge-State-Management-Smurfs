import React from 'react'; 

import axios from 'axios'; 

const initialState = {
    village = [], 
    isFetching: false, 
    error: ''
}; 

export const SmurfReducer = (state = initialState, action) => {
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
                viallge: action.payload
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