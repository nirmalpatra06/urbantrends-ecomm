import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { TfiTwitter } from "react-icons/tfi";
import { FaLinkedinIn } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className=" flex flex-col bg-black text-white">
      <div className="container p-10 flex flex-col gap-8 md:gap-12">
        <div className="">
          <ul className="flex items-center justify-center gap-8 md:gap-16   text-gray-300">
            <Link to="/terms">
              <li className="hover:text-primary cursor-pointer font-protestRiot">
                Terms Of Use
              </li>
            </Link>
            <Link to="/about">
              <li className="hover:text-primary cursor-pointer font-protestRiot">
                About
              </li>
            </Link>
            <Link to="/privacy">
              <li className="hover:text-primary cursor-pointer font-protestRiot">
                Privacy-Policy
              </li>
            </Link>
          </ul>
        </div>
        <div className="text-center mx-auto">
          <p className="text-gray-500 font-protestRiot">
            Hello! I am Nirmal Patra and I have created this project by using
            React, Tailwind and Redux to showcase my Frontend skill. This
            project is non-profit and its a part of my portfolio. Lorem ipsum,
            dolor sit amet consectetur adipisicing elit. Itaque harum dicta
            numquam rem suscipit eveniet similique eius modi mollitia
            accusantium! Lorem ipsum dolor sit amet consectetur, adipisicing
            elit. Mollitia laudantium excepturi perspiciatis, dolorum molestias
            saepe sint neque dolores perferendis cumque.
          </p>
        </div>

        {/* links */}
        <div className="flex justify-center gap-8">
          <FaInstagram
            size={25}
            className="hover:text-primary cursor-pointer"
          />
          <TfiTwitter size={25} className="hover:text-primary cursor-pointer" />
          <FaGithub size={25} className="hover:text-primary cursor-pointer" />
          <FaLinkedinIn
            size={25}
            className="hover:text-primary cursor-pointer"
          />
        </div>
        <p className="text-center text-gray-600">
          Copyright @ 2024 Nirmal Patra
        </p>
      </div>
    </footer>
  );
}

export default Footer;
