import { MdMenu } from "react-icons/md";
import { BiMenuAltRight } from "react-icons/bi";
import { BsCartCheckFill } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import { BsFillSuitHeartFill } from "react-icons/bs";
import Logo from "../../assets/shop.png";
import { useState } from "react";
import { Link } from "react-router-dom";
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
            <Link
              to="/"
              className="font-bold text-2xl sm:text-3xl flex items-center"
            >
              <img className="w-[50px]" src={Logo} alt="logo" />
              <em>Urban</em>Trends
            </Link>
          </div>
          <div
            className={`${
              showMenu ? "left-0" : "-left-full"
            } md:static absolute md:min-h-fit md:w-auto min-h-[60vh] bg-primary md:bg-transparent   top-0 w-[70%] flex items-center pl-8 z-20 rounded-sm
             transition-all duration-300`}
          >
            <ul className="flex flex-col md:flex-row  md:items-center md:gap-6 gap-8 ">
              <li>
                <Link
                  className="hover:text-red-500 border-b border-blue-600 font-bold"
                  to="/mens"
                >
                  MENS
                </Link>
              </li>
              <li>
                <Link className="hover:text-red-500 font-bold" to="/womens">
                  WOMENS
                </Link>
              </li>
              <li>
                <Link className="hover:text-red-500 font-bold" to="/gadgets">
                  GADGETS
                </Link>
              </li>
              <li>
                <Link className="hover:text-red-500 font-bold" to="/jewellery">
                  JEWELLERY
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex gap-6">
            <Link to="/wishlists">
              <BsFillSuitHeartFill
                size={30}
                className="hover:text-primary cursor-pointer"
              />
            </Link>
            <Link to="/cart">
              <BsCartCheckFill
                size={30}
                className="hover:text-primary cursor-pointer"
              />
            </Link>
            <Link to="/profile">
              <FaUserCircle
                size={30}
                className="hover:text-primary cursor-pointer"
              />
            </Link>
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
