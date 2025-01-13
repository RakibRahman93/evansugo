import React from "react";
import Image from "next/image";
export default function Service() {
  return (
    <div className="container position-relative">
      <div className="row">
        <div className="col-lg-8 offset-lg-2 text-center">
          <h2 className="section-caption-gradient mb-20 mb-xs-10">
            Our Services
          </h2>
          <div className="section-line-gradient mx-auto mb-20" />
          <h3 className="section-title mb-40 mb-sm-30">
            We provide the best design solutions for our clients.
          </h3>
          <p className="text-gray mb-80 mb-sm-60">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida phasellus vitae pharetra ligula.
          </p>
        </div>
      </div>
      <div className="row wow fadeInUp">
        {/* Services Tabs */}
        <div className="col-lg-5 col-xl-4 mb-md-50 mb-sm-30">
          <ul className="nav nav-tabs services-7-tabs" role="tablist">
            <li>
              <a
                href="#services-item-1a"
                className="active"
                aria-controls="services-item-1a"
                role="tab"
                aria-selected="true"
                data-bs-toggle="tab"
              >
                <h4 className="services-7-title">Branding</h4>
                <div className="services-7-text">
                  Mauris porttitor ante ut cursus proin purus, semper et risus
                  at dignissi.
                </div>
                <div className="services-7-arrow">
                  <i className="mi-arrow-right size-24" />
                </div>
              </a>
            </li>
            <li>
              <a
                href="#services-item-2a"
                aria-controls="services-item-2a"
                role="tab"
                aria-selected="false"
                data-bs-toggle="tab"
              >
                <h4 className="services-7-title">UI/UX Design</h4>
                <div className="services-7-text">
                  Sell ut lacus a sem varius dictum sed eget augue. Nullam vitae
                  tristique libero.
                </div>
                <div className="services-7-arrow">
                  <i className="mi-arrow-right size-24" />
                </div>
              </a>
            </li>
            <li>
              <a
                href="#services-item-3a"
                aria-controls="services-item-3a"
                role="tab"
                aria-selected="false"
                data-bs-toggle="tab"
              >
                <h4 className="services-7-title">Web Development</h4>
                <div className="services-7-text">
                  Pellentesque enim nisi, porta quis orci eu, vulputate lorem
                  ipsum eleifend tortor.
                </div>
                <div className="services-7-arrow">
                  <i className="mi-arrow-right size-24" />
                </div>
              </a>
            </li>
            <li>
              <a
                href="#services-item-4a"
                aria-controls="services-item-4a"
                role="tab"
                aria-selected="false"
                data-bs-toggle="tab"
              >
                <h4 className="services-7-title">Marketing</h4>
                <div className="services-7-text">
                  Orsi varius natoque penatibus et magnis dis parturient montes,
                  ridiculus mus.
                </div>
                <div className="services-7-arrow">
                  <i className="mi-arrow-right size-24" />
                </div>
              </a>
            </li>
          </ul>
        </div>
        {/* End Services Tabs */}
        {/* Services Images */}
        <div className="col-lg-7 offset-xl-1">
          <div className="tab-content position-sticky">
            {/* Tab Image */}
            <div
              className="tab-pane show fade active"
              id="services-item-1a"
              role="tabpanel"
            >
              <div className="services-7-content">
                <div className="services-7-image">
                  <Image
                    src="/assets/images/demo-gradient/services/service-1.png"
                    width={1000}
                    height={790}
                    alt="Image Description"
                  />
                </div>
                <div className="small text-gray text-center mt-3">
                  Illustration by{" "}
                  <a
                    href="https://icons8.com/illustrations/author/CkHJmwURlxnt"
                    rel="noopener nofollow"
                    target="_blank"
                  >
                    Olha Khomich{" "}
                  </a>
                  from{" "}
                  <a
                    href="https://icons8.com/illustrations"
                    rel="noopener nofollow"
                    target="_blank"
                  >
                    Ouch
                  </a>
                  !
                </div>
              </div>
            </div>
            {/* End Tab Image */}
            {/* Tab Image */}
            <div
              className="tab-pane show fade"
              id="services-item-2a"
              role="tabpanel"
            >
              <div className="services-7-content">
                <div className="services-7-image">
                  <Image
                    src="/assets/images/demo-gradient/services/service-2.png"
                    alt="Image Description"
                    width={1000}
                    height={790}
                  />
                </div>
                <div className="small text-gray text-center mt-3">
                  Illustration by{" "}
                  <a
                    href="https://icons8.com/illustrations/author/CkHJmwURlxnt"
                    rel="noopener nofollow"
                    target="_blank"
                  >
                    Olha Khomich{" "}
                  </a>
                  from{" "}
                  <a
                    href="https://icons8.com/illustrations"
                    rel="noopener nofollow"
                    target="_blank"
                  >
                    Ouch
                  </a>
                  !
                </div>
              </div>
            </div>
            {/* End Tab Image */}
            {/* Tab Image */}
            <div
              className="tab-pane show fade"
              id="services-item-3a"
              role="tabpanel"
            >
              <div className="services-7-content">
                <div className="services-7-image">
                  <Image
                    src="/assets/images/demo-gradient/services/service-3.png"
                    alt="Image Description"
                    width={1000}
                    height={790}
                  />
                </div>
                <div className="small text-gray text-center mt-3">
                  Illustration by{" "}
                  <a
                    href="https://icons8.com/illustrations/author/CkHJmwURlxnt"
                    rel="noopener nofollow"
                    target="_blank"
                  >
                    Olha Khomich{" "}
                  </a>
                  from{" "}
                  <a
                    href="https://icons8.com/illustrations"
                    rel="noopener nofollow"
                    target="_blank"
                  >
                    Ouch
                  </a>
                  !
                </div>
              </div>
            </div>
            {/* End Tab Image */}
            {/* Tab Image */}
            <div
              className="tab-pane show fade"
              id="services-item-4a"
              role="tabpanel"
            >
              <div className="services-7-content">
                <div className="services-7-image">
                  <Image
                    src="/assets/images/demo-gradient/services/service-4.png"
                    alt="Image Description"
                    width={1000}
                    height={790}
                  />
                </div>
                <div className="small text-gray text-center mt-3">
                  Illustration by{" "}
                  <a
                    href="https://icons8.com/illustrations/author/CkHJmwURlxnt"
                    rel="noopener nofollow"
                    target="_blank"
                  >
                    Olha Khomich{" "}
                  </a>
                  from{" "}
                  <a
                    href="https://icons8.com/illustrations"
                    rel="noopener nofollow"
                    target="_blank"
                  >
                    Ouch
                  </a>
                  !
                </div>
              </div>
            </div>
            {/* End Tab Image */}
          </div>
        </div>
        {/* End Services Images */}
      </div>
    </div>
  );
}
