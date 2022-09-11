import { coreTeam } from "../utils/data";
import CardMeetTheTeam from "./CardMeetTheTeam";

const CoreTeamLists = ({type, name}) => {
  return (
    <div>
      <div className="heading text-center py-12 relative m-auto">
        <h1 className="font-sedgwick text-3xl text-main-3 opacity-75 h-8 -rotate-3">{name}</h1>
        <h1 className="font-akira text-white text-xl absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">{name}</h1>
      </div>

      <div className="flex flex-row flex-wrap items-center justify-center gap-5">
        { type.map((data, idx) => {
          return (
            <CardMeetTheTeam data={data} key={idx} />
          );
        })}
      </div>
    </div>
  );
}
 
export default CoreTeamLists;