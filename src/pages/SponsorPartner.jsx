import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import background from "../assets/images/about/background.jpg";
import hand from "../assets/images/sponsor-hand.svg";
import Spinner from "../components/Spinner";
import useDisclosure from "../hooks/useDisclosure";
import { getAllSponsor } from "../models/sponsor";

const SponsorPartner = () => {

  const { isOpenSpinner, onOpenSpinner, onCloseSpinner } = useDisclosure();

  const [allData, setAllData] = useState({
    sponsors: [],
    mediaPartners: [],
    communityPartners: [],
  });

  const handleOpenSpinner = () => {
    onOpenSpinner();
  };

  const handleCloseSpinner = () => {
    onCloseSpinner();
  };

  const handleFetchSponsor = async () => {
    try {
      handleOpenSpinner();

      const {
        data: { data },
      } = await getAllSponsor();
  
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
    } finally {
      handleCloseSpinner();
    }
  };

  useEffect(() => {
    handleFetchSponsor();  
  }, []);
  
  return (
    <div className="min-h-screen bg-main-1 w-full bg-cover bg-no-repeat relative" style={{ backgroundImage: `url("${background}")` }}>
      <Helmet>
        <title>Sponsor and Partner</title>
        <meta name="description" content="Sponsors and Partners of TEDxUniversitasBrawijaya 2022" />
      </Helmet>
      <Spinner isOpenSpinner={isOpenSpinner} onCloseSpinner={handleCloseSpinner}/>
      <img className="absolute -z-0 left-0 h-64 lg:h-96" src={hand} alt="Hand" />
      <img className="absolute -z-0 right-0 bottom-36 h-64 lg:h-96 rotate-180" src={hand} alt="Hand" />
      <div className="container m-auto z-10">

        <div className="flex flex-col flex-wrap justify-center items-center m-auto max-w-6xl z-10">
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
                  className="max-h-48 object-cover object-center"
                  alt={sponsor.nama}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col flex-wrap justify-center items-center m-auto max-w-6xl z-10">
          <div className="heading text-center my-14 relative">
            <h1 className="font-sedgwick text-7xl lg:text-8xl text-main-3 opacity-75 z-0">Media Partner</h1>
            <div className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 w-full mt-2">
              <h1 className="font-akira text-white text-4xl w-full ">Media Partner</h1>
              <p className="font-sedgwick text-main-2 w-full">of TEDxUniversitasBrawijaya</p>
            </div>
          </div>
          <div className="flex flex-row items-center justify-center gap-5 lg:gap-10 flex-wrap m-auto z-10">
            {allData.mediaPartners.map((mediaPartner) => (
              <div key={mediaPartner.id} className="w-48 h-48 bg-white flex justify-center items-center rounded-xl overflow-hidden">
                <img
                  src={mediaPartner.link_foto_sponsor}
                  className="max-h-48 object-cover object-center"
                  alt={mediaPartner.nama}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col flex-wrap justify-center items-center m-auto max-w-6xl z-10">
          <div className="heading text-center my-14 relative">
            <h1 className="font-sedgwick text-7xl lg:text-8xl text-main-3 opacity-75 z-0">Community Partner</h1>
            <div className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 w-full mt-2">
              <h1 className="font-akira text-white text-4xl w-full">Community Partner</h1>
              <p className="font-sedgwick text-main-2 w-full">of TEDxUniversitasBrawijaya</p>
            </div>
          </div>
          <div className="flex flex-row items-center justify-center gap-5 lg:gap-10 flex-wrap m-auto z-10">
            {allData.communityPartners.map((communityPartner) => (
              <div key={communityPartner.id} className="w-48 h-48 bg-white flex justify-center items-center rounded-xl overflow-hidden">
                <img
                  src={communityPartner.link_foto_sponsor}
                  className="max-h-48 object-cover object-center"
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