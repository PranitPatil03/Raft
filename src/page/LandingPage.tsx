import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

const LandingPage = () => {
  return (
    <>
      <main className="h-screen">
        <Navbar></Navbar>
        <hr className="border-1 border-gray-300 dark:border-gray-700" />
        <Hero></Hero>
      </main>
    </>
  );
};

export default LandingPage;
