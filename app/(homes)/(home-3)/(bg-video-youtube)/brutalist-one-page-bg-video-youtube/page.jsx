import Footer3 from "@/components/footers/Footer3";
import Header3 from "@/components/headers/Header3";
import Home3 from "@/components/homes/home-3";
import Hero1 from "@/components/homes/home-3/heros/Hero1";
import Hero3 from "@/components/homes/home-3/heros/Hero3";
import { brutalistOnepage } from "@/data/menu";

export const metadata = {
  title:
    "Home 3 BG VideoYoutube Onepage || Resonance &mdash; One & Multi Page React Nextjs Creative Template",
  description:
    "Resonance &mdash; One & Multi Page React Nextjs Creative Template",
};
export default function Home3BGVideoYoutubeOnepage() {
  return (
    <>
      <div className="theme-brutalist">
        <div className="page" id="top">
          <nav className="main-nav dark transparent stick-fixed wow-menubar">
            <Header3 links={brutalistOnepage} />
          </nav>
          <main id="main">
            <section
              className="home-section bg-dark-alpha-50 bg-scroll light-content scrollSpysection"
              style={{
                backgroundImage:
                  "url(/assets/images/mobile-video-placeholder-1.jpg)",
              }}
              id="home"
            >
              <Hero3 />
            </section>

            <Home3 onePage />
          </main>
          <footer className="page-section footer-1 bg-dark-1 light-content">
            <Footer3 />
          </footer>
        </div>
      </div>
    </>
  );
}
