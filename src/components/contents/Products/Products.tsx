import React, { useEffect } from "react";

function Products() {
  useEffect(() => {
    fetch("product.json")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  return <div></div>;
}

export default Products;
