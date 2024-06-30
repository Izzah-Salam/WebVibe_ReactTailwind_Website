import computerImg from "../assets/learn.jpg";
export default function Experts() {
  return (
    <>
      <div className="max-w-[1240px] m-auto  md:grid grid-cols-2 m-10">
        <div className="col-span-1 md:w-[80%]">
          <img className="inline" src={computerImg} alt="Computer Image" />
        </div>
        <div className="col-span-1 flex flex-col justify-center">
          <h1 className="text-[#b773b2] font-bold text-xl my-2">
            Learn From Experts
          </h1>
          <p className="my-2 text-justify">
            At Webvibe, we believe in learning from the best. Our team of
            seasoned professionals is dedicated to sharing their extensive
            knowledge and experience with you. Dive into a wealth of expertise
            and stay ahead of the curve with our cutting-edge insights. Join us
            and transform your skills with guidance from industry leaders.
          </p>
          <button className=" lg:w-[35%] text-white border-0 my-2 py-2 md:px-8 px-5  focus:outline-none bg-[#743671] rounded text-lg">
            Get Started
          </button>
        </div>
      </div>
    </>
  );
}
