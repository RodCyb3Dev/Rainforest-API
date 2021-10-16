import React from "react";
import Loader from "react-loader-spinner";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "./loader.css";

function Layout() {
  return (
    <div className="App">
      <div className="loading">
        <Loader
          type="Puff"
          color="#0084D5"
          height={100}
          width={100}
          //timeout={3000} //3 secs
        />
      </div>
    </div>
  );
}

export default Layout;
