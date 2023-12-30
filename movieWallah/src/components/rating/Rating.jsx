import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { FaStar } from "react-icons/fa";
import "./style.scss";

const Rating = ({ rating }) => {
    return (
        <div className="Rating">
            <FaStar /><span>{rating}</span>
        </div>
    );
};

export default Rating;
