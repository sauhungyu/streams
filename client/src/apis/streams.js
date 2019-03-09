import axios from "axios";



export default axios.create({

// don't need endpoint /posts or /users only enter when we
// access it 
    baseURL: "http://localhost:3001"
});