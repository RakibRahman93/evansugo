import Footer3 from "@/components/footers/Footer3";
import Footer4 from "@/components/footers/Footer4";
import Header4 from "@/components/headers/Header4";
import Home4 from "@/components/homes/home-4";
import Hero1 from "@/components/homes/home-4/heros/Hero1";
import { corporateOnepage } from "@/data/menu";

export const metadata = {
  title:
    "Home 4 Main Demo Onepage || Resonance &mdash; One & Multi Page React Nextjs Creative Template",
  description:
    "Resonance &mdash; One & Multi Page React Nextjs Creative Template",
};
export default function Home4MainDemoOnepage() {
  return (
    <>
      <div className="theme-corporate">
        <div className="page" id="top">
          <nav className="main-nav transparent sticky wow-menubar wch-unset">
            <Header4 links={corporateOnepage} />
          </nav>

          <main id="main">
            <section className="page-section scrollSpysection" id="home">
              <Hero1 />
            </section>

            <Home4 onePage />
          </main>
          <footer className="footer-2 pb-50">
            <Footer4 />
          </footer>
        </div>{" "}
      </div>
    </>
  );
}
