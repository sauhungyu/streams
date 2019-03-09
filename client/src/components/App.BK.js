import React from "react";
import history from "../history";
//import { BrowserRouter, Route } from "react-router-dom";
// import a plain Router only required if custom history wanted
import { Router, Route } from "react-router-dom";

import StreamCreate from "./streams/StreamCreate";
import StreamList from "./streams/StreamList";
import StreamShow from "./streams/StreamShow";
import StreamEdit from "./streams/StreamEdit";
import StreamDelete from "./streams/StreamDelete";
import Header from "./Header";



// also BrowserRouter component no longer called
// but a plain router with props history added
const App = () => {

    return (
    <div className="ui container">
       

<Router history = {history}>
<div>
     <Header />  

<Route path="/" exact component={StreamList} />
<Route path="/streams/new" exact component={StreamCreate} />
<Route path="/streams/edit/:id" exact component={StreamEdit} />
<Route path="/streams/delete/:id" exact component={StreamDelete} />
<Route path="/streams/show" exact component={StreamShow} />

</div>
</Router>
</div>
          );
};


export default App;