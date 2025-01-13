import dynamic from "next/dynamic";
const ParallaxContainer = dynamic(
  () => import("@/components/common/ParallaxContainer"),
  {
    ssr: false, // Disable server-side rendering
  }
);
export default function Hero2() {
  return (
    <>
      {/* Top Dark Gradient Overlay */}
      <div className="position-absolute top-0 bottom-0 start-0 end-0 bg-gradient-dark-1 opacity-07" />
      {/* End Top Dark Gradient Overlay */}
      <div className="container min-height-100vh d-flex align-items-center pt-100 pb-100 pt-sm-120 pb-sm-120">
        {/* Home Section Content */}
        <div className="home-content">
          <div className="row">
            {/* Home Section Text */}
            <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
              <h1 className="hs-title-9 mb-40 mb-sm-20 wow fadeInUp">
                Global Marketing Consulting Agency Based in Melburn
              </h1>
              <div className="row">
                <div className="col-lg-10 offset-lg-1">
                  <p
                    className="hs-descr mb-50 mb-sm-40 wow fadeInUp"
                    data-wow-delay="0.2s"
                  >
                    We’re a global marketing company delivering innovative
                    solutions to our clients.
                  </p>
                </div>
              </div>
              <div
                className="local-scroll wow fadeInUp wch-unset"
                data-wow-delay="0.4s"
              >
                <a
                  href="#contact"
                  className="btn btn-mod btn-color btn-large btn-round btn-hover-anim"
                >
                  <span>Get a Consultation</span>
                </a>
              </div>
            </div>
            {/* End Home Section Text */}
          </div>
        </div>
        {/* End Home Section Content */}
        {/* Scroll Down */}
        <div
          className="local-scroll scroll-down-wrap wow fadeInUp"
          data-wow-offset={0}
        >
          <a href="#about" className="scroll-down">
            <i className="mi-chevron-down" />
            <span className="visually-hidden">Scroll to the next section</span>
          </a>
        </div>
        {/* End Scroll Down */}
      </div>
    </>
  );
}
