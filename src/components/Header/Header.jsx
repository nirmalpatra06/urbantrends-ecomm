import { MdMenu } from "react-icons/md";
import { BiMenuAltRight } from "react-icons/bi";
import { BsBagCheckFill } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import { BsFillSuitHeartFill } from "react-icons/bs";
import Logo from "../../assets/Logo2.png";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
function NavBar() {
  const [showMenu, setShowMenu] = useState(false);
  const productData = useSelector((state) => state.urbanTrends.productData);
  const wishlistData = useSelector((state) => state.urbanTrends.wishlistData);
  const userInfo = useSelector((state) => state.urbanTrends.userInfo);
  // console.log(userInfo);
  // console.log(productData);

  function toggleShowMenu() {
    setShowMenu(!showMenu);
  }
  return (
    <nav className="shadow-md bg-white dark:bg-gray-900 dark:text-white sticky top-0 z-40">
      <div className=" h-[75px] flex bg-primary/40 py-2">
        <div className="container flex justify-between items-center overflow-hidden ">
          <div className="w-[180px]">
            <Link to="/" className="font-bold text-2xl  flex items-center">
              <img
                className=" mix-blend-color-burn aspect-square object-contain"
                src={Logo}
                alt="logo"
              />
            </Link>
          </div>
          <div
            className={`${
              showMenu ? "left-0" : "-left-full"
            } md:static absolute md:min-h-fit md:w-auto min-h-[60vh] bg-primary md:bg-transparent   top-0 w-[70%] flex items-center pl-8 z-20 rounded-sm
             transition-all duration-300`}
          >
            <ul className="flex flex-col md:flex-row  md:items-center md:ml-[24px] mr-[14px] md:gap-6 gap-8 ">
              <li>
                <NavLink
                  className="hover:text-[#b53b28] font-protestRiot  font-bold"
                  to="/mens"
                >
                  MENS
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="hover:text-[#b53b28] font-bold font-protestRiot"
                  to="/womens"
                >
                  WOMENS
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="hover:text-[#b53b28] font-bold font-protestRiot"
                  to="/gadgets"
                >
                  GADGETS
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="hover:text-[#b53b28] font-bold font-protestRiot "
                  to="/jewellery"
                >
                  JEWELLERY
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="flex gap-[10px] ">
            <NavLink to="/wishlist" className="relative hover:text-red-500">
              <BsFillSuitHeartFill size={30} className="cursor-pointer" />
              <div
                className={`${
                  wishlistData.length && "bg-red-500"
                }  absolute left-3 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex items-center justify-center `}
              >
                {wishlistData.length > 0 && wishlistData.length}
              </div>
            </NavLink>
            <NavLink to="/cart" className="relative hover:text-red-500">
              <BsBagCheckFill size={30} className=" cursor-pointer " />
              <div
                className={`${
                  productData.length && "bg-red-500"
                }  absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex items-center justify-center `}
              >
                {productData.length > 0 && productData.length}
              </div>
            </NavLink>
            <NavLink to="/login">
              {userInfo ? (
                <FaUserCircle
                  size={30}
                  className="hover:text-red-500 cursor-pointer"
                />
              ) : (
                <h2 className="font-bold hover:text-red-500 cursor-pointer font-protestRiot">
                  Login
                </h2>
              )}
            </NavLink>
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
    </nav>
  );
}

export default NavBar;
