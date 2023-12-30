import React, { useState } from "react";

import "./style.scss";

import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import VideoPopup from "../../../components/videoPopup/VideoPopup";
import Img from "../../../components/lazyLoadImage/Img";
import { PlayIcon } from "../Playbtn";
import { useSelector } from "react-redux";
import useFetch from "../../../hooks/useFetch";
import { fetchDataFromApi } from "../../../utils/api";

const Trailer = () => {
  const [show, setShow] = useState(false);
  const [videoId, setVideoId] = useState(null);
  const { data, loading } = useFetch("/movie/now_playing");
  const { url } = useSelector((state) => state.home);

  const fetchVideo = (movie_id) => {
    fetchDataFromApi(`/movie/${movie_id}/videos`).then((resp) => {
      const [trailerVideo] = resp?.results?.filter(
        (item) => item.type === "Trailer" && item.name==="Official Trailer"
      );
      setVideoId(trailerVideo.key);
      setShow(true);
    });
  };
  const loadingSkeleton = () => {
    return (
      <div className="skItem skeleton">
      </div>
    );
  };

  return (
    <div className="videosSection">
      <ContentWrapper>
        <div className="sectionHeading">Latest Trailer</div>
        {!loading ? (
          <div className="videos">
            {data?.results?.map((video) => {
              let backgroundImageURL = url?.backdrop + video.poster_path;
              return (
                <div
                  key={video.id}
                  className="videoItem"
                  onClick={() => {
                    fetchVideo(video.id);
                  }}
                >
                  <div className="videoThumbnail">
                    <Img src={backgroundImageURL} />
                    <PlayIcon />
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="videoSkeleton">
            {loadingSkeleton()}
            {loadingSkeleton()}
            {loadingSkeleton()}
            {loadingSkeleton()}
          </div>
        )}
      </ContentWrapper>
      <VideoPopup
        show={show}
        setShow={setShow}
        videoId={videoId}
        setVideoId={setVideoId}
      />
    </div>
  );
};

export default Trailer;
