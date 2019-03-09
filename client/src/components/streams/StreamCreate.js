import React from "react";
import {connect} from "react-redux";
import {createStream} from "../../actions";
import StreamForm from "./StreamForm";


class StreamCreate extends React.Component {
 
// on Submit will be passed down to StreamForm component as a props
// to get down to create a stream through StreamForm,
// and this onSubmit is calling action-creator to createStream
// with myFieldValues entered
onSubmit = (myFieldValues) => {
   this.props.createStream(myFieldValues);

};

render() {
    return (
    <div>
        <h3>Create Stream</h3>

        <StreamForm onSubmit = {this.onSubmit} />

    </div>


    )
};


   
}


export default connect(null, {createStream})(StreamCreate);
