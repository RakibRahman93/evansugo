import Header1 from "@/components/headers/Header1";
import Home1 from "@/components/homes/home-1";
import dynamic from "next/dynamic";
const ParallaxContainer = dynamic(
  () => import("@/components/common/ParallaxContainer"),
  {
    ssr: false, // Disable server-side rendering
  }
);
import Hero1 from "@/components/homes/home-1/heros/Hero1";
import Hero3 from "@/components/homes/home-1/heros/Hero3";

import { mainDemoOnepage } from "@/data/menu";
import Footer1 from "@/components/footers/Footer1";

export const metadata = {
  title:
    "Home 1 Image Parallax Onepage Dark || Resonance &mdash; One & Multi Page React Nextjs Creative Template",
  description:
    "Resonance &mdash; One & Multi Page React Nextjs Creative Template",
};
export default function Home1ImageParallaxOnepageDark() {
  return (
    <>
      <div className="dark-mode">
        {" "}
        <div className="theme-main">
          <div className="page bg-dark-1" id="top">
            <nav className="main-nav transparent stick-fixed wow-menubar">
              <Header1 links={mainDemoOnepage} />
            </nav>{" "}
            <main id="main">
              <ParallaxContainer
                className="home-section bg-dark-1 bg-dark-alpha-60 light-content parallax-5 scrollSpysection"
                style={{
                  backgroundImage:
                    "url(/assets/images/full-width-images/section-bg-13.jpg)",
                }}
                id="home"
              >
                <Hero3 />
              </ParallaxContainer>
              <Home1 onePage dark={true} />
            </main>
            <Footer1 dark />
          </div>{" "}
        </div>
      </div>{" "}
    </>
  );
}
