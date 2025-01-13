import Header1 from "@/components/headers/Header1";
import Header1Multipage from "@/components/headers/Header1Multipage";
import Home1 from "@/components/homes/home-1";
import Hero2 from "@/components/homes/home-1/heros/Hero2";
import Image from "next/image";
import { menuItemsDark } from "@/data/menu";
import Footer1 from "@/components/footers/Footer1";
export const metadata = {
  title:
    "Home 1 Typed Text MultiPage Dark || Resonance &mdash; One & Multi Page React Nextjs Creative Template",
  description:
    "Resonance &mdash; One & Multi Page React Nextjs Creative Template",
};
export default function Home1TypedTextMultiPageDark() {
  return (
    <>
      <div className="dark-mode">
        {" "}
        <div className="theme-main">
          <div className="page bg-dark-1" id="top">
            <nav className="main-nav dark dark-mode transparent stick-fixed wow-menubar">
              <Header1Multipage links={menuItemsDark} />
            </nav>
            <main id="main">
              <section
                className="home-section bg-dark-1 light-content bg-scroll scrollSpysection"
                id="home"
              >
                <div className="bg-shape-1">
                  <Image
                    width="1443"
                    height="844"
                    src="/assets/images/bg-shape-1.svg"
                    alt=""
                    className="opacity-004"
                  />
                </div>
                <Hero2 />
              </section>
              <Home1 dark={true} />
            </main>
            <Footer1 dark />
          </div>{" "}
        </div>
      </div>{" "}
    </>
  );
}
