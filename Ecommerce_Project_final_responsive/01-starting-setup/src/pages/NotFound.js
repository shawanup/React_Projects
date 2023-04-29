import React from "react";
import classes from "./NotFound.module.css";

const NotFound = () => {
  console.log('in not found')
  return (
    <div className={classes.notfound}>
      <h3>404 page not found</h3>
      <p>We are sorry but the page you are looking for does not exist.</p>
    </div>
  );
};

export default NotFound;
