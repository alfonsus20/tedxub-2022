import background from "../assets/images/about/background.jpg";
import hand from "../assets/images/sponsor-hand.svg";

const SponsorPartner = () => {
  return (
    <div className="min-h-screen w-full bg-cover bg-no-repeat" style={{ backgroundImage: `url("${background}")` }}>
      <img className="absolute -z-0 left-0 h-96" src={hand} alt="Hand" />
      <div className="container m-auto z-10">

        <div className="flex flex-col flex-wrap justify-center items-center m-auto max-w-6xl z-50">
          <div className="heading text-center py-20 -mt-12 relative m-auto">
            <h1 className="font-sedgwick text-8xl text-main-3 opacity-75 z-0 h-24">Sponsor</h1>
            <h1 className="font-akira text-white text-4xl absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">Sponsor</h1>
            <p className="font-sedgwick text-main-2 w-full mt-10 absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">of TEDxUniversitasBrawijaya</p>
          </div>
          <div className="flex flex-row items-center justify-center gap-20 flex-wrap m-auto z-10">
            <div className="w-52 h-52 bg-gray-200">
              test
            </div>
            <div className="w-52 h-52 bg-gray-200">
              test
            </div>
            <div className="w-52 h-52 bg-gray-200">
              test
            </div>
            <div className="w-52 h-52 bg-gray-200">
              test
            </div>
            <div className="w-52 h-52 bg-gray-200">
              test
            </div>
          </div>
        </div>

        <div className="flex flex-col flex-wrap justify-center items-start m-auto max-w-6xl">
          <div className="heading text-left py-20 relative">
            <h1 className="font-sedgwick text-8xl text-main-3 opacity-75 z-0 h-24">Partner</h1>
            <h1 className="font-akira text-white text-4xl absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">Partner</h1>
            <p className="font-sedgwick text-main-2 w-full mt-10 absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">of TEDxUniversitasBrawijaya</p>
          </div>
          <div className="flex flex-row items-center justify-center gap-20 flex-wrap m-auto">
            <div className="w-52 h-52 bg-gray-200">
              test
            </div>
            <div className="w-52 h-52 bg-gray-200">
              test
            </div>
            <div className="w-52 h-52 bg-gray-200">
              test
            </div>
            <div className="w-52 h-52 bg-gray-200">
              test
            </div>
            <div className="w-52 h-52 bg-gray-200">
              test
            </div>
            <div className="w-52 h-52 bg-gray-200">
              test
            </div>
          </div>
        </div>

        <div className="flex flex-col flex-wrap justify-center items-end m-auto max-w-6xl">
          <div className="heading text-right py-20 relative">
            <h1 className="font-sedgwick text-7xl text-main-3 opacity-75 z-0 h-20">Community Partner</h1>
            <h1 className="font-akira text-white text-right text-4xl w-full absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">Community Partner</h1>
            <p className="font-sedgwick text-main-2 text-right w-full mt-10 absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">of TEDxUniversitasBrawijaya</p>
          </div>
          <div className="flex flex-row items-center justify-center gap-20 flex-wrap m-auto">
            <div className="w-52 h-52 bg-gray-200">
              test
            </div>
            <div className="w-52 h-52 bg-gray-200">
              test
            </div>
            <div className="w-52 h-52 bg-gray-200">
              test
            </div>
            <div className="w-52 h-52 bg-gray-200">
              test
            </div>
            <div className="w-52 h-52 bg-gray-200">
              test
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
 
export default SponsorPartner;