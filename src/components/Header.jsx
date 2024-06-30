import { useState } from "react";
import { IoIosMenu, IoMdClose } from "react-icons/io";

export default function Header() {
  // State for Toggle
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <div className="bg-[#743671]  p-2">
        <div className="max-w-[1240px] py-[10px] mx-8 flex justify-between items-center">
          <div className="font-bold text-white text-2xl">WebVibe</div>

          {/* ....... Toggle Condition .......... */}

          {toggle ? (
            <IoMdClose
              onClick={() => setToggle(!toggle)}
              className="text-white text-2xl md:hidden block"
            />
          ) : (
            <IoIosMenu
              onClick={() => setToggle(!toggle)}
              className="text-white text-2xl md:hidden block"
            />
          )}

          <ul className="hidden md:flex gap-8 text-white">
            <li>Home</li>
            <li>Company</li>
            <li>Resources</li>
            <li>About</li>
            <li>Contact</li>
          </ul>

          {/* ........Responsive Menu........ */}
          <ul
            className={`md:hidden fixed bg-[#dd99d9] text-white top-[68px] h-screen w-full duration-300
                ${toggle ? "left-[0]" : "left-[-100%]"}
                
                `}
          >
            <li className="p-5 ">Home</li>
            <hr className="mx-2" />
            <li className="p-5">Company</li>
            <hr className="mx-2" />
            <li className="p-5">Resources</li>
            <hr className="mx-2" />
            <li className="p-5">About</li>
            <hr className="mx-2" />
            <li className="p-5">Contact</li>
          </ul>
        </div>
      </div>
    </>
  );
}
