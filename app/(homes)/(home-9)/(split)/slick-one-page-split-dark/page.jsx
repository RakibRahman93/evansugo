import Footer8 from "@/components/footers/Footer8";

import Header9 from "@/components/headers/Header9";
import Home9 from "@/components/homes/home-9";
import Hero1 from "@/components/homes/home-9/heros/Hero1";
import Hero2 from "@/components/homes/home-9/heros/Hero2";
import { slickOnepage } from "@/data/menu";
import Image from "next/image";

export const metadata = {
  title:
    "Home 9 Split Onepage Dark || Resonance &mdash; One & Multi Page React Nextjs Creative Template",
  description:
    "Resonance &mdash; One & Multi Page React Nextjs Creative Template",
};
export default function Home9SplitOnepageDark() {
  return (
    <>
      <div className="theme-slick">
        <div className="dark-mode">
          <div className="page bg-dark-1" id="top">
            <nav className="main-nav dark stick-fixed wow-menubar wch-unset">
              <Header9 links={slickOnepage} />
            </nav>
            <main id="main">
              <section
                className="home-section bg-dark-1 light-content scrollSpysection"
                id="home"
              >
                <Hero2 dark />
              </section>

              <Home9 onePage dark />
            </main>
            <footer className="page-section footer bg-dark-2 light-content position-relative overflow-hidden pb-30">
              <div className="bg-shape-4 opacity-003">
                <Image
                  src="/assets/images/demo-slick/bg-shape-4.svg"
                  width={1600}
                  height={268}
                  alt=""
                />
              </div>
              <Footer8 />
            </footer>
          </div>
        </div>
      </div>
    </>
  );
}
