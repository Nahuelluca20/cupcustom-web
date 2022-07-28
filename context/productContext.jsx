import {createContext, useContext} from "react";
import {useState} from "react";

const ProductContext = createContext();

export function AppContext({children}) {
  const [product, setProduct] = useState([]);
  const [category, setCategory] = useState("all");
  const [inputText, setInputText] = useState("");

  const inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();

    setInputText(lowerCase);
  };

  const addProduct = (productAdd) => {
    setProduct((product) => product.concat(productAdd));
  };

  const changeCategory = (categoryChange) => {
    setCategory(categoryChange);
  };

  return (
    <ProductContext.Provider
      value={{product, addProduct, category, changeCategory, inputHandler, inputText}}
    >
      {children}
    </ProductContext.Provider>
  );
}
export function useProductContext() {
  return useContext(ProductContext);
}
