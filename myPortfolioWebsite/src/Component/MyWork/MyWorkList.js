import React from "react";
import Card from "react-bootstrap/Card";
import img from "../Assests/pexels-photo-1553783.webp";
import "./MyWork.css";
import Button from "react-bootstrap/Button";
import AOS from "aos";
import "aos/dist/aos.css";

function MyWorkList(props) {
  AOS.init({
    offset: 300,
    duration: 1000,
  });
  return (
    <Card className="bg-dark text-white cards" data-aos="zoom-out-up">
      <Card.Img src={props.src} alt="Card image" />
      <Card.Body>
        <Card.Link href={props.chref} target="blank">
          <button className="btn btn-primary" variant="primary">
            Github
          </button>
        </Card.Link>
        <Card.Link href={props.dhref} target="blank">
          <button className="btn">Live Demo</button>
        </Card.Link>
        <Card.Title>{props.workName}</Card.Title>
      </Card.Body>
    </Card>
  );
}

export default MyWorkList;
