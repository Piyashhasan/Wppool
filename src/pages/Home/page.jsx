import AboutWppool from "@/components/AboutWppool/AboutWppool";
import AllCompanies from "@/components/AllCompanies/AllCompanies";
import Banner from "@/components/Banner/Banner";
import Dashboard from "@/components/Dashboard/Dashboard";
import Footer from "@/components/Footer/Footer";
import NavBar from "@/components/NavBar/NavBar";
import PortfolioCompany from "@/components/PortfolioCompany/PortfolioCompany";
import PotentialFuture from "@/components/PotentialFututre/PotentialFuture";
import StateUsa from "@/components/StateUsa/StateUsa";
import StoriesIdeas from "@/components/StoriesIdeas/StoriesIdeas";

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

      {/* --- Dashboard section start --- */}
      <section className="container">
        <Dashboard />
      </section>
      {/* --- Dashboard section end --- */}

      {/* --- All companies section start --- */}
      <section className="container">
        <AllCompanies />
      </section>
      {/* --- All companies section end --- */}

      {/* --- Potential future listings section start --- */}
      <section className="container">
        <PotentialFuture />
      </section>
      {/* --- Potential future listing section start --- */}

      {/* --- State of USA section start --- */}
      <section className="container">
        <StateUsa />
      </section>
      {/* --- State of USA section start --- */}

      {/* --- Stories & ideas section start --- */}
      <section className="container">
        <StoriesIdeas />
      </section>
      {/* --- Stories & ideas section end --- */}

      {/* --- About wppool section start --- */}
      <section className="container">
        <AboutWppool />
      </section>
      {/* --- About wppool section end --- */}

      {/* --- Portfolio company section start --- */}
      <section className="container">
        <PortfolioCompany />
      </section>
      {/* --- Portfolio company section end --- */}

      {/* --- Footer section start --- */}
      <section className="footer-wrapper">
        <Footer />
      </section>
      {/* --- Footer section end --- */}
    </>
  );
};

export default HomePage;
