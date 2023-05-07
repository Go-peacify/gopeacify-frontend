import React from "react";
import ReactPlayer from "react-player";
import Slider from "react-slick";

const Player = () => {
  const videoUrls = [
    "https://youtu.be/s86-Z-CbaHA",
    "https://youtu.be/AeJ9q45PfD0",
    "https://youtu.be/VVsC2fD1BjA",
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {videoUrls.map((url, index) => (
        <div key={index}>
          <ReactPlayer url={url} />
        </div>
      ))}
    </Slider>
  );
};

export default Player;
