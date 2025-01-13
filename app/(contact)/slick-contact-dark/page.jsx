import Footer8 from "@/components/footers/Footer8";
import Header9 from "@/components/headers/Header9";
import Blogs2 from "@/components/homes/home-9/Blogs2";
import Contact from "@/components/homes/home-9/Contact";
import ContactDark from "@/components/homes/home-9/ContactDark";
import Faq from "@/components/homes/home-9/Faq";

import { slickMultipages, slickMultipagesDark } from "@/data/menu";
import Image from "next/image";

export const metadata = {
  title:
    "Slick Contacts Dark || Resonance &mdash; One & Multi Page React Nextjs Creative Template",
  description:
    "Resonance &mdash; One & Multi Page React Nextjs Creative Template",
};
const onePage = false;
const dark = true;
export default function SlickContactPageDark() {
  return (
    <>
      <div className="theme-slick">
        <div className="dark-mode">
          <div className="page bg-dark-1" id="top">
            <nav className="main-nav dark dark-mode transparent stick-fixed wow-menubar wch-unset">
              <Header9 links={slickMultipagesDark} />
            </nav>
            <main id="main">
              <section
                className="page-section bg-dark-1 bg-gradient-gray-dark-1 light-content bg-scroll overflow-hidden"
                id="home"
              >
                {/* <!-- Background Shape --> */}
                <div className="bg-shape-1 opacity-003">
                  <Image
                    src="/assets/images/demo-fancy/bg-shape-1.svg"
                    width={1443}
                    height={844}
                    alt=""
                  />
                </div>
                {/* <!-- End Background Shape --> */}

                <div className="container position-relative pt-sm-40 text-center">
                  <div className="row">
                    <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
                      <h1 className="hs-title-10 mb-10 wow fadeInUp">
                        Contact Us
                      </h1>

                      <p
                        className="section-descr mb-0 wow fadeInUp"
                        data-wow-delay="0.2s"
                      >
                        Crafting immersive digital journeys for brands.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <section
                className={`page-section  scrollSpysection  ${
                  dark ? "bg-dark-1 light-content" : ""
                } `}
                id="contact"
              >
                {dark ? <ContactDark /> : <Contact />}
              </section>
              <hr className={`mt-0 mb-0 ${dark ? "white" : ""} `} />
              <section className="page-section bg-dark-1 light-content z-index-1">
                <div className="container position-relative">
                  {/* Decorative Waves */}
                  <div className="position-relative">
                    <div
                      className="decoration-21 opacity-07 d-none d-lg-block"
                      data-rellax-y=""
                      data-rellax-speed="0.7"
                      data-rellax-percentage="0.35"
                    >
                      <Image
                        src="/assets/images/demo-slick/decoration-4.svg"
                        alt=""
                        width={148}
                        height={148}
                      />
                    </div>
                  </div>
                  {/* End Decorative Waves */}
                  <Faq />
                </div>
              </section>
            </main>
            <footer className="page-section dark footer bg-dark-2 light-content position-relative overflow-hidden pb-30">
              <div className="bg-shape-4 opacity-003">
                <Image
                  src="/assets/images/demo-slick/bg-shape-4.svg"
                  width={1600}
                  height={268}
                  alt=""
                />
              </div>
              <Footer8 />
            </footer>
          </div>{" "}
        </div>
      </div>
    </>
  );
}
