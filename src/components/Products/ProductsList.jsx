import React from "react";
import ProductContext from "../../contexts/productContext";
import ProductCard from "./ProductCard";
import Loader from "../../utils/Loader";
import {
  Container,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Box
} from "@chakra-ui/react";

const ProductsList = () => {
  const productContext = React.useContext(ProductContext);
  const { getProducts, productPosts, loading, error } = productContext;

  React.useEffect(() => {
    getProducts();
  }, []);

  let products = productPosts.sponsoredProducts;

  //console.log("DATA Products:", productPosts);

  if (error) {
    return (
      <Alert status="error">
        <AlertIcon />
        <Box flex="1">
          <AlertTitle mr={2}>Oops! {error}</AlertTitle>
          <AlertDescription display="block">
            <b>Bad Request error</b> is something that happens when a bad
            request is sent to get the Data is somehow incorrect or corrupted
            request was send to the server and the server couldn't understand
            it.
          </AlertDescription>
        </Box>
      </Alert>
    );
  }

  if (!loading && (!products || products.length === 0)) {
    return (
      <Alert status="warning" textAlign="center">
        <AlertIcon />
        Unable to access data at this time, please check back soon.
      </Alert>
    );
  }

  //This solves TypeError: Cannot read property ‘map’ of undefined
  let productsToRender;

  //console.log("DATA Products:", productPosts);

  if (products) {
    productsToRender = products.map((product) => {
      //console.log("DATA Product list:", product);
      return <ProductCard product={product} key={product.asin} />;
    });
  } else {
    productsToRender = <Loader />;
  }

  return (
    <Container maxW={"7xl"} p="12">
      {loading && <Loader />}
      {productsToRender}
    </Container>
  );
};

export default ProductsList;
