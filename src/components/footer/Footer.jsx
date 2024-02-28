import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { TfiTwitter } from "react-icons/tfi";
import { FaLinkedinIn } from "react-icons/fa6";

function Footer() {
  return (
    <footer className=" flex flex-col bg-black text-white">
      <div className="container p-10 flex flex-col gap-8 md:gap-12">
        <div className="">
          <ul className="flex items-center justify-center gap-8 md:gap-16 font-bold  text-gray-300">
            <li className="hover:text-primary cursor-pointer">Terms Of Use</li>
            <li className="hover:text-primary cursor-pointer">About</li>
            <li className="hover:text-primary cursor-pointer">
              Privacy-Policy
            </li>
            <li className="hover:text-primary cursor-pointer">FAQ</li>
          </ul>
        </div>
        <div className="text-center mx-auto">
          <p className="text-gray-500">
            Hello! I am Nirmal Patra and I've created this project by using
            React and Tailwind to showcase my Frontend skill. Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Eos cupiditate nesciunt
            dolorum similique voluptas sit quae natus eius, id commodi fugiat
            architecto harum blanditiis? Id reprehenderit itaque distinctio rem
            dolor, aspernatur inventore ullam repudiandae expedita.
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
