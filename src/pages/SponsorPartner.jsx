import { useEffect, useState } from "react";
import background from "../assets/images/about/background.jpg";
import hand from "../assets/images/sponsor-hand.svg";
import { getAllSponsor } from "../models/sponsor";

const SponsorPartner = () => {

  const [allData, setAllData] = useState({
    sponsors: [],
    mediaPartners: [],
    communityPartners: [],
  });

  const handleFetchSponsor = async () => {
    const {
      data: { data },
    } = await getAllSponsor();

    console.log(data)

    const sponsors = [];
    const mediaPartners = [];
    const communityPartners = [];

    for (let item of data) {
      switch (item.kategori_sponsor) {
        case "Sponsor":
          sponsors.push(item);
          break;
        case "Media Partner":
          mediaPartners.push(item);
          break;
        case "Community Partner":
          communityPartners.push(item);
          break;
        default:
          continue;
      }
    }

    setAllData({ mediaPartners, communityPartners, sponsors });
  };

  useEffect(() => {
    handleFetchSponsor();  
  }, []);
  
  return (
    <div className="min-h-screen w-full bg-cover bg-no-repeat" style={{ backgroundImage: `url("${background}")` }}>
      <img className="absolute -z-0 left-0 h-96" src={hand} alt="Hand" />
      <div className="container m-auto z-10">

        <div className="flex flex-col flex-wrap justify-center items-center m-auto max-w-6xl z-50">
          <div className="heading text-center mb-14 relative m-auto">
            <h1 className="font-sedgwick text-7xl lg:text-8xl text-main-3 opacity-75 z-0">Sponsor</h1>
            <div className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 w-full mt-2">
              <h1 className="font-akira text-white text-4xl">Sponsor</h1>
              <p className="font-sedgwick text-main-2 w-full">of TEDxUniversitasBrawijaya</p>
            </div>
          </div>
          <div className="flex flex-row items-center justify-center gap-5 lg:gap-10 flex-wrap m-auto z-10">
            {allData.sponsors.map((sponsor) => (
              <div key={sponsor.id} className="w-48 h-48 bg-white flex justify-center items-center rounded-xl overflow-hidden">
                <img
                  src={sponsor.link_foto_sponsor}
                  className="w-full"
                  alt={sponsor.nama}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col flex-wrap justify-center items-center m-auto max-w-6xl">
          <div className="heading text-center my-14 relative">
            <h1 className="font-sedgwick text-7xl lg:text-8xl text-main-3 opacity-75 z-0">Media Partner</h1>
            <div className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 w-full mt-2">
              <h1 className="font-akira text-white text-4xl w-full ">Media Partner</h1>
              <p className="font-sedgwick text-main-2 w-full">of TEDxUniversitasBrawijaya</p>
            </div>
          </div>
          <div className="flex flex-row items-center justify-center gap-5 lg:gap-10 flex-wrap m-auto">
            {allData.mediaPartners.map((mediaPartner) => (
              <div key={mediaPartner.id} className="w-48 h-48 bg-white flex justify-center items-center rounded-xl overflow-hidden">
                <img
                  src={mediaPartner.link_foto_sponsor}
                  className="w-full"
                  alt={mediaPartner.nama}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col flex-wrap justify-center items-center m-auto max-w-6xl">
          <div className="heading text-center my-14 relative">
            <h1 className="font-sedgwick text-7xl lg:text-8xl text-main-3 opacity-75 z-0">Community Partner</h1>
            <div className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 w-full mt-2">
              <h1 className="font-akira text-white text-4xl w-full">Community Partner</h1>
              <p className="font-sedgwick text-main-2 w-full">of TEDxUniversitasBrawijaya</p>
            </div>
          </div>
          <div className="flex flex-row items-center justify-center gap-5 lg:gap-10 flex-wrap m-auto">
            {allData.communityPartners.map((communityPartner) => (
              <div key={communityPartner.id} className="w-48 h-48 bg-white flex justify-center items-center rounded-xl overflow-hidden">
                <img
                  src={communityPartner.link_foto_sponsor}
                  className="w-full object-cover object-center"
                  alt={communityPartner.nama}
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
 
export default SponsorPartner;