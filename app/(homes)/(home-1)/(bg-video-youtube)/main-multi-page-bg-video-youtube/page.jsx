import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import Header1Multipage from "@/components/headers/Header1Multipage";
import Home1 from "@/components/homes/home-1";
import { menuItems } from "@/data/menu";
import Hero7 from "@/components/homes/home-1/heros/Hero7";

export const metadata = {
  title:
    "Home 1 BG Video Youtube MultiPage || Resonance &mdash; One & Multi Page React Nextjs Creative Template",
  description:
    "Resonance &mdash; One & Multi Page React Nextjs Creative Template",
};
export default function Home1BGVideoYoutubeMultiPage() {
  return (
    <>
      <div className="theme-main">
        <div className="page" id="top">
          <div className="dark-mode">
            <nav className="main-nav dark light-after-scroll transparent stick-fixed wow-menubar">
              <Header1Multipage links={menuItems} />
            </nav>{" "}
          </div>
          <main id="main">
            <Hero7 />
            <Home1 />
          </main>
          <Footer1 />
        </div>{" "}
      </div>
    </>
  );
}
