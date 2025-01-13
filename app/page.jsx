import Hero from "@/components/preview/Hero";
import dynamic from "next/dynamic";

const ParallaxContainer = dynamic(
  () => import("@/components/common/ParallaxContainer"),
  {
    ssr: false, // Disable server-side rendering
  }
);
import Showcase from "@/components/preview/Showcase";
import Multipage from "@/components/preview/Multipage";
import Onepage from "@/components/preview/Onepage";
import Intro from "@/components/preview/Intro";
import Testomonials from "@/components/preview/Testomonials";
import FooterPreview from "@/components/footers/FooterPreview";
import HeaderPreview from "@/components/headers/HeaderPreview";
import Home1 from "@/components/homes/home-1";
import Home2 from "@/components/homes/home-2";
import Home2BGVideoOnepage from "./(homes)/(home-2)/(bg-video)/bold-one-page-bg-video/page";
import Home2BGVideoOnepageDark from "./(homes)/(home-2)/(bg-video)/bold-one-page-bg-video-dark/page";

export const metadata = {
  title:
    "Preview Page || Resonance &mdash; One & Multi Page React Nextjs Creative Template",
  description:
    "Resonance &mdash; One & Multi Page React Nextjs Creative Template",
};

export default function Home() {
  return (
    <>
      <div className="theme-main">
        <div className="page" id="top">
          {/* Navigation Panel */}
          {/* <nav className="main-nav transparent stick-fixed wow-menubar">
            <HeaderPreview />
          </nav> */}
          {/* End Navigation Panel */}
          <main id="main">
            {/* Home Section */}
            <Home2BGVideoOnepageDark/>
          </main>
          {/* Footer */}
          
          {/* End Footer */}
        </div>
      </div>
    </>
  );
}
