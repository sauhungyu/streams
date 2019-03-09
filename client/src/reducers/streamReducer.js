import {
    FETCH_STREAMS,
    FETCH_STREAM,
    CREATE_STREAM,
    DELETE_STREAM,
    EDIT_STREAM
} from "../actions/types";
// below import to use _omit()
import _ from "lodash";


export default (state={}, action) => {
switch(action.type) {

    case CREATE_STREAM  :
    return {...state, [action.payload.id]: action.payload};

    case FETCH_STREAMS:
    return {...state, ..._.mapKeys(action.payload, "id")}; 
    // above line syntax means form a new object from current
    //state object plus lodash_converted function mapKeys which
    // turned api return-array [ ]into one big state object{ } with index    
    // altogether included in the big whole object 
    // why turn [] to {} to simplify coding

    case FETCH_STREAM:
    return {...state, [action.payload.id]: action.payload};

    case EDIT_STREAM:
    return {...state, [action.payload.id]: action.payload};

    case DELETE_STREAM:
    return _.omit(state, action.payload);  // no id carried because action payload
    // already has id, read action creator index.file

    default:
    return state;

} 
}

