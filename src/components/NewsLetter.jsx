export default function NewsLetter() {
  return (
    <>
      <div className="w-full bg-[#b773b2] md:px-20">
        <div className="md:flex mx-w-[1240px] mx-auto justify-between items-center py-[50px]">
          <div className="m-3">
            <h1 className="md:text-3xl text-xl font-bold text-white mb-2">
              Want to Learn It Skills?
            </h1>
            <span className="text-white text-sm">
              Sign up to our newsletter and upto date{" "}
            </span>
          </div>
          <div className="m-3 flex flex-col">
            <input
              type="email"
              className="px-3 py-2 mr-2 mb-2 bg-slate-100 rounded"
              placeholder="Email"
            />
            <button className="inline-flex text-white bg-black border-0 p-2  focus:outline-none hover:bg-[#743671] rounded text-lg text-center">
              Get Started
            </button>
            <br />
            <p className="text-white text-sm">
              we care about the production of your data. Read our
              <br /> Privacy Policy
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
