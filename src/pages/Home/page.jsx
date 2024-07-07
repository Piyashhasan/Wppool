import Banner from "@/components/Banner/Banner";
import NavBar from "@/components/NavBar/NavBar";

const HomePage = () => {
  return (
    <>
      {/* --- Header section start --- */}
      <header className="px-[18px] py-[18] w-full">
        <div className="container bg-[#2042B6] rounded-[20px] overflow-hidden pb-[80px]">
          {/* nav start */}
          <nav>
            <NavBar />
          </nav>
          {/* nav end */}
          {/* banner start */}
          <div>
            <Banner />
          </div>
          {/* banner start */}
        </div>
      </header>

      {/* --- Header section end --- */}
    </>
  );
};

export default HomePage;
