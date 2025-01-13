import Footer1 from "@/components/footers/Footer1";

import Header1 from "@/components/headers/Header1";
import Header1Multipage from "@/components/headers/Header1Multipage";
import Home1 from "@/components/homes/home-1";

import Hero1 from "@/components/homes/home-1/heros/Hero1";
import Hero5 from "@/components/homes/home-1/heros/Hero5";
import { menuItemsDark } from "@/data/menu";
export const metadata = {
  title:
    "Home 1 Slider Background MultiPage Dark || Resonance &mdash; One & Multi Page React Nextjs Creative Template",
  description:
    "Resonance &mdash; One & Multi Page React Nextjs Creative Template",
};
export default function Home1SliderBackgroundMultiPageDark() {
  return (
    <>
      <div className="dark-mode">
        {" "}
        <div className="theme-main">
          <div className="page bg-dark-1" id="top">
            <nav className="main-nav dark dark-mode transparent stick-fixed wow-menubar ">
              <Header1Multipage links={menuItemsDark} />
            </nav>
            <main id="main">
              <div
                className="home-section relative bg-dark-1 light-content scrollSpysection"
                id="home"
              >
                <Hero5 dark />
              </div>
              <Home1 dark={true} />
            </main>
            <Footer1 dark />
          </div>{" "}
        </div>
      </div>{" "}
    </>
  );
}
