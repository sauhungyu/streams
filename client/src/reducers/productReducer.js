import {
    FETCH_PRODUCTS,
    FETCH_PRODUCT,
    EDIT_PRODUCT
} from "../actions/types";
// below import to use _omit()
import _ from "lodash";


export default (state={}, action) => {
switch(action.type) {

    case FETCH_PRODUCTS:
    return {...state, ..._.mapKeys(action.payload, "id")}; 
    // above line syntax means form a new object from current
    //state object plus lodash_converted function mapKeys which
    // turned api return-array [ ]into one big state object{ } with index    
    // altogether included in the big whole object 
    // why turn [] to {} to simplify coding

    case FETCH_PRODUCT:
    return {...state, [action.payload.id]: action.payload};

    case EDIT_PRODUCT:
    return {...state, [action.payload.id]: action.payload};

    

    default:
    return state;

} 
}

