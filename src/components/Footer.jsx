import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo-black-red.svg";

const Footer = () => {
  return (
    <div className="grid grid-cols-12 max-w-screen-xl mx-auto px-4 py-12 gap-x-2 gap-y-6">
      <div className="col-span-12 md:col-span-4">
        <Link to="/">
          <img src={logo} className="w-60 mb-4" alt="logo" />
        </Link>
        <p>
          © 2022 All Rights Reserved · “This independent{" "}
          <span className="text-main-3 font-bold">TEDx</span> event is operated
          under license from <span className="text-main-3 font-bold">TED</span>
          .”
        </p>
      </div>
      <div className="col-span-6 sm:col-span-3 md:col-span-2">
        <h4 className="font-bold mb-4">About</h4>
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
            <Link to="/faw" className="hover:text-main-3">
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
      <div className="col-span-6 sm:col-span-3 md:col-span-2">
        <h4 className="font-bold mb-4">Contact</h4>
      </div>
      <div className="col-span-6 sm:col-span-3 md:col-span-2">
        <h4 className="font-bold mb-4">Previous Events</h4>
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
      <div className="col-span-6 sm:col-span-3 md:col-span-2 flex flex-col md:items-center justify-end text-4xl">
        <a
          href="https://instagram.com/tedxuniversitasbrawijaya"
          target="_blank"
        >
          <Icon
            icon="ant-design:instagram-filled"
            className="hover:text-main-3"
          />
        </a>
        <a href="https://twitter.com/TEDxBrawijaya" target="_blank">
          <Icon
            icon="ant-design:twitter-circle-filled"
            className="hover:text-main-3"
          />
        </a>
      </div>
    </div>
  );
};
export default Footer;
