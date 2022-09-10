import logo from "../assets/images/logo-white-red.svg";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import useComponentVisible from "../hooks/useComponentVisible";

const dropdownVariants = {
  visible: { top: 57, opacity: 1 },
  invisible: { top: 58, opacity: 0 },
};

const Navbar = () => {
  const {
    ref: aboutDropdownRef,
    isComponentVisible: isAboutDropdownVisible,
    setIsComponentVisible: setIsAboutDropdownVisible,
  } = useComponentVisible();

  const {
    ref: prevEventsDropdownRef,
    isComponentVisible: isPrevEventsDropdownVisible,
    setIsComponentVisible: setIsPrevEventsDropdownVisible,
  } = useComponentVisible();
  return (
    <nav className="fixed top-0 w-full z-50">
      <div className="mx-12 mt-6 px-12 py-6 bg-main-1 rounded-full flex justify-between items-center text-white text-lg">
        <div>
          <img src={logo} className="w-40" alt="logo" />
        </div>
        <ul className="flex justify-around gap-x-8">
          <li className="px-1">
            <Link to="/">Home</Link>
          </li>
          <li className="relative px-1">
            <button
              className="flex items-center gap-x-2"
              ref={aboutDropdownRef}
              onClick={() => setIsAboutDropdownVisible(!isAboutDropdownVisible)}
            >
              <span>About</span>
              <Icon icon="bi:chevron-down" className="text-sm text-main-3" />
            </button>
            <motion.div
              animate={isAboutDropdownVisible ? "visible" : "invisible"}
              initial="invisible"
              variants={dropdownVariants}
              transition={{ duration: 0.3 }}
              className="absolute min-w-full left-1/2 -translate-x-1/2 bg-main-1 rounded-b-2xl"
            >
              <motion.div
                animate={{
                  backgroundPosition: ["0%", "100%", "0%"],
                }}
                transition={{ repeat: Infinity, duration: 3 }}
                className="h-2 bg-gradient-to-r from-[#7631D0] via-[#2156B0] to-[#AFE710] bg-[length:300%_300%]"
              ></motion.div>
              <ul className="w-max pt-2 pb-6 px-4  space-y-3 text-[1rem]">
                <li>
                  <Link to="/about">
                    <p className="peer">About TED</p>
                    <div className="h-[1px] mt-1 w-0 bg-white peer-hover:w-full transition-all"></div>
                  </Link>
                </li>
                <li>
                  <Link to="/team">
                    <p className="peer">Meet the Team</p>
                    <div className="h-[1px] mt-1 w-0 bg-white peer-hover:w-full transition-all"></div>
                  </Link>
                </li>
                <li>
                  <Link to="/faq">
                    <p className="peer">FAQ</p>
                    <div className="h-[1px] mt-1 w-0 bg-white peer-hover:w-full transition-all"></div>
                  </Link>
                </li>
                <li>
                  <Link to="/sponsor-partner">
                    <p className="peer">Sponsor & Partner</p>
                    <div className="h-[1px] mt-1 w-0 bg-white peer-hover:w-full transition-all"></div>
                  </Link>
                </li>
              </ul>
            </motion.div>
          </li>
          <li className="px-1">
            <Link to="/">Contact</Link>
          </li>
          <li className="relative px-1">
            <button
              ref={prevEventsDropdownRef}
              className="flex items-center gap-x-2"
              onClick={() =>
                setIsPrevEventsDropdownVisible(!isPrevEventsDropdownVisible)
              }
            >
              <span>Previous Events</span>
              <Icon icon="bi:chevron-down" className="text-sm text-main-3" />
            </button>
            <motion.div
              animate={isPrevEventsDropdownVisible ? "visible" : "invisible"}
              initial="invisible"
              variants={dropdownVariants}
              transition={{ duration: 0.3 }}
              className="absolute min-w-full top-[57px] left-1/2 -translate-x-1/2 bg-main-1 rounded-b-2xl overflow-hidden"
            >
              <motion.div
                animate={{
                  backgroundPosition: ["0%", "100%", "0%"],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                }}
                className="h-2 bg-gradient-to-r from-[#7631D0] via-[#2156B0] to-[#AFE710] bg-[length:300%_300%]"
              ></motion.div>
              <ul className="w-max pt-2 pb-6 px-4  space-y-3 text-[1rem]">
                <li>
                  <a
                    href="https://merchandise.tedxuniversitasbrawijaya.com"
                    target="_blank"
                  >
                    <p className="peer">Merchandise</p>
                    <div className="h-[1px] mt-1 w-0 bg-white peer-hover:w-full transition-all"></div>
                  </a>
                </li>
                <li>
                  <a
                    href="https://sorakria.tedxuniversitasbrawijaya.com"
                    target="_blank"
                  >
                    <p className="peer">Sorak Ria</p>
                    <div className="h-[1px] mt-1 w-0 bg-white peer-hover:w-full transition-all"></div>
                  </a>
                </li>
                <li>
                  <a
                    href="https://preevent.tedxuniversitasbrawijaya.com"
                    target="_blank"
                  >
                    <p className="peer">Preevent</p>
                    <div className="h-[1px] mt-1 w-0 bg-white peer-hover:w-full transition-all"></div>
                  </a>
                </li>
              </ul>
            </motion.div>
          </li>
        </ul>
        <button className="bg-main-3 px-6 py-1 rounded-lg">
          Buy Ticket Now
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
