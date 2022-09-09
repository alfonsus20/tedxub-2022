import logo from "../assets/images/logo-white-red.svg";

const Navbar = () => {
  return (
    <nav className="fixed top-0  w-full">
      <div className="mx-12 mt-6 px-12 py-6 bg-main-1 rounded-full flex justify-between items-center text-white text-lg">
        <div>
          <img src={logo} className="w-40" alt="logo" />
        </div>
        <ul className="flex justify-around gap-x-8">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Previous Event</li>
        </ul>
        <button className="bg-main-3 px-6 py-1 rounded-lg">
          Buy Ticket Now
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
