import Footer7 from "@/components/footers/Footer7";
import Header7 from "@/components/headers/Header7";
import Home7 from "@/components/homes/home-7";
import Hero1 from "@/components/homes/home-7/heros/Hero1";
import Hero4 from "@/components/homes/home-7/heros/Hero4";
import Image from "next/image";
import dynamic from "next/dynamic";
import { gradientOnePage } from "@/data/menu";
const ParallaxContainer = dynamic(
  () => import("@/components/common/ParallaxContainer"),
  {
    ssr: false, // Disable server-side rendering
  }
);
export const metadata = {
  title:
    "Home 7 Image Parallax2 Onepage Dark || Resonance &mdash; One & Multi Page React Nextjs Creative Template",
  description:
    "Resonance &mdash; One & Multi Page React Nextjs Creative Template",
};
export default function Home7ImageParallax2OnepageDark() {
  return (
    <>
      <div className="theme-gradient">
        <div className="dark-mode">
          <div className="page bg-dark-1" id="top">
            <nav className="main-nav dark transparent light-after-scroll stick-fixed wow-menubar wch-unset">
              <Header7 links={gradientOnePage} />
            </nav>
            <main id="main">
              <ParallaxContainer
                className="home-section bg-dark-1 bg-dark-alpha-70 light-content parallax-5 scrollSpysection"
                style={{
                  backgroundImage:
                    "url(/assets/images/demo-gradient/section-bg-5.jpg)",
                }}
                id="home"
              >
                <Hero4 />
              </ParallaxContainer>

              <Home7 onePage dark />
            </main>
            <footer className="page-section footer bg-dark-2 light-content overflow-hidden pb-30">
              <div className="bg-shape-4 opacity-003">
                <Image
                  width="1443"
                  height="644"
                  src="/assets/images/demo-gradient/bg-shape-1-white.svg"
                  alt=""
                />
              </div>
              <Footer7 />
            </footer>
          </div>{" "}
        </div>
      </div>
    </>
  );
}
