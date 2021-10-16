import React, { useReducer, useState } from "react";
import applyCaseMiddleware from "axios-case-converter";
import axios from "axios";
import { toast } from "react-toastify";

import ProductContext from "./productContext";
import productReducer from "../reducers/productReducer";

// set up the request parameters
const params = {
  api_key: "demo",
  amazon_domain: "amazon.com",
  type: "product",
  asin: "B073JYC4XM"
};

const options = {
  ignoreHeaders: true
};

const client = applyCaseMiddleware(
  axios.create({
    baseURL: "https://api.rainforestapi.com"
  }),
  options
);

const ProductProvider = (props) => {
  const initialState = {
    productPosts: [],
    currentProduct: null,
    loading: true,
    error: false
  };

  const [state, dispatch] = useReducer(productReducer, initialState);

  // Get all Posts
  const getProducts = async () => {
    // This cleans up the Effect Hook function which runs when a component unmount
    let didCancel = false;

    try {
      dispatch({ type: "SENDING_REQUEST" });
      const res = await client.get("/request", { params });
      const data = await res.data;
      if (!didCancel) {
        dispatch({ type: "REQUEST_FINISHED" });
        dispatch({ type: "SET_POSTS", payload: data });
      }
      //console.log('Check Data Coming:',  data)
    } catch (err) {
      if (!didCancel) {
        dispatch({
          type: "REQUEST_ERROR",
          error: "Could not retrieve Products: " + err.message
        });
      }
      console.log(err);
      toast.error(err.response?.data?.err || err.message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
      });
    }
  };

  // Get Product by id
  const getProductById = async (id) => {
    try {
      dispatch({ type: "SENDING_REQUEST" });
      const res = await client.get(`/request/${id}`, { params });
      const data = await res.data;
      dispatch({ type: "REQUEST_FINISHED" });
      dispatch({ type: "SET_POST", payload: data });
    } catch (err) {
      console.log(err);
      toast.error(err.response?.data?.err || err.message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
      });
    }
  };

  // Delete Post by id
  const deleteProductById = async (id) => {
    try {
      dispatch({ type: "SENDING_REQUEST" });
      const res = await client.delete(
        `/request/${id}`,
        { params },
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
      const data = await res.json();
      dispatch({ type: "REQUEST_FINISHED" });
      dispatch({ type: "SET_POST", payload: data });
    } catch (err) {
      console.log(err);
      toast.error(err.response?.data?.err || err.message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
      });
    }
  };

  return (
    <ProductContext.Provider
      value={{
        productPosts: state.productPosts,
        currentProduct: state.currentProduct,
        isLoading: state.isLoading,
        isError: state.isError,
        getProducts: getProducts,
        getProductById,
        deleteProductById
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
