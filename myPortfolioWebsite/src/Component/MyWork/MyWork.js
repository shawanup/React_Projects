import React from "react";
import MyWorkList from "./MyWorkList";
import "./MyWork.css";
import MyWorkDetails from "./MyWorkDetails";

function MyWork() {
  return (
    <div className="myWork" id="portfolio">
      <h1>
        My <span>Work</span>
      </h1>
      <div className="myworklist">
        {MyWorkDetails.map((detail) => {
          return (
            <MyWorkList
              src={detail.src}
              chref={detail.chref}
              dhref={detail.dhref}
              workName={detail.workName}
            />
          );
        })}
      </div>
    </div>
  );
}

export default MyWork;
