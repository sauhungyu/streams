import React from "react";
import history from "../history";
//import { BrowserRouter, Route } from "react-router-dom";
// import a plain Router only required if custom history wanted
import { Router, Route, Switch } from "react-router-dom";


import ProductList from "./products/ProductList";
//import StreamShow from "./streams/StreamShow";
import ProductEdit from "./products/ProductEdit";




//import Header from "./Header";

// Switch applies to exact route if even a variable match :id (=variable)
// will no longer direct to two routes at the same time
// else /new and /:id will have this issue

// also BrowserRouter component no longer called
// but a plain router with props history added
const App = () => {

    return (
    <div className="ui container">
       

<Router history = {history}>
<div>

<Switch>
<Route path="/" exact component={ProductList} />
<Route path="/products/edit/:id" exact component={ProductEdit} />


</Switch>

</div>
</Router>
</div>
          );
};


export default App;