import React from "react";
import { connect } from "react-redux";
import { fetchStream, deleteStream } from"../../actions";
import StreamForm from "./StreamForm";

class StreamDelete extends React.Component {
    componentDidMount() {
  this.props.fetchStream(this.props.match.params.id);
    }

    onSubmit = (myFieldValues) => {
        //console.log(myFieldValues);
        this.props.deleteStream(this.props.match.params.id, myFieldValues);
    }

    render() {       
        if (!this.props.stream) {
            return <div>loading...</div>;
        }

         return (
       <div>
        <h3>Delete Stream</h3>

        <StreamForm 
        initialValues ={this.props.stream}
        onSubmit = {this.onSubmit} />
       </div>
        );       
          }
    }  
    

const mapStateToProps = (state, myTarget) => {
    console.log("myTarget" , myTarget);
return { stream: state.streams[myTarget.match.params.id] };
};

export default connect(mapStateToProps, {fetchStream, deleteStream})(StreamDelete);