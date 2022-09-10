import background from "../assets/images/about/background.jpg";
import CardMeetTheTeam from "../components/CardMeetTheTeam";
import meetTheTeamPhoto0 from '../assets/images/meet-the-team-photo-0.png';
import meetTheTeamPhoto1 from '../assets/images/meet-the-team-photo-1.png';
import meetTheTeamPhoto2 from '../assets/images/meet-the-team-photo-2.png';
import meetTheTeamPhoto3 from '../assets/images/meet-the-team-photo-3.png';
import meetTheTeamPhoto4 from '../assets/images/meet-the-team-photo-4.png';
import meetTheTeamPhoto5 from '../assets/images/meet-the-team-photo-5.png';
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import "../style/meet-the-team.scss";

const coreTeam = [
  {
    nama: "Paloga Treheya Muntaha",
    divisi: "Organizer",
  },
  {
    nama: "Aurora Rivera Maulidina",
    divisi: "Co-Organizer",
  },
]

const filmPhotosLists = [
  meetTheTeamPhoto1,
  meetTheTeamPhoto2,
  meetTheTeamPhoto3,
  meetTheTeamPhoto4,
  meetTheTeamPhoto5,
];

const MeetTheTeam = () => {
  const [filmPhotos, setFilmPhotos] = useState(0);
  
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (filmPhotos === filmPhotosLists.length - 1) {
        setFilmPhotos(0);
      } else {
        setFilmPhotos(filmPhotos + 1);
      }
    }, 3000)
  
    return () => clearInterval(intervalId);
  }, [filmPhotos]);
  return (
    <div className="meettheteam min-h-screen w-full bg-cover bg-no-repeat px-0" style={{ backgroundImage: `url("${background}")` }}>
      <div className="m-auto z-10">
        <div className="heading text-center py-12 relative m-auto overflow-hidden">
          <h1 className="font-sedgwick text-8xl text-main-3 opacity-75 h-24">Meet The Team</h1>
          <h1 className="font-akira text-white text-4xl absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">Meet The Team</h1>
        </div>
        <div className="pb-10">
          <img className="filmPhoto-bg absolute w-full left-0" src={meetTheTeamPhoto0} alt="Background" />
          <motion.div
            key={filmPhotos}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              default: { duration: 3 }
            }}
          >
            <img src={filmPhotosLists[filmPhotos]} className="filmPhoto w-full left-0" alt="Photo 1" /> 
          </motion.div>
        </div>
        
        <div className="container m-auto">
          <h2 className="text-left font-akira text-3xl text-white px-20">CORE TEAM</h2>
          <div className="heading text-center py-12 relative m-auto">
            <h1 className="font-sedgwick text-3xl text-main-3 opacity-75 h-8 -rotate-3">ORGANIZER & CO-ORGANIZER</h1>
            <h1 className="font-akira text-white text-xl absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">ORGANIZER & CO-ORGANIZER</h1>
          </div>

          <div className="flex flex-row flex-wrap items-center justify-center gap-5">
            { coreTeam.map((core, idx) => {
              return (
                <CardMeetTheTeam data={core} key={idx} />
              );
            })}
          </div>

        </div>
      </div>
    </div>
  );
}
 
export default MeetTheTeam;