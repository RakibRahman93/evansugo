import Footer3 from "@/components/footers/Footer3";
import Header3 from "@/components/headers/Header3";
import Home3 from "@/components/homes/home-3";
import Hero1 from "@/components/homes/home-3/heros/Hero1";
import Hero3 from "@/components/homes/home-3/heros/Hero3";
import { brutalistOnepage } from "@/data/menu";

export const metadata = {
  title:
    "Home 3 BG VideoYoutube Onepage Dark || Resonance &mdash; One & Multi Page React Nextjs Creative Template",
  description:
    "Resonance &mdash; One & Multi Page React Nextjs Creative Template",
};
export default function Home3BGVideoYoutubeOnepageDark() {
  return (
    <>
      {" "}
      <div className="theme-brutalist">
        {" "}
        <div className="dark-mode">
          <div className="page bg-dark-1" id="top">
            <nav className="main-nav dark dark-mode transparent stick-fixed wow-menubar">
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

              <Home3 onePage dark />
            </main>
            <footer className="page-section footer-2 bg-dark-2 light-content">
              <Footer3 />
            </footer>
          </div>
        </div>
      </div>
    </>
  );
}
