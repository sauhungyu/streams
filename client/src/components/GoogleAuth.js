import React from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "../actions";

class GoogleAuth extends React.Component {
    // state = {isSignedIn: null};
    // no more state initialization after adding mapStateToProps 
    // to get the real state store
    // turning to a call back function after successful
    // api network access; the
    // callback initializes the api library with two object's parameters: 
    // clientId and scope : type of service to access
    // since init() is async network request to google api server
    // the call itself return a promise whether the init() action is ready
    // to go or not by .then()
componentDidMount() {
    // ( , ) means wait needed for loading api library and hence need a callback function
   window.gapi.load("client: auth2", () => {
window.gapi.client.init(
{clientId: "484698584788-ni1uk07qmv8okcii1h8ana6acf57090s.apps.googleusercontent.com",
    scope: "email"
}).then(() => {
    this.oAuth = window.gapi.auth2.getAuthInstance();  
   // this.setState({isSignedIn : this.oAuth.isSignedIn.get()});
// don't need setState above line after mapStateToProps instead use function to take
// onAuthChange as argument to do signIn or signOut when isSignedIn is caught
 
this.onAuthChange(this.oAuth.isSignedIn.get());
  
// in api script isSignedIn has more options than just .get()
    // it has .listen() and 
    // below line is function listen to the change of Authentication
    // by checking boolean arg(true /false)isSignedIn.get() and then update State 
   this.oAuth.isSignedIn.listen(this.onAuthChange);   
});

   });
   
};


// this is eventlistening function and so need a 
// callback function that uses arrow function
// below to replace with action creators  for argument isSignedIn
// true (action creator - signOut) or false(action creator - signIn)
//onAuthChange = (isSignedIn) => {
//   this.setState({ isSignedIn: this.oAuth.isSignedIn.get()});
// };


onAuthChange = (isSignedIn) => {
 if(isSignedIn) {
      // not just get who is signedIn or not but his/her userId as well
      // the whole api instruction code: gapi.auth2.getAuthInstance().currentUser.get().getId();
      // also pass this userId to action creator as payload property
      this.props.signIn(this.oAuth.currentUser.get().getId());
  } else {
      this.props.signOut();
  }
 };



onSignInClick = () => {
    // call to original gapi .commands i.e. window.gapi.auth.getAuthInstance()
    // which assigned as this.oAuth and attach by .signIn() 
this.oAuth.signIn();
};

onSignOutClick = () => {
  // call to original gapi .commands i.e. window.gapi.auth.getAuthInstance()
      // which assigned as this.oAuth and attach by .signOut() 
    this.oAuth.signOut();
};


renderAuthButton() {
    if(this.props.isSignedIn === null) {
        return null;
    }
    else if (this.props.isSignedIn) {
        return (
            <button onClick={this.onSignOutClick} className="ui red google button">
            <i className="google icon" />
            Sign Out
            </button>
        )
    }
    else {
           return (
        <button  onClick={this.onSignInClick} className="ui red google button">
        <i className="google icon" />
        Sign In with Google
        </button>
        );
    }
}
    render () {
        return <div> {this.renderAuthButton()}</div>;
    }
}
// initially assume null to mapStateToProps, only action creators
// once signIn oe signOut is implemented result will connect
// to component GoogleAuth as props

const mapStateToProps = state => {

     return { isSignedIn : state.oAuth.isSignedIn };
    

};

export default connect(mapStateToProps, {signIn, signOut}) (GoogleAuth);
