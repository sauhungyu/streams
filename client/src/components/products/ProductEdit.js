import React from "react";
import _ from "lodash";
import { connect } from "react-redux";
import { fetchProduct, editProduct } from"../../actions";
import ProductForm from "./ProductForm";


class ProductEdit extends React.Component {

    componentDidMount() {

  this.props.fetchProduct(this.props.match.params.id);

    }

    onSubmit = (myFieldValues) => {
        console.log(myFieldValues);
        this.props.editProduct(this.props.match.params.id, myFieldValues);

    }


    render() {       

         if (!this.props.product) {
            return <div>...loading</div>;
        }
// specifiy stream as props to pass as initial values
// because stream contain all fields inside (here are title and desciption)
// as defined before in the initial values
        return (
       <div>
        <h3>Edit Product</h3>

      <ProductForm 
      initialValues ={_.pick(this.props.product, "product_name", "description", "product_image" )}
      onSubmit = {this.onSubmit} />
       </div>
        );
        
          
          }

    }

         
    

const mapStateToProps = (state, myTarget) => {
  //  console.log("myTarget" , myTarget);
return { product: state.products[myTarget.match.params.id] };

};



export default connect(mapStateToProps, {fetchProduct, editProduct})(ProductEdit);