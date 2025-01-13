import Footer2 from "@/components/footers/Footer2";

import Header2 from "@/components/headers/Header2";

import Home2 from "@/components/homes/home-2";
import Hero from "@/components/homes/home-2/heros/Hero";
import Hero3 from "@/components/homes/home-2/heros/Hero3";
import { boldOnepage } from "@/data/menu";

export const metadata = {
  title:
    "Home 2 BG Video Onepage || Resonance &mdash; One & Multi Page React Nextjs Creative Template",
  description:
    "Resonance &mdash; One & Multi Page React Nextjs Creative Template",
};
export default function Home2BGVideoOnepage() {
  return (
    <>
      <div className="theme-bold">
        <div className="page" id="top">
          <div className="dark-mode">
            <nav className="main-nav dark dark-mode transparent stick-fixed wow-menubar">
              <Header2 links={boldOnepage} />{" "}
            </nav>{" "}
          </div>
          <main id="main">
            <section
              className="home-section light-content scrollSpysection"
              id="home"
            >
              <Hero3 />
            </section>

            <Home2 onePage />
          </main>
          <footer className="footer-1 bg-dark-1 light-content">
            <Footer2 />
          </footer>
        </div>{" "}
      </div>{" "}
    </>
  );
}
