import React from "react";
import { Link } from "react-router-dom";



const Header = () => {

    return (
    <div className="ui secondary pointing menu">
    <Link to="/" className="item">
    Product    
    </Link>
    
      <div className="right menu">
      <Link to="/" className="item">
      All Products
      </Link>

      
      
      </div>
       
        
        </div>
    );
};

export default Header;