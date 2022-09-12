import { Link } from "react-router-dom";
import logo from "../assets/images/logo-black-red.svg";

const Footer = () => {
  return (
    <div className="flex grid-cols-12 max-w-screen-xl mx-auto px-4 pt-6 pb-10 font-jakarta text-sm">
      <div className="w-[40%] pt-6">
        <Link to="/">
          <img src={logo} className="w-60 mb-4" alt="logo" />
        </Link>
        <p>
          © 2022 All Rights Reserved · “This independent{" "}
          <span className="text-main-3 font-jakartaBold">TEDx</span> event is
          operated under license from{" "}
          <span className="text-main-3 font-jakartaBold">TED</span>
          .”
        </p>
      </div>
      <div className="w-[10%] pt-6">
        <h4 className="font-jakartaBold mb-4">About</h4>
        <ul>
          <li>
            <Link to="/about" className="hover:text-main-3">
              About TED
            </Link>
          </li>
          <li>
            <Link to="/team" className="hover:text-main-3">
              Meet The Team
            </Link>
          </li>
          <li>
            <Link to="/faq" className="hover:text-main-3">
              FAQ
            </Link>
          </li>
          <li>
            <Link to="/sponsor-partner" className="hover:text-main-3">
              Sponsor & Partner
            </Link>
          </li>
        </ul>
      </div>
      <div className="w-[10%] pt-6">
        <h4 className="font-jakartaBold mb-4">Contact</h4>
      </div>
      <div className="w-[10%] pt-6">
        <h4 className="font-jakartaBold mb-4">Previous Events</h4>
        <ul>
          <li>
            <a
              href="https://sorakria.tedxuniversitasbrawijaya.com"
              target="_blank"
              className="hover:text-main-3"
            >
              Sorak Ria
            </a>
          </li>
          <li>
            <a
              href="https://preevent.tedxuniversitasbrawijaya.com"
              target="_blank"
              className="hover:text-main-3"
            >
              Pre Event
            </a>
          </li>
          <li>
            <a
              href="https://merchandise.tedxuniversitasbrawijaya.com"
              target="_blank"
              className="hover:text-main-3"
            >
              Merch
            </a>
          </li>
        </ul>
      </div>
      <div className="w-[30%] pl-6 flex">
        <div className="bg-main-1 w-[3px] h-full mx-8"></div>
        <div className="py-6">
          <h4 className="font-jakartaBold mb-4">See You On The Stage</h4>
          <p className="mb-6">
            Graha Widyaloka Universitas Brawijaya, Malang Minggu, 2 Oktober 2022
          </p>
          <button className="bg-main-3 py-2 px-8 rounded-md text-white">
            Buy Ticket
          </button>
        </div>
      </div>
    </div>
  );
};
export default Footer;
