import React from "react";
import { Field, reduxForm } from "redux-form";
//import {connect} from "react-redux";
//import {createStream} from "../../actions";
// this entire form duplicate 90% from StreamCreate

class StreamForm extends React.Component {

renderError ( { touched, error } )  {

if(touched && error) {
    return (
        <div className="ui error message">
        <div className="header">{error}</div>
        </div>
    )
}
}


renderInput = ( { input, label, meta }) => {
// using2015 synatax ` ` for if ..?  is true output : is false output
// console meta can see all its props such as error and touched
    const result =`field ${meta.error && meta.touched ? "error" : " "}`;
    
    console.log(meta);
    console.log({input});

         return (
         <div className={result} >
         <label>{label}</label>
         
         <input {...input} autoComplete="off" /> 

         {this.renderError(meta)}

         </div>
         )

        }

onSubmit = (myFieldValues) => {
   console.log(myFieldValues);
   this.props.onSubmit(myFieldValues);

}


// every prop like label passed but not recognised by Field component will
 //  only be passed on to render helper function renderInput to
 // know what is to handle with the props
    render() {
        console.log(this.props);
        return (
            // use className in the form tag make nicer display
 // handleSubmit is coming from props check out console.log
 <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
    
  <Field className="input" name="title" component={this.renderInput} label= "Enter title"/>
 <Field className="input" name="description" component={this.renderInput} label="Enter description" />


<button className="ui button primary">Submit</button>
    </form>
   
        );
    
}

}


const validate = (myFieldValues) => {
const errors = {};
    if(!myFieldValues.title) {
        // only ran if user did not enter a title
  errors.title = "You must enter a title";
    }

    if(!myFieldValues.description){
        errors.description = "You must enter a description";
    }

    return errors;
}




export default reduxForm(
    {form : "streamForm" ,  
    validate
    }
    )(StreamForm);
//export default connect(null, {createStream})(formWrapped);
