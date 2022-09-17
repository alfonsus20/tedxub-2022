import background from "../assets/images/about/background.jpg";
import hand from "../assets/images/sponsor-hand.svg";

const SponsorPartner = () => {
  return (
    <div className="min-h-screen w-full bg-cover bg-no-repeat" style={{ backgroundImage: `url("${background}")` }}>
      <img className="absolute -z-0 left-0 h-96" src={hand} alt="Hand" />
      <div className="container m-auto z-10">

        <div className="flex flex-col flex-wrap justify-center items-center m-auto max-w-6xl z-50">
          <div className="heading text-center mb-14 relative m-auto">
            <h1 className="font-sedgwick text-7xl lg:text-8xl text-main-3 opacity-75 z-0">Sponsor</h1>
            <h1 className="font-akira text-white text-4xl absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">Sponsor</h1>
            <p className="font-sedgwick text-main-2 w-full mt-10 absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">of TEDxUniversitasBrawijaya</p>
          </div>
          <div className="flex flex-row items-center justify-center gap-5 lg:gap-10 flex-wrap m-auto z-10">
            <div className="w-48 h-48 bg-gray-200">
              test
            </div>
            <div className="w-48 h-48 bg-gray-200">
              test
            </div>
            <div className="w-48 h-48 bg-gray-200">
              test
            </div>
            <div className="w-48 h-48 bg-gray-200">
              test
            </div>
            <div className="w-48 h-48 bg-gray-200">
              test
            </div>
          </div>
        </div>

        <div className="flex flex-col flex-wrap justify-center items-center m-auto max-w-6xl">
          <div className="heading text-center my-14 relative">
            <h1 className="font-sedgwick text-7xl lg:text-8xl text-main-3 opacity-75 z-0">Partner</h1>
            <h1 className="font-akira text-white text-4xl absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">Partner</h1>
            <p className="font-sedgwick text-main-2 w-full mt-10 absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">of TEDxUniversitasBrawijaya</p>
          </div>
          <div className="flex flex-row items-center justify-center gap-5 lg:gap-10 flex-wrap m-auto">
            <div className="w-48 h-48 bg-gray-200">
              test
            </div>
            <div className="w-48 h-48 bg-gray-200">
              test
            </div>
            <div className="w-48 h-48 bg-gray-200">
              test
            </div>
            <div className="w-48 h-48 bg-gray-200">
              test
            </div>
            <div className="w-48 h-48 bg-gray-200">
              test
            </div>
            <div className="w-48 h-48 bg-gray-200">
              test
            </div>
          </div>
        </div>

        <div className="flex flex-col flex-wrap justify-center items-center m-auto max-w-6xl">
          <div className="heading text-center my-14 relative">
            <h1 className="font-sedgwick text-7xl lg:text-8xl text-main-3 opacity-75 z-0">Community Partner</h1>
            <h1 className="font-akira text-white text-4xl w-full absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">Community Partner</h1>
            <p className="font-sedgwick text-main-2 w-full mt-12 absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">of TEDxUniversitasBrawijaya</p>
          </div>
          <div className="flex flex-row items-center justify-center gap-5 lg:gap-10 flex-wrap m-auto">
            <div className="w-48 h-48 bg-gray-200">
              test
            </div>
            <div className="w-48 h-48 bg-gray-200">
              test
            </div>
            <div className="w-48 h-48 bg-gray-200">
              test
            </div>
            <div className="w-48 h-48 bg-gray-200">
              test
            </div>
            <div className="w-48 h-48 bg-gray-200">
              test
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
 
export default SponsorPartner;