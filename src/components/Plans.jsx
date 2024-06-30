import { GrPersonalComputer } from "react-icons/gr";
import { FaMobileAlt } from "react-icons/fa";
import { MdOutlineDesignServices } from "react-icons/md";

export default function Plans() {
  return (
    <div className="py-[50px] px-20">
      <div className="md:grid grid-cols-3 gap-10 ">
        <div className="shadow-xl py-4  hover:scale-105 duration-500  ">
          <div className="flex flex-col justify-center items-center my-10">
            <span>
              <MdOutlineDesignServices className="text-4xl  mb-2" />
            </span>
            <h1 className="text-xl font-bold my-2">Graphic Designing</h1>
            <div className="text-2xl font-bold my-2">$149</div>
            <p className="my-2 p-5 text-center text-sm leading-8 border-b-2">
              Get proficient in industry-standard tools like Adobe Photoshop,
              Illustrator, and InDesign, and bring your creative visions to
              life.
            </p>
            <button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-[#743671] border-0 py-2 px-6 focus:outline-none  rounded">
              Strat Trail
            </button>
          </div>
        </div>
        <div className="shadow-xl py-4 bg-gray-100  hover:scale-105 duration-500  ">
          <div className="flex flex-col justify-center items-center my-10">
            <span>
              <GrPersonalComputer className="text-4xl mb-2" />
            </span>
            <h1 className="text-xl font-bold my-2">Web Devlopment</h1>
            <div className="text-2xl font-bold my-2">$200</div>
            <p className="my-2 p-5 text-center text-sm leading-8 border-t-2">
              Dive into the core of web development with hands-on training in
              HTML, CSS, and JavaScript, and build a solid foundation for your
              future projects.
            </p>
            <button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex  bg-black text-[#743671] border-0 py-2 px-6 focus:outline-none  rounded">
              Strat Trail
            </button>
          </div>
        </div>
        <div className="shadow-xl py-4 hover:scale-105 duration-500  ">
          <div className="flex flex-col justify-center items-center my-10">
            <span>
              <FaMobileAlt className="text-4xl mb-2" />
            </span>
            <h1 className="text-xl font-bold my-2">Mobile Devlopment</h1>
            <div className="text-2xl font-bold my-2">$100</div>
            <p className="my-2 p-5 text-center text-sm leading-8 border-b-2">
              Explore cross-platform development with Flutter and React Native,
              enabling you to build apps that work seamlessly on both iOS and
              Android.
            </p>
            <button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex  border-0 py-2 px-6 text-white bg-[#743671] focus:outline-none  rounded">
              Strat Trail
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
