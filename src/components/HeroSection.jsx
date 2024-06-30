import heroImage from "../assets/hero.jpg";
import { ReactTyped } from "react-typed";
export default function HeroSection() {
  return (
    <>
      <section>
        <div className="container mx-auto flex px-5 md:py-7 py-20 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left  md:mb-0 mb-16px text-center">
            <h1 className=" sm:text-3xl text-xl mb-2 font-medium ">
              Grow With Us
            </h1>
            <h1 className=" sm:text-6xl text-5xl mb-4 font-medium text-gray-900">
              Learn{" "}
              <ReactTyped
                strings={[
                  "Web Development",
                  "Mobile app Development",
                  "Digital Marketing",
                  "Graphic Designing",
                ]}
                typeSpeed={40}
              />
            </h1>
            <p className="mb-8 leading-relaxed text-gray-900">
              Code Your Future with Us. Bringing Visions to Life
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-[#b773b2] border-0 py-2 md:px-8  px-4 focus:outline-none hover:bg-[#743671] rounded text-lg">
                Get Started
              </button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src={heroImage}
            />
          </div>
        </div>
      </section>
    </>
  );
}
