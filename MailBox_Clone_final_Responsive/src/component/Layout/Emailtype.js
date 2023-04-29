import React from "react";
import "../../CSS/emaillist.css";
import InboxIcon from "@mui/icons-material/Inbox";
import PeopleIcon from "@mui/icons-material/People";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";

function Emailtype() {
  return (
    <div className="emailtype">
      <div className="emailtype__options  emailtype__options--active">
        <InboxIcon />
        <p>Primary</p>
      </div>
      <div className="emailtype__options">
        <PeopleIcon />
        <p>Social</p>
      </div>
      <div className="emailtype__options">
        <LocalOfferIcon />
        <p>Permotions</p>
      </div>
    </div>
  );
}

export default Emailtype;
