import background from "../assets/images/about/background.jpg";
import CardMeetTheTeam from "../components/CardMeetTheTeam";
import meetTheTeamPhoto0 from '../assets/images/meet-the-team-photo-0.png';
import meetTheTeamPhoto1 from '../assets/images/meet-the-team-photo-1.png';
import meetTheTeamPhoto2 from '../assets/images/meet-the-team-photo-2.png';
import meetTheTeamPhoto3 from '../assets/images/meet-the-team-photo-3.png';
import meetTheTeamPhoto4 from '../assets/images/meet-the-team-photo-4.png';
import meetTheTeamPhoto5 from '../assets/images/meet-the-team-photo-5.png';
import meetTheTeamVolunteerBackground from '../assets/images/meet-the-team-volunteer-background.jpg';
import xSticker from '../assets/images/meet-the-team-x.png';
import circleSticker from '../assets/images/meet-the-team-circle.png';
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import "../style/meet-the-team.scss";
import { coreTeam, volunteer } from "../utils/data";
import VolunteerLists from "../components/VolunteerLists";
import CoreTeamLists from "../components/CoreTeamLists";

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
    }, 4000)
  
    return () => clearInterval(intervalId);
  }, [filmPhotos]);
  return (
    <div className="meettheteam min-h-screen w-full bg-center px-0" style={{ backgroundImage: `url("${background}")` }}>
      <div className="m-auto z-10">
        <div className="heading text-center py-12 relative m-auto overflow-hidden">
          <h1 className="font-sedgwick text-8xl text-main-3 opacity-75 h-24">Meet The Team</h1>
          <h1 className="font-akira text-white text-4xl absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">Meet The Team</h1>
        </div>
        <div className="pb-10 relative w-full">
          <img className="filmPhoto-bg w-full left-0" src={meetTheTeamPhoto0} alt="Background" />
          {/* <AnimatePresence>
            <motion.div
              key={filmPhotos}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                default: { duration: .5 }
              }}
            >
              <img src={filmPhotosLists[filmPhotos]} className="filmPhoto w-full left-0" alt="Photo 1" /> 
            </motion.div>
          </AnimatePresence> */}
        </div>
        
        <div className="container m-auto px-10">
          <h2 className="text-left font-akira text-3xl text-white max-w-6xl m-auto">CORE TEAM</h2>
          
          <CoreTeamLists type={coreTeam.organizer} name={"ORGANIZER & CO-ORGANIZER"} />
          <CoreTeamLists type={coreTeam.curator} name={"CURATOR"} />
          <CoreTeamLists type={coreTeam.budgetManager} name={"BUDGET MANAGER"} />
          <CoreTeamLists type={coreTeam.sponsorship} name={"SPONSORSHIP "} />
          <CoreTeamLists type={coreTeam.eventManager} name={"EVENT MANAGER"} />
          <CoreTeamLists type={coreTeam.executiveProducer} name={"EXECUTIVE PRODUCER"} />
          <CoreTeamLists type={coreTeam.cem} name={"COMMUNICATION, EDITORIAL, AND MARKETING"} />
          <CoreTeamLists type={coreTeam.designer} name={"DESIGNER "} />
          <CoreTeamLists type={coreTeam.videoProduction} name={"VIDEO PRODUCTION "} />
          <CoreTeamLists type={coreTeam.websiteManager} name={"WEBSITE MANAGER"} />

        </div>

        <div className="skew w-full m-auto relative mt-52 transform origin-bottom-left" style={{backgroundImage: `url(${meetTheTeamVolunteerBackground})`}}>
          <div className="flex flex-row justify-between items-center w-full max-w-6xl absolute -top-44 left-1/2 transform -translate-x-1/2 px-10">
            <img className="w-32 h-32 mt-20 drop-shadow-lg" src={circleSticker} alt="Circle" />
            <img className="w-64 h-64 drop-shadow-lg" src={xSticker} alt="X" />
          </div>

          <div className="max-w-6xl m-auto py-40">
            <h2 className="font-akira text-main-3 text-3xl mb-10 px-10">VOLUNTEER</h2>
            <VolunteerLists typeA={volunteer.curator} nameA={"CURATOR"} typeB={volunteer.sponsorship} nameB={"SPONSORSHIP"} />
            <VolunteerLists typeA={volunteer.eventManager} nameA={"EVENT MANAGER"} typeB={volunteer.executiveProducer} nameB={"EXECUTIVE PRODUCER"} />
            <VolunteerLists typeA={volunteer.cem} nameA={"COMMUNICATION, EDITORIAL, AND MARKETING"} typeB={volunteer.designer} nameB={"Designer"} />
            <VolunteerLists typeA={volunteer.videoProduction} nameA={"VIDEO PRODUCTION"} typeB={volunteer.website} nameB={"WEBSITE"} />
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default MeetTheTeam;