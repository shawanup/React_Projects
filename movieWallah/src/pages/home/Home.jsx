import React from "react";

import "./style.scss";

import HeroBanner from "./heroBanner/HeroBanner";
import Trending from "./trending/Trending";
import Popular from "./popular/Popular";
import TopRated from "./topRated/TopRated";
import Trailer from "./trailer/Trailer";

const Home = () => {
    return (
        <div className="homePage">
            <HeroBanner />
            <Trailer />
            <Trending />
            <Popular />
            <TopRated />
        </div>
    );
};

export default Home;
