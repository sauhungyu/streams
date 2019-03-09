import streams from "../apis/streams";
import history from "../history";


import { 
    SIGN_IN,  
    SIGN_OUT, 
    CREATE_STREAM, 
    FETCH_STREAMS,
    FETCH_STREAM, 
    DELETE_STREAM, 
    EDIT_STREAM 
} from "./types";

export const signIn =  userId => {

    return {

        type: SIGN_IN,
        payload: userId
    };
};


export const signOut = () => {

    return {

        type: SIGN_OUT
    };
};



// ** all action creators below following api restful convention **


// create action-creator involving all the form elements as argument
// with network access over api server using axios calling streams, see apis>streams
// waiting for response(with data we are interested only from entire object) from api server
// function that redux thunk allow us to two argement(dispatch, getState)
// dispatch is to dispatch action to reducer, getState() allowed to pullout
// state store's info such as oAuth's userId, so below refactor to 2 args
// and destruct out userId from state's oAuth

export const createStream = (myFieldValues) => async (dispatch, getState) => {
 const { userId } = getState().oAuth;
 // also add in all ...formValues with userId when creating a stream as well
 // inspect this change in redux dev-tool > state
    const response = await streams.post("/streams", {...myFieldValues, userId});

// dispatch action with type and payload to reducer
dispatch({type: CREATE_STREAM, payload: response.data});
//do some programmatic navigation after creating a stream
// to get user back to the root router
// now history is custom route object we can add generic route to it as a props "/" 
// by push()
history.push('/');

};


export const fetchStreams = () => async dispatch => {
    const response = await streams.get("/streams");
    
    // dispatch action with type and payload to reducer
    dispatch({type: FETCH_STREAMS, payload: response.data});
    };
    
    export const fetchStream = (id) => async dispatch => {
        const response = await streams.get(`/streams/${id}`);
        
        // dispatch action with type and payload to reducer
        dispatch({type: FETCH_STREAM, payload: response.data});
        };

     // **update include input values changes so myFieldValues included
     export const editStream = (id, myFieldValues) => async dispatch => {

      //** */const response = await streams.put(`/streams/${id}`, myFieldValues);     
     // replacing above restful update by patch instead of put because
     // put will replace all stream's props(id, userID, title, description by
     // only title and description,  patch will make all props intact
     // that is why those updated by put() had lost Edit and Delete buttons
      const response = await streams.patch(`/streams/${id}`, myFieldValues);

      // dispatch action with type and payload to reducer
     dispatch({type: EDIT_STREAM, payload: response.data});

     history.push("/");

            };
        
    // ** delete carried no response and payload return deleted id
     export const deleteStream = (id) => async dispatch => {
     await streams.delete(`/streams/${id}`);                      
     // dispatch action with type and payload to reducer
     dispatch({type: DELETE_STREAM, payload: id});
     
     history.push("/");
        };      

