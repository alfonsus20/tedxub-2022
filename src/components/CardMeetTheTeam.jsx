import { useState } from "react";
import ReactCardFlip from "react-card-flip";
import cardBackground from "../assets/images/meet-the-team-card-background.png";

const CardMeetTheTeam = ({data, idx}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal" key={idx}>
      <div className="bg-main-3 rounded-xl w-64 h-96 flex flex-col cursor-pointer" onClick={() => setIsFlipped((prev) => !prev)}>
        <div className="border-main-1 border-b-2 p-2 flex justify-center items-center">
          <div className="w-14 h-2 bg-main-1 rounded-xl" />
        </div>
        <div className="flex flex-col flex-1 p-4 justify-evenly items-center gap-2">
          <p className="font-akira text-main-2 text-center">{data.nama}</p>
          <div className="bg-main-2 border-main-1 border-2 w-40 h-40"></div>
          <p className="font-sedgwick text-main-1 text-center">{data.divisi}</p>
        </div>
      </div>

      <div className="bg-cover bg-no-repeat rounded-xl w-64 h-96 flex flex-col cursor-pointer" style={{backgroundImage: `url(${cardBackground})`}} onClick={() => setIsFlipped((prev) => !prev)}>
        <div className="border-main-1 border-b-2 p-2 flex justify-center items-center">
          <div className="w-14 h-2 bg-main-1 rounded-xl" />
        </div>
        <div className="flex flex-col flex-1 p-4 justify-evenly items-center gap-2 break-words">
          <div className="pb-2 border-main-2 border-b-2 text-main-2 text-center">
            <p className="font-jakarta">Nama</p>
            <p className="font-jakartaBold">{data.nama}</p>
          </div>
          <div className="p-2 border-main-2 border-b-2 text-main-2 text-center">
            <p className="font-jakarta">Email</p>
            <p className="font-jakartaBold">palogatreheya@gmail.com</p>
          </div>
          <div className="p-2 border-main-2 border-b-2 text-main-2 text-center">
            <p className="font-jakarta">LinkedIn</p>
            <p className="font-jakartaBold">palogatreheya</p>
          </div>
          <div className="p-2 border-main-2 border-b-2 text-main-2 text-center">
            <p className="font-jakarta">Instagram</p>
            <p className="font-jakartaBold">@misterlogaloga</p>
          </div>
        </div>
      </div>
    </ReactCardFlip>
  );
}
 
export default CardMeetTheTeam;