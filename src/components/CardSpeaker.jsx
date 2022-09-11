import photoBG from "../assets/images/home/photo-bg.png";
import speaker1 from "../assets/images/home/speaker-1.png";

const CardSpeaker = () => {
  return (
    <div className="bg-white col-span-4 max-w-xs mx-auto rounded-xl relative">
      <div className="h-56 w-5 bg-white absolute -top-56 left-1/2 -translate-x-1/2 z-10"></div>
      <div className="h-5 w-12 absolute -top-5 left-1/2 -translate-x-1/2 bg-white rounded-t-full"></div>
      <img src={speaker1} alt="speaker" className="w-full relative z-10" />
      <img
        src={photoBG}
        alt="photo-bg"
        className="absolute w-[80%] top-8 left-1/2 -translate-x-1/2"
      />
      <div className="absolute bottom-0 w-full text-center bg-main-3 py-6 z-20 font-semibold text-white text-lg rounded-b-xl">
        Kandi Windoe
      </div>
    </div>
  );
};
export default CardSpeaker;
