import axios from 'axios'; 


export const START_FETCHING = 'START_FETCHING';
export const FETCH_SUCCESS = 'FETCH_SUCCESS'; 
export const FETCH_FAILURE = 'FETCH_FAILURE'; 
export const ADD_SMURF = 'ADD_SMURF';   


export const fetchSmurfs = () => dispatch => {
    dispatch({ type: START_FETCHING }); 

    axios.get(`http://localhost:3333/smurfs`)
    .then(r =>{console.log(r.data); dispatch({ type: FETCH_SUCCESS, payload: r.data})})
    .catch(error => dispatch({ type: FETCH_FAILURE, payload: error.response})); 
}

