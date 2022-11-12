import { Icon } from "@iconify/react";
import { useLayoutEffect, useRef, useState } from "react";
import useScreenOrientation from "react-hook-screen-orientation";
import thumbnailVideo from "../assets/images/home/thumbnail_video.png";

const VideoContainer = () => {
  const containerRef = useRef(null);
  const [containerHeight, setContainerHeight] = useState(20);
  const [borderRadius, setBorderRadius] = useState(50);
  const [isPlaying, setIsPlaying] = useState(false);
  const screenOrientation = useScreenOrientation();

  const handleScroll = () => {
    const offsetTop = containerRef.current?.offsetTop;
    const scrollPosition = window.scrollY;
    const percentage = (scrollPosition / offsetTop) * 80;
    const percentageRadius = (scrollPosition / offsetTop) * 50;

    setContainerHeight(
      20 + (percentage > 80 ? 80 : percentage < 0 ? 0 : percentage)
    );

    setBorderRadius(
      50 -
        (percentageRadius > 50
          ? 50
          : percentageRadius < 0
          ? 0
          : percentageRadius)
    );
  };

  useLayoutEffect(() => {
    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const playVideo = () => {
    document.getElementById("video").play();
    setIsPlaying(true);
  };

  return (
    <div
      id="video-container"
      className="relative overflow-hidden portrait:aspect-[9/16] landscape:aspect-video max-h-screen"
      ref={containerRef}
      style={{
        height: `${containerHeight}%`,
      }}
    >
      <div
        className="w-[160%] h-full absolute left-1/2 top-[50%] -translate-x-1/2 -translate-y-1/2 overflow-hidden flex justify-center items-center"
        style={{ borderRadius: `${borderRadius}%`, backgroundImage: `url("${thumbnailVideo}")` }}
      >
        {screenOrientation === "portrait-primary" ||
        screenOrientation === "portrait-secondary" || window.innerWidth <= 640 ? (
          <video
            id="video"
            className="w-[67%] h-full mx-auto object-cover object-center"
            loop
          >
            <source src="https://api.tedxuniversitasbrawijaya.com/storage/video_vertikal.mp4" />
          </video>
        ) : (
          <video
            id="video"
            className="w-[67%] h-full mx-auto object-cover object-center"
            loop
          >
            <source src="https://api.tedxuniversitasbrawijaya.com/storage/video_compressed.mp4" />
          </video>
        )}

        {!isPlaying && (
          <button
            className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 rounded-full bg-white"
            onClick={playVideo}
          >
            <Icon
              icon="ant-design:play-circle-filled"
              className="text-7xl text-main-3"
            />
          </button>
        )}
      </div>
    </div>
  );
};
export default VideoContainer;
