import products from "../apis/products";
import history from "../history";

// types is designed to let user avoid typo between action creator and reducer
// result in both not have identical strings to cause huge bugs in coding
import { 
    
  
    FETCH_PRODUCTS,
    FETCH_PRODUCT, 
    EDIT_PRODUCT 
} from "./types";



export const fetchProducts = () => async dispatch => {
    const response = await products.get("/products");
    
    // dispatch action with type and payload to reducer
    dispatch({type: FETCH_PRODUCTS, payload: response.data});
    };
    
    export const fetchProduct = (id) => async dispatch => {
        const response = await products.get(`/products/${id}`);
        
        // dispatch action with type and payload to reducer
        dispatch({type: FETCH_PRODUCT, payload: response.data});
        };

     // **update include input values changes so myFieldValues included
     export const editProduct = (id, myFieldValues) => async dispatch => {

      //** */const response = await streams.put(`/streams/${id}`, myFieldValues);     
     // replacing above restful update by patch instead of put because
     // put will replace all stream's props(id, userID, title, description by
     // only title and description,  patch will make all props intact
     // that is why those updated by put() had lost Edit and Delete buttons
      const response = await products.patch(`/products/${id}`, myFieldValues);

      // dispatch action with type and payload to reducer
     dispatch({type: EDIT_PRODUCT, payload: response.data});

     history.push("/");

            };
        
   
