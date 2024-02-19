import { logo } from "@/assets";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const Navbar = () => {
  return (
    <nav className="flex flex-row w-full justify-between font-mono p-6 h-[70px]">
      <div className="flex gap-2 text-lg items-center">
        <img src={logo} className="h-[30px] w-[30px] object-cover" alt="Logo" />
        <span className="text-2xl">Raft</span>
      </div>
      <div className="hidden md:flex gap-12 items-center text-lg text-gray-400">
        <p className="">Solutions</p>
        <p className="">Learn</p>
        <p className="">About</p>
      </div>
      <div className="hidden md:flex gap-6 items-center text-lg">
        <button className="font-medium">Login</button>
        <button className="bg-button p-2 px-3 rounded-3xl font-semibold">
          Get Started
        </button>
      </div>
      <div className="flex justify-center md:hidden">
        <Popover>
          <PopoverTrigger>
            <i className="fi fi-rr-menu-burger text-2xl"></i>
          </PopoverTrigger>
          <PopoverContent>
            <div className="flex flex-col gap-5 items-center text-lg">
              <p className="">Solutions</p>
              <p className="">Learn</p>
              <p className="">About</p>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </nav>
  );
};

export default Navbar;
