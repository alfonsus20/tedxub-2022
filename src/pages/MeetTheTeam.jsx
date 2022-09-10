import background from "../assets/images/about/background.jpg";
import CardMeetTheTeam from "../components/CardMeetTheTeam";

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

const MeetTheTeam = () => {
  return (
    <div className="min-h-screen w-full bg-cover bg-no-repeat" style={{ backgroundImage: `url("${background}")` }}>
      <div className="container m-auto z-10">
        <div className="heading text-center py-12 relative m-auto">
          <h1 className="font-sedgwick text-8xl text-main-3 opacity-75 h-24">Meet The Team</h1>
          <h1 className="font-akira text-white text-4xl absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">Meet The Team</h1>
        </div>
        
        <div>
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