import { Icon } from "@iconify/react";
import background from "../assets/images/home/background.png";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div id="home">
      <section
        className="bg-[#f0f0f0] pt-6 min-h-screen relative overflow-y-hidden bg-cover flex flex-col"
        style={{ backgroundImage: `url("${background}")` }}
      >
        <Navbar />
        <div className="pt-8 px-14 mx-auto flex relative h-[65%] items-center w-full flex-1">
          <div className="w-7/12">
            <p className="text-2xl font-bold mb-2">Welcome to</p>
            <p className="uppercase font-akira text-3xl">
              <span className="text-main-3">TEDX</span>Universitas Brawijaya
            </p>
            <h1 className="text-7xl font-sedgwick text-main-3 my-6">
              Merayakan Kembali:
            </h1>
            <h2 className="text-2xl font-bold text-[#2B2B2B] mb-2">
              Menggeledah arus, menilik ruang
            </h2>
            <p className="text-6xl font-bold font-shrikhand text-[#2B2B2B] mb-4">
              2022
            </p>
            <div className="text-lg font-semibold">
              <p>Graha WidyaLoka Universitas Brawijaya, Malang</p>
              <p>Minggu, 2 Oktober 2022</p>
            </div>
          </div>
          <div className="w-5/12"></div>
          <div className="rounded-full p-4 border-2 border-[#2B2B22] w-fit text-[#2B2B22] absolute left-1/2 -translate-x-1/2 -bottom-6 animate-bounce">
            <Icon icon="akar-icons:arrow-down" className="text-3xl" />
          </div>
        </div>
        <div className="mt-12">
          <div className="flex items-center justify-center h-40 bg-red-500 rounded-[100%] rounded-b-none">
            <h1 className="text-center text-white text-3xl">
              #MERAYAKAN KEMBALI
            </h1>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Home;
