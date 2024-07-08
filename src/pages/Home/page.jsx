import AllCompanies from "@/components/AllCompanies/AllCompanies";
import Banner from "@/components/Banner/Banner";
import NavBar from "@/components/NavBar/NavBar";

const HomePage = () => {
  return (
    <>
      {/* --- Header section start --- */}
      <header className="px-[18px] pt-[18px] w-full">
        <div className="container bg-[#2042B6] rounded-[20px] overflow-hidden pb-[80px]">
          <nav>
            <NavBar />
          </nav>
          <div>
            <Banner />
          </div>
        </div>
      </header>
      {/* --- Header section end --- */}
      {/* --- All companies section start --- */}
      <section className="container">
        <AllCompanies />
      </section>
      {/* --- All companies section end --- */}
    </>
  );
};

export default HomePage;
