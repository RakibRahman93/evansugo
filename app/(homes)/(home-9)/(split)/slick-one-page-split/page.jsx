import Footer8 from "@/components/footers/Footer8";

import Header9 from "@/components/headers/Header9";
import Home9 from "@/components/homes/home-9";
import Hero1 from "@/components/homes/home-9/heros/Hero1";
import Hero2 from "@/components/homes/home-9/heros/Hero2";
import { slickOnepage } from "@/data/menu";
import Image from "next/image";

export const metadata = {
  title:
    "Home 9 Split Onepage || Resonance &mdash; One & Multi Page React Nextjs Creative Template",
  description:
    "Resonance &mdash; One & Multi Page React Nextjs Creative Template",
};
export default function Home9SplitOnepage() {
  return (
    <>
      <div className="theme-slick">
        <div className="page" id="top">
          <div className="dark-mode">
            <nav className="main-nav dark stick-fixed wow-menubar wch-unset">
              <Header9 links={slickOnepage} />
            </nav>{" "}
          </div>
          <main id="main">
            <section className="home-section scrollSpysection" id="home">
              <Hero2 />
            </section>

            <Home9 onePage />
          </main>
          <footer className="page-section footer position-relative overflow-hidden pb-30">
            <div className="bg-shape-4">
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
    </>
  );
}
