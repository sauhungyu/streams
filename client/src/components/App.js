import React from "react";
import history from "../history";
//import { BrowserRouter, Route } from "react-router-dom";
// import a plain Router only required if custom history wanted
import { Router, Route, Switch } from "react-router-dom";

import StreamCreate from "./streams/StreamCreate";
import StreamList from "./streams/StreamList";
import StreamShow from "./streams/StreamShow";
import StreamEdit from "./streams/StreamEdit";
import StreamDelete from "./streams/StreamDelete";
import Header from "./Header";

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
     <Header />  

<Switch>
<Route path="/" exact component={StreamList} />
<Route path="/streams/new" exact component={StreamCreate} />
<Route path="/streams/edit/:id" exact component={StreamEdit} />
<Route path="/streams/delete/:id" exact component={StreamDelete} />
<Route path="/streams/:id" exact component={StreamShow} />
</Switch>

</div>
</Router>
</div>
          );
};


export default App;