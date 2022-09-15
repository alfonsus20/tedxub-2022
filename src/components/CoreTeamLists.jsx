import CardMeetTheTeam from "./CardMeetTheTeam";
import "../style/components/core-team-lists.scss";
import cn from "classnames";

const CoreTeamLists = ({type, name, initial}) => {
  return (
    <div className="relative">
      <div className="relative max-w-5xl m-auto">
        <h1 
          className={cn("heading-background font-akira text-8xl absolute top-44 -rotate-6", {
            "text-5xl": initial == "ORGANIZER" || initial == "EP" || initial == "VP",
            "text-9xl": initial == "BM" || initial == "W",
            "left-2": initial == "CUR",
            "left-20": initial == "S" || initial == "EP" || initial == "VP",
          })}
        >
          {initial}
        </h1>
        <h1 
          className={cn("heading-background font-akira text-4xl absolute -rotate-6 top-96 right-20", {
            "text-2xl": initial == "ORGANIZER" || initial == "EP" || initial == "VP",
            "text-3xl": initial == "BM" || initial == "W",
            "right-24": initial == "CUR",
            "right-40": initial == "S" || initial == "EP" || initial == "VP",
          })}
        >
          {initial}
        </h1>
      </div>
      <div className="heading text-center py-12 relative m-auto">
        <h1 className="font-sedgwick text-3xl text-main-3 opacity-75 -rotate-3">{name}</h1>
        <h1 className="font-akira text-white w-full text-xl absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 drop-shadow-lg">{name}</h1>
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