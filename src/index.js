import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { ChakraProvider } from "@chakra-ui/react";

import App from "./App";
import ProductProvider from "./contexts/ProductProvider";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <ProductProvider>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </ProductProvider>
  </StrictMode>,
  rootElement
);
