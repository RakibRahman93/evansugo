import Footer2 from "@/components/footers/Footer2";

import Header2 from "@/components/headers/Header2";

import Home2 from "@/components/homes/home-2";

import Hero2 from "@/components/homes/home-2/heros/Hero2";
import { boldOnepage } from "@/data/menu";

export const metadata = {
  title:
    "Home 2 Typed Text Onepage Dark || Resonance &mdash; One & Multi Page React Nextjs Creative Template",
  description:
    "Resonance &mdash; One & Multi Page React Nextjs Creative Template",
};
export default function Home2TypedTextOnepageDark() {
  return (
    <>
      <div className="theme-bold">
        {" "}
        <div className="dark-mode">
          <div className="page bg-dark-1" id="top">
            <nav className="main-nav dark dark-mode transparent stick-fixed wow-menubar">
              <Header2 links={boldOnepage} />
            </nav>
            <main id="main">
              <section
                className="home-section bg-dark-1 light-content parallax-mousemove-scene scrollSpysection"
                id="home"
              >
                <Hero2 dark />
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
