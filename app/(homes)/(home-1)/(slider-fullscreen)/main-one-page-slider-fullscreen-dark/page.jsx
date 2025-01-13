import Footer1 from "@/components/footers/Footer1";

import Header1 from "@/components/headers/Header1";

import Home1 from "@/components/homes/home-1";
import Hero4 from "@/components/homes/home-1/heros/Hero4";
import { mainDemoOnepage } from "@/data/menu";

export const metadata = {
  title:
    "Home 1 Slider Fullscreen Onepage Dark || Resonance &mdash; One & Multi Page React Nextjs Creative Template",
  description:
    "Resonance &mdash; One & Multi Page React Nextjs Creative Template",
};
export default function Home1SliderFullscreenOnepageDark() {
  return (
    <>
      <div className="dark-mode">
        {" "}
        <div className="theme-main">
          <div className="page bg-dark-1" id="top">
            <nav className="main-nav dark dark-mode transparent stick-fixed wow-menubar wch-unset">
              <Header1 links={mainDemoOnepage} />
            </nav>
            <main id="main">
              <Hero4 />
              <Home1 onePage dark={true} />
            </main>
            <Footer1 dark />
          </div>{" "}
        </div>
      </div>{" "}
    </>
  );
}
