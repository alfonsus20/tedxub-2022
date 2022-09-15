import { useState } from "react";
import ReactCardFlip from "react-card-flip";
import cardBackground from "../assets/images/meet-the-team-card-background.png";
import { motion, AnimatePresence } from "framer-motion";
import "../style/components/card-meet-the-team.scss";

const CardMeetTheTeam = ({data, idx}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      whileInView={{
        y: 0,
        opacity: 1,
        transition: { type: "spring", bounce: 0.25, duration: 1 },
      }}
    >
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal" key={idx}>
        <div className="bg-main-3 rounded-xl w-52 lg:w-64 h-96 flex flex-col cursor-pointer" onClick={() => setIsFlipped((prev) => !prev)}>
          <div className="border-main-1 border-b-2 p-2 flex justify-center items-center">
            <div className="w-14 h-2 bg-main-1 rounded-xl" />
          </div>
          <div className="flex flex-col flex-1 p-4 justify-between items-center gap-5">
            <p className="font-akira text-main-2 text-center flex-1 flex justify-center items-center drop-shadow-lg">{data.nama}</p>
            <div className="flex flex-col justify-end">
              <div className="bg-main-2 border-main-1 border-2 rounded-lg w-40 lg:w-48 h-40 lg:h-48 object-cover overflow-hidden">
                <img className="core-team h-40 lg:h-48 w-40 lg:w-48 object-cover hover:scale-110 transform duration-200 m-auto" src={`/meet-the-team/${data.foto}`} alt="" />
              </div>
            </div>
            <p className="font-sedgwick text-main-1 text-center flex-1 flex justify-center items-center drop-shadow-lg">{data.divisi}</p>
          </div>
        </div>

        <div className="bg-cover bg-no-repeat rounded-xl w-52 lg:w-64 h-96 flex flex-col cursor-pointer" style={{backgroundImage: `url(${cardBackground})`}} onClick={() => setIsFlipped((prev) => !prev)}>
          <div className="border-main-1 border-b-2 p-2 flex justify-center items-center">
            <div className="w-14 h-2 bg-main-1 rounded-xl" />
          </div>
          <div className="flex flex-col flex-1 p-4 justify-evenly items-center break-words overflow-hidden">
            <div className="pb-2 border-main-2 border-b-2 text-main-2 text-center">
              <p className="font-jakarta">Nama</p>
              <p className="font-jakartaBold">{data.nama}</p>
            </div>
            <div className="p-2 border-main-2 border-b-2 text-main-2 text-center">
              <p className="font-jakarta break-all ">Email</p>
              <p className="font-jakartaBold break-words whitespace-normal break-all">{data.email}</p>
            </div>
            <div className="p-2 border-main-2 border-b-2 text-main-2 text-center">
              <p className="font-jakarta">LinkedIn</p>
              <a target="_blank" href={`https://www.linkedin.com/in/${data.linkedin}/`} className={`font-jakartaBold hover:text-main-3 duration-150 ${data.linkedin ? "" : "pointer-events-none"}`}>{data.linkedin ? data.linkedin : "-"}</a>
            </div>
            <div className="p-2 text-main-2 text-center">
              <p className="font-jakarta">Instagram</p>
              <a target="_blank" href={`https://www.instagram.com/${data.instagram.replace('@','')}`} className="font-jakartaBold hover:text-main-3 duration-150">{data.instagram}</a>
            </div>
          </div>
        </div>
      </ReactCardFlip>
    </motion.div>
  );
}
 
export default CardMeetTheTeam;