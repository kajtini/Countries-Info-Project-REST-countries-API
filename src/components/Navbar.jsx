import { HiOutlineMoon } from "react-icons/hi";

function Navbar({ turnDarkMode, darkMode }) {
  return (
    <div
      className={`flex items-center justify-between bg-blue-d px-5 py-7 font-primary  text-white shadow-2xl lg:px-12 2xl:px-44 ${
        !darkMode && "text-blue-vvd bg-white"
      }`}
    >
      <p className="font-bold lg:text-2xl">Where in the world?</p>

      <div
        className="flex items-center gap-2 cursor-pointer"
        onClick={turnDarkMode}
      >
        <HiOutlineMoon size={15} />
        <p className="text-sm font-semibold lg:text-lg">
          {!darkMode ? "Dark Mode" : "Light Mode"}
        </p>
      </div>
    </div>
  );
}

export default Navbar;
