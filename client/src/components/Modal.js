import React from "react";
import ReactDOM from "react-dom";



// Modal use special Semantic ui CSS styling
// click any where outside modal return back to streamList page ("/")
// click anywhere within modal accidentally propagate to upper div event
// handler so trigger to streamList again but we don't want this
// resolve by e.stopPropagation() event handler
// **** below (props) means it is object container of all properties  ****
// for instance, title is one from other component streamEdit like so
const Modal = (props) => {
    
return ReactDOM.createPortal(

<div onClick={props.onExit} className = "ui modals dimmer visible active">
 
     <div onClick={(e) => e.stopPropagation()} className = "ui modal standard visible active">

<div className ="header">{props.title}</div>
<div className="content">{props.content}</div>

   <div className="actions">{props.actions}</div>
       </div>
</div>, 

document.querySelector("#modal")

);
};


export default Modal;





