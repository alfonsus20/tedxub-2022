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
      className="relative overflow-hidden"
      ref={containerRef}
      style={{
        height: `${containerHeight}vh`,
        borderRadius: `${borderRadius}% ${borderRadius}% 0 0`,
      }}
    >
      <div className="w-[120%] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden flex justify-center items-center">
        <video className="w-[85%] h-full mx-auto" autoPlay muted loop>
          <source src="https://api.tedxuniversitasbrawijaya.com/storage/video.mp4" />
        </video>
      </div>
      <h1 className="text-center text-white text-3xl z-10 top-1/2 absolute left-1/2 -translate-x-1/2  -translate-y-1/2 pb-8 ">
        #MERAYAKAN <strong>KEMBALI</strong>
      </h1>
    </div>
  );
};
export default VideoContainer;
