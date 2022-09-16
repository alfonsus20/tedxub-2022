import { useLayoutEffect, useRef, useState } from "react";

const VideoContainer = () => {
  const containerRef = useRef(null);
  const [containerHeight, setContainerHeight] = useState(20);
  const [borderRadius, setBorderRadius] = useState(50);

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

  return (
    <div
      id="video-container"
      className="relative overflow-hidden aspect-video max-h-screen"
      ref={containerRef}
      style={{
        height: `${containerHeight}%`,
      }}
    >
      <div
        className="w-[160%] h-full absolute left-1/2 top-[50%] -translate-x-1/2 -translate-y-1/2 overflow-hidden flex justify-center items-center"
        style={{ borderRadius: `${borderRadius}%` }}
      >
        <video
          className="w-[67%] h-full mx-auto object-cover object-center"
          autoPlay
          muted
          loop
        >
          <source src="https://api.tedxuniversitasbrawijaya.com/storage/video_compressed.mp4" />
        </video>
        {/* <div className="bg-blue-500 w-[67%] h-full">
          <h1 className="text-white text-2xl">asdasdsa</h1>
        </div> */}
      </div>
    </div>
  );
};
export default VideoContainer;
