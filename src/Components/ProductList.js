import React from "react";
import ProductCard from "./ProductCard";

const ProductList = (props) => {
    console.log(props)

  return <div>
 {
    props.list.map((item,i)=><ProductCard key={i} product={item} handlee={props.handle} />)
 }
  </div>;
};

export default ProductList;
