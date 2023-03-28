import { useReducer } from "react";

function productReducer(products, action) {
  switch (action.type) {
    case "ADD_PRODUCT":
      return [...products, action.payload];
    case "UPDATE_PRODUCT":
      return products.map((product) => {
        if (product.id === action.payload.id) {
          return { ...product, ...action.payload };
        }
        return product;
      });
    case "DELETE_PRODUCT":
      return products.filter((product) => product.id !== action.payload);
    default:
      return products;
  }
}

function useProductList(initialProducts) {
  const [products, dispatch] = useReducer(productReducer, initialProducts);

  const addProduct = (newProduct) => {
    dispatch({ type: "ADD_PRODUCT", payload: newProduct });
  };

  const updProduct = (productId, updatedProduct) => {
    dispatch({
      type: "UPDATE_PRODUCT",
      payload: { id: productId, ...updatedProduct },
    });
  };

  const delProduct = (productId) => {
    dispatch({ type: "DELETE_PRODUCT", payload: productId });
  };

  return {
    products,
    addProduct,
    updProduct,
    delProduct,
  };
}

export default useProductList;
