import heroImage from "../assets/hero.jpg";
import { ReactTyped } from "react-typed";
export default function HeroSection() {
  return (
    <>
      <section>
        <div className="container mx-auto flex px-5 md:py-7 py-20 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left  md:mb-0 mb-16px text-center">
            <h1 className=" sm:text-3xl text-xl mb-2 font-medium ">Learn</h1>
            <h1 className=" sm:text-4xl text-2xl mb-4 font-medium text-gray-900">
              {" "}
              <ReactTyped
                strings={[
                  "Web Development",
                  "Mobile Development",
                  "Digital Marketing",
                  "Graphic Designing",
                ]}
                loop="true"
                typeSpeed={100}
              />
            </h1>
            <p className="leading-relaxed text-gray-900">
              Learn With us, Grow with us
            </p>
            <p className="mb-8 leading-relaxed text-gray-900">
              Code Your Future with Us. Bringing Visions to Life
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-[#b773b2] border-0 py-2 md:px-8 px-5  focus:outline-none hover:bg-[#743671] rounded text-lg">
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
