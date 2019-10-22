import React, {Component, Fragment} from "react";
import {connect} from "react-redux";
import { fetchProducts } from "../../actions";



class ProductList extends Component {
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
        <Fragment>
        <div className="col-sm-6 col-md-4 product">
          <div className="product-container border-gray rounded border mx-2 my-3 d-flex flex-row align-items-center p-0 bg-light">
            <div className="h-100 position-relative border-gray border-right px-2 bg-white rounded-left">
              <img
                src={product.product_image} 
                className="d-block h-100"              
              />
            </div>
            <div className="px-3">
              <span className="product-name text-dark d-block font-weight-bold">
              {product.product_name}
              </span>
              <span className="product-description text-secondary text-uppercase">
              {product.description}
              </span>
              <span className="product-price text-secondary text-uppercase">
              {product.price}
              </span>
            
            </div>
          </div>
        </div>
      </Fragment>
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
