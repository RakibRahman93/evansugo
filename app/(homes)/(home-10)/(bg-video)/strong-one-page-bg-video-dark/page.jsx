import Footer9 from "@/components/footers/Footer9";
import Header10 from "@/components/headers/Header10";
import Home10 from "@/components/homes/home-10";
import Hero1 from "@/components/homes/home-10/heros/Hero1";
import Hero3 from "@/components/homes/home-10/heros/Hero3";
import { strongSinglePages } from "@/data/menu";

export const metadata = {
  title:
    "Home 10 BG Video Onepage Dark || Resonance &mdash; One & Multi Page React Nextjs Creative Template",
  description:
    "Resonance &mdash; One & Multi Page React Nextjs Creative Template",
};
export default function Home10BGVideoOnepageDark() {
  return (
    <>
      <div className="theme-strong">
        <div className="dark-mode">
          <div className="page bg-dark-1" id="top">
            <nav className="main-nav dark transparent stick-fixed wow-menubar wch-unset">
              <Header10 links={strongSinglePages} />
            </nav>
            <main id="main">
              <section
                className="home-section light-content scrollSpysection"
                id="home"
              >
                <Hero3 />
              </section>

              <Home10 onePage dark />
            </main>
            <footer className="footer-1 bg-dark-2 light-content">
              <Footer9 />
            </footer>
          </div>
        </div>
      </div>{" "}
    </>
  );
}
