// capital words means the value is true constant never modified whatsoever
import {SIGN_IN, SIGN_OUT } from "../actions/types";

const INITIAL_STATE = {
    isSignedIn: null, userId: null
};

export default (state = INITIAL_STATE, action) => {
    // switch to action_type
    switch (action.type) {
        case SIGN_IN : 
        // new array formed of two properties:
        // isSignedIn and userId from action creator's payload props put into the old array 
       return {...state, isSignedIn: true, userId:action.payload};

        case SIGN_OUT :
        return {...state, isSignedIn: false, userId: null};

        default:
        return state;
    }

};