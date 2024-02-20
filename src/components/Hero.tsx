import { Grid } from "@/assets";

const Hero = () => {
  return (
    <>
      <div className="flex items-center justify-center">
        <div className="flex items-center justify-center my-8 relative">
          <img src={Grid} alt="" className="opacity-80 mt-10" />
        </div>
        <div className="mx-5 mt-[15rem] md:mt-0 flex flex-col absolute items-center justify-center gap-10 font-mono">
          <button className="">Introducing Raft Cards</button>
          <h1 className="text-5xl md:text-7xl text-center font-semibold ">
            Building the future <br />{" "}
            <span>
              <h1 className="text-5xl md:text-7xl text-center mt-3">
                of banking
              </h1>
            </span>{" "}
          </h1>
          <h3 className="font-mono text-lg  font-semibold text-lightGrey">
            Experience the future of banking with RAFT. We're <br />
            <span>
              <h3 className="text-center mt-1">
                here to empower your financial journey
              </h3>
            </span>
          </h3>
          <button className="bg-button p-2 px-3 rounded-3xl font-semibold">
            Get Started
          </button>
        </div>
      </div>
    </>
  );
};

export default Hero;
