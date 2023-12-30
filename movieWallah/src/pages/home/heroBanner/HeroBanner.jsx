import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./style.scss";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaPlay } from "react-icons/fa";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { InfinitySpin } from "react-loader-spinner";

import useFetch from "../../../hooks/useFetch";

import Img from "../../../components/lazyLoadImage/Img";
import { fetchDataFromApi } from "../../../utils/api";

const HeroBanner = () => {
  const navigate = useNavigate();
  const { url } = useSelector((state) => state.home);
  let { data, loading } = useFetch("/movie/now_playing");


  const navigationHandler = (data) => {
    navigate(`/movie/${data?.id}`);
  };

  const skItem = () => {
    return (
      <div className="skeletonItem skeleton">
        <InfinitySpin
          visible={true}
          width="200"
          color="#4fa94d"
          ariaLabel="infinity-spin-loading"
        />
      </div>
    );
  };


  return (
    <div className="heroBanner">
      {!loading ? (
        <>
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            {data?.results?.map((item) => {
              let backgroundImageURL = url?.backdrop + item.poster_path;
              return (
                <SwiperSlide
                  onClick={() => navigationHandler(item)}
                  key={item.id}
                >
                  <Img src={backgroundImageURL} />
                </SwiperSlide>
              );
            })}
          </Swiper>
          <div
            className="watchNowButton"
            onClick={() => {
              fetchVideo(item.id);
            }}
          >
            <span className="icon">
              <FaPlay className="fa" />
            </span>
            <span className="watchNowText">Watch Now</span>
          </div>
        </>
      ) : (
        skItem()
      )}
    </div>
  );
};

export default HeroBanner;
