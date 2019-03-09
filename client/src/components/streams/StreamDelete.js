import React from "react";
import Modal from "../Modal"; 
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchStream, deleteStream } from"../../actions";
import history from "../../history";

// React.Fragment is used for purpose of treating it as invisible element
// without impact on DOM such as <div> inside <div> 
// check to remove it(React.Fragment) replace it with <div></div> 
// will see the ugly effect
// <React.Fragment></React.Fragment> can be simplified by using <> </>
// some quality checker find this invalid JSX so better use <React.Fragment>

// console.log(this.props) to refresh your memory to obtain match.params.id properties 
class StreamDelete extends React.Component {

    componentDidMount() {
        console.log(this.props);
        this.props.fetchStream(this.props.match.params.id);
          }  


renderActions() {        

    //const id = this.props.match.params.id;
    // further destructed as 
  const { id } = this.props.match.params;

  return (  
  <React.Fragment>
    <button 
    onClick ={() => this.props.deleteStream(id)} 
    className="ui negative button">Delete
    </button>

    <Link to ="/" className="ui button">Cancel</Link>
  </React.Fragment>
    );
 }

 
 renderContent() {
    if(!this.props.stream){
        return "Are you sure you want to delete this stream?"
    }
return `Are you sure ou want to delete this stream with title:${this.props.stream.title}`
}




render() {


    // Modal
return (
    <Modal title = "Delete Stream"
   content = {this.renderContent()}
    actions = {this.renderActions()}
    onExit = {() => history.push("/")}    
         />

);
} 

}

const mapStateToProps = (state, myTarget) => {
    console.log("myTarget" , myTarget);
return { stream: state.streams[myTarget.match.params.id] };
};



export default connect(mapStateToProps, {fetchStream, deleteStream})(StreamDelete);
