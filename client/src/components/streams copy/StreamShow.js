import React from "react";
import flv from "flv.js";
//import mp4 from "mp4.js";
import { connect } from "react-redux";
import { fetchStream } from "../../actions";



class StreamShow extends React.Component {
 
constructor(props) {
    super(props);
    this.videoRef = React.createRef();
}
// component first gets rendered 
    componentDidMount() {      
    const { id } = this.props.match.params;    
    console.log(this.videoRef);  
    this.props.fetchStream(id);
    this.buildPlayer();
    
    }
// component gets re-rendered at future time
 componentDidUpdate() {
     this.buildPlayer();
 }


componentWillUnmount() {
 console.log("I was unmounted");
  this.player.destroy();
  
}

 buildPlayer() {

if(this.player || !this.props.stream) {
    return; 
}

const { id } = this.props.match.params;  

this.player = flv.createPlayer({
    type: 'flv',
   url: `http://localhost:8000/live/${id}.flv`
     
});

//console.log(this.player.url);
this.player.attachMediaElement(this.videoRef.current);
this.player.load();   

 }

 

 
 render() {

   if(!this.props.stream) {
     return <div>Loading...</div>;
   }
     
// above code ensure first off it doesn't load stream 
// after awaiting it then load
// es2016 syntax to pull off title and description fromn
// this.props.stream.title and this.props.stream.description
// and shorten the syntax as below 

const { title, description} = this.props.stream;

     return (
         
         <div>
         <video ref = {this.videoRef} style={{width: "100%"}} controls={true}  />
         <h1>{title}</h1>
       <h5>{description}</h5>
       </div>
     );
         
}

};

const mapStateToProps = (state, myTarget) => {

   console.log("myTarget", myTarget);
    return {
       
      stream: state.streams[myTarget.match.params.id]
    }     
    
    }


export default connect(mapStateToProps, {fetchStream})(StreamShow);
