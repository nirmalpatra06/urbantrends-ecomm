import { MdMenu } from "react-icons/md";
import { BiMenuAltRight } from "react-icons/bi";
import { BsCartCheckFill } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import { BsFillSuitHeartFill } from "react-icons/bs";
import Logo from "../../assets/shop.png";
import { useState } from "react";

function NavBar() {
  const [showMenu, setShowMenu] = useState(false);

  function toggleShowMenu() {
    setShowMenu(!showMenu);
  }
  return (
    <nav className="shadow-md bg-white dark:bg-gray-900 dark:text-white sticky top-0 z-40">
      <div className=" bg-primary/30 py-2">
        <div className="container flex justify-between items-center ">
          <div>
            <a
              href="/"
              className="font-bold text-2xl sm:text-3xl flex items-center gap-2"
            >
              <img className="w-[50px]" src={Logo} alt="logo" />
              UrbanTrends
            </a>
          </div>
          <div
            className={`${
              showMenu ? "left-0" : "-left-full"
            } md:static absolute md:min-h-fit md:w-auto min-h-[60vh] bg-primary md:bg-transparent   top-0 w-[70%] flex items-center pl-8 z-20 rounded-sm
             transition-all duration-300`}
          >
            <ul className="flex flex-col md:flex-row  md:items-center md:gap-6 gap-8 ">
              <li>
                <a className="hover:text-red-500 font-bold" href="/">
                  MENS
                </a>
              </li>
              <li>
                <a className="hover:text-red-500 font-bold" href="/">
                  WOMENS
                </a>
              </li>
              <li>
                <a className="hover:text-red-500 font-bold" href="/">
                  GADGETS
                </a>
              </li>
              <li>
                <a className="hover:text-red-500 font-bold" href="/">
                  JEWELLERY
                </a>
              </li>
            </ul>
          </div>

          <div className="flex gap-6">
            <BsFillSuitHeartFill size={30} className="hover:text-primary" />
            <BsCartCheckFill size={30} className="hover:text-primary" />
            <FaUserCircle size={30} className="hover:text-primary" />
          </div>
          <div className="md:hidden">
            {showMenu ? (
              <BiMenuAltRight
                onClick={toggleShowMenu}
                size={30}
                className="cursor-pointer transition-all"
              />
            ) : (
              <MdMenu
                onClick={toggleShowMenu}
                size={30}
                className="cursor-pointer transition-all"
              />
            )}
          </div>
        </div>
      </div>

      {/* upper Nav */}
    </nav>
  );
}

export default NavBar;
