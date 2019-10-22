import React from "react";
import { Link } from "react-router-dom";
import {connect} from "react-redux";
import { fetchStreams } from "../../actions";



class StreamList extends React.Component {
    // inside componentDidMount method we are calling
    // fetchStreams() action creator
    componentDidMount() {
      this.props.fetchStreams();
    }

// below this.props.currentUserId is from state.store variable as props
// from mapStateToProps
renderAdmin(stream) {
 
  return (
<div className="right floated content">
<Link to= {`/streams/edit/${stream.id}`} className="ui primary button">Edit</Link>

<Link to= {`/streams/delete/${stream.id}`} className="ui negative button">Delete</Link>



  </div>
  );
 
}

// below having converted state's object to an array
// then use map() to iterate rendering each stream.
// This means map() can only work on array not on object

renderList() {  
      return this.props.streams.map(stream => {              
       return (         
     <div className="item"  key = {stream.id}>      
         {this.renderAdmin(stream)}   
       <i className="blue large middle aligned icon camera" />
         <div className="content" >         
         <Link to = {`/streams/${stream.id}`} className="header" >{stream.title}</Link>
               <div className="description">{stream.description}</div> 
           </div>    
     </div>
          );
      });
    }
  

    


      render() {
       
        console.log(this.props.streams);

        
        return (
        <div>
       <h2> Streams </h2>
       <div className="ui celled list">
        {this.renderList()}
        </div>
        
     


       
       </div>
       
               );
        }
      }

// test on output streams after state object to array conversion
   
    

const mapStateToProps = state => {
    // Object.values is js function to turn all the object's values
    // into an array
    // currentUserId : state.oAuth.userId
    // interpreted as currentUserId is coming from state.oAuth.userId
   return {streams : Object.values(state.streams)          
        
  };
};


export default connect(mapStateToProps, {fetchStreams}) (StreamList);
