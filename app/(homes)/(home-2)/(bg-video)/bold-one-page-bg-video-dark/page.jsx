import Footer2 from "@/components/footers/Footer2";

import Header2 from "@/components/headers/Header2";
import Hero5 from "@/components/homes/home-1/heros/Hero5";

import Home2 from "@/components/homes/home-2";
import Hero from "@/components/homes/home-2/heros/Hero";
import Hero3 from "@/components/homes/home-2/heros/Hero3";
import { boldOnepage } from "@/data/menu";

export const metadata = {
  title:
    "Evans portfolio",
  description:
    "I HELP BRANDS TO SCALE SMARTER.",
};
export default function Home2BGVideoOnepageDark() {
  return (
    <>
      <div className="theme-bold">
        {" "}
        <div className="dark-mode">
          <div className="page bg-dark-1" id="top">
            <nav className="main-nav dark dark-mode transparent stick-fixed wow-menubar">
              <Header2 links={boldOnepage} />{" "}
            </nav>{" "}
            <main id="main">
              <section
                className="home-section light-content scrollSpysection"
                id="home"
              >
                <Hero5 />
              </section>

              <Home2 onePage dark />
            </main>
            <footer className="footer-1 bg-dark-2 light-content">
              <Footer2 />
            </footer>
          </div>{" "}
        </div>
      </div>
    </>
  );
}
