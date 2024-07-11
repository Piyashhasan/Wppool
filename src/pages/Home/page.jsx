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
      <nav className="sticky top-2 z-[40] max-w-[1316px] mx-auto space-horizontal rounded-t-[20px]">
        <NavBar />
      </nav>

      <main className="w-full space-horizontal">
        <div className="container bg-[#2042B6] rounded-[20px] pb-[80px]">
          <Banner />
        </div>
      </main>

      {/* --- Header section end --- */}

      {/* --- Dashboard section start --- */}
      <section className="container space-horizontal">
        <Dashboard />
      </section>
      {/* --- Dashboard section end --- */}

      {/* --- All companies section start --- */}
      <section className="container space-horizontal">
        <AllCompanies />
      </section>
      {/* --- All companies section end --- */}

      {/* --- Potential future listings section start --- */}
      <section className="container space-horizontal">
        <PotentialFuture />
      </section>
      {/* --- Potential future listing section start --- */}

      {/* --- State of USA section start --- */}
      <section className="container space-horizontal">
        <StateUsa />
      </section>
      {/* --- State of USA section start --- */}

      {/* --- Stories & ideas section start --- */}
      <section className="container space-horizontal">
        <StoriesIdeas />
      </section>
      {/* --- Stories & ideas section end --- */}

      {/* --- About wppool section start --- */}
      <section className="container space-horizontal">
        <AboutWppool />
      </section>
      {/* --- About wppool section end --- */}

      {/* --- Portfolio company section start --- */}
      <section className="container space-horizontal">
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
