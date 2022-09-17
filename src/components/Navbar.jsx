import logo from "../assets/images/logo-white-red.svg";
import { Icon } from "@iconify/react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import useComponentVisible from "../hooks/useComponentVisible";
import { useState } from "react";

const dropdownVariants = {
  visible: { opacity: 1, top: 57 },
  invisible: { opacity: 0, top: 58 },
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

  const { pathname } = useLocation();

  const [isNavbarMobileVisible, setIsNavbarMobileVisible] = useState(false);

  const closeNavbarMobile = () => setIsNavbarMobileVisible(false);

  return (
    <>
      <motion.div
        initial={{ top: "-200%" }}
        animate={{
          top: isNavbarMobileVisible ? "0" : "-200%",
          transition: { duration: 0.75 },
        }}
        className="bg-white fixed top-0 z-[100] w-full rounded-b-3xl text-center pt-4 pb-12 space-y-8 overflow-y-auto max-h-screen lg:hidden"
      >
        <button className="absolute top-4 right-4" onClick={closeNavbarMobile}>
          <Icon icon="carbon:close" className="text-4xl" />
        </button>
        <div className="font-bold text-lg">
          <Link to="/" onClick={closeNavbarMobile}>Home</Link>
        </div>
        <div>
          <div className="flex items-center justify-center gap-x-2 font-bold text-lg mb-4">
            About
            <Icon
              icon="akar-icons:chevron-down"
              className="text-main-3 font-bold text-base"
            />
          </div>
          <ul className="space-y-3">
            <li>
              <Link to="/about" onClick={closeNavbarMobile}>About TEDX</Link>
            </li>
            <li>
              <Link to="/meet-the-team" onClick={closeNavbarMobile}>Meet the Team</Link>
            </li>
            <li>
              <Link to="/faq"onClick={closeNavbarMobile}>FAQ</Link>
            </li>
            <li>
              <Link to="/sponsor-partner"onClick={closeNavbarMobile}>Sponsor & Partner</Link>
            </li>
          </ul>
        </div>
        <div>
          <div className="flex items-center justify-center gap-x-2 font-bold text-lg mb-4">
            Contact
            <Icon
              icon="akar-icons:chevron-down"
              className="text-main-3 font-bold text-base"
            />
          </div>
          <ul className="space-y-3">
            <li>
              <Link to="/about"onClick={closeNavbarMobile}>Email</Link>
            </li>
            <li>
              <Link to="/meet-the-team"onClick={closeNavbarMobile}>Instagram</Link>
            </li>
            <li>
              <Link to="/faq"onClick={closeNavbarMobile}>Twitter</Link>
            </li>
          </ul>
        </div>
        <div>
          <div className="flex items-center justify-center gap-x-2 font-bold text-lg mb-4">
            Previous Events
            <Icon
              icon="akar-icons:chevron-down"
              className="text-main-3 font-bold text-base"
            />
          </div>
          <ul className="space-y-3">
            <li>
              <a
                href="https://sorakria.tedxuniversitasbrawijaya.com"
                target="_blank"onClick={closeNavbarMobile}
              >
                Sorak Ria
              </a>
            </li>
            <li>
              <a
                href="https://preevent.tedxuniversitasbrawijaya.com"
                target="_blank"onClick={closeNavbarMobile}
              >
                Preevent
              </a>
            </li>
            <li>
              <a
                href="https://merchandise.tedxuniversitasbrawijaya.com"
                target="_blank"onClick={closeNavbarMobile}
              >
                Merch
              </a>
            </li>
          </ul>
        </div>
        <div>
          <Link
            to="/ticket"
            className="bg-main-3 px-6 py-2 rounded-lg text-white"
          >
            Buy Ticket Now
          </Link>
        </div>
      </motion.div>
      <nav
        className={`${
          pathname === "/" ? "absolute top-6 h-[10vh]" : "fixed top-0"
        } z-[90] w-full`}
      >
        <div
          className={`mx-2 lg:mx-12 ${
            pathname === "/" ? "mt-0" : "mt-6"
          } px-12 py-5 bg-main-1 rounded-full flex justify-between items-center text-white text-lg font-jakarta`}
        >
          <div>
            <Link to="/">
              <img src={logo} className="w-40" alt="logo" />
            </Link>
          </div>
          <ul className="justify-around gap-x-8 hidden lg:flex">
            <li className="px-1">
              <Link to="/">Home</Link>
            </li>
            <li className="relative px-1">
              <button
                className="flex items-center gap-x-2"
                ref={aboutDropdownRef}
                onClick={() =>
                  setIsAboutDropdownVisible(!isAboutDropdownVisible)
                }
              >
                <span>About</span>
                <Icon icon="bi:chevron-down" className="text-sm text-main-3" />
              </button>
              <AnimatePresence>
                {isAboutDropdownVisible && (
                  <motion.div
                    initial="invisible"
                    animate="visible"
                    exit="invisible"
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
                        <Link to="/meet-the-team">
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
                )}
              </AnimatePresence>
            </li>
            <li className="px-1">
              <Link to="/contact">Contact</Link>
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
              <AnimatePresence>
                {isPrevEventsDropdownVisible && (
                  <motion.div
                    initial="invisible"
                    animate="visible"
                    exit="invisible"
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
                )}
              </AnimatePresence>
            </li>
          </ul>
          <Link
            to="/ticket"
            className="bg-main-3 px-6 py-1 rounded-lg hidden lg:block"
          >
            Buy Ticket Now
          </Link>
          <button className="block md:hidden" onClick={() => setIsNavbarMobileVisible(true)}>
            <Icon icon="charm:menu-hamburger" className="text-3xl" />
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
