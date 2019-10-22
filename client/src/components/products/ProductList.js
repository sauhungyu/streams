import React from "react";
import {connect} from "react-redux";
import { fetchProducts } from "../../actions";



class ProductList extends React.Component {
    // inside componentDidMount method we are calling
    // fetchStreams() action creator
    componentDidMount() {
      this.props.fetchProducts();
    }

// below this.props.currentUserId is from state.store variable as props
// from mapStateToProps


// below having converted state's object to an array
// then use map() to iterate rendering each stream.
// This means map() can only work on array not on object

renderList() {  
  
  return this.props.products.map(product => { 
   
      return (
 <div className="item"  key = {product.id}>   
<div className="image"><img src={product.product_image} /> </div> 
<div className="header" >{product.product_name}</div>
<div className="description">{product.description}</div>
 <div className="price">{product.price}</div>

<div className="content" >

       </div>  
       
 </div>
     )

  });      
    
    }

      render() {       
        console.log(this.props.products);        
        return (
        <div>
       <h2> All Products </h2>
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
   return {products : Object.values(state.products)          
        
  };
};


export default connect(mapStateToProps, {fetchProducts}) (ProductList);
