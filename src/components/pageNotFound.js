import React from "react";
import CustomNavbar from "./navbar"

const PageNotFound = () => {
  return (
    <div>
    <CustomNavbar color="black" />
    <div className="justify-content-center d-flex ">
    <div className="page-not-found">
        <h1 className="display-4">404 Page not found</h1>
        <p style={{textAlign: "center"}} className="lead">Sorry, that page does not exist</p>
    </div>
    </div>
    </div>
  );
};

export default PageNotFound;



