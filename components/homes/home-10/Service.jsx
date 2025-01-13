import React from "react";

export default function Service() {
  return (
    <>
      <ul
        className="nav nav-tabs tpl-alt-tabs mb-20 mb-xs-0 wow fadeInUp"
        role="tablist"
      >
        <li className="nav-item" role="presentation">
          <a
            href="#service-branding"
            className="nav-link active"
            data-bs-toggle="tab"
            role="tab"
            aria-selected="true"
          >
            <div className="alt-tabs-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={64}
                height={64}
                viewBox="0 0 58 64"
                aria-hidden="true"
              >
                <path d="M40.875 10c8.625 0 15.125 5.375 15.125 14.5 0 3.875-1.625 8.875-5.125 13.125s-5.625 6.5-12.5 11-10.375 5.375-10.375 5.375-3.5-0.875-10.375-5.375-9-6.75-12.5-11-5.125-9.25-5.125-13.125c0-9.125 6.5-14.5 15.125-14.5 4.875 0 10.25 2.25 12.875 6.625 2.625-4.375 8-6.625 12.875-6.625zM49.375 36.375c1.5-1.75 2.75-3.875 3.5-6.125 0.75-2 1.125-3.875 1.125-5.75 0-3.75-1.25-7-3.625-9.25-1.125-1-2.5-1.875-4.125-2.375-1.625-0.625-3.5-0.875-5.375-0.875-4.75 0-9.125 2.25-11.125 5.625l-1.75 2.875-1.75-2.875c-2-3.375-6.375-5.625-11.125-5.625-1.875 0-3.75 0.25-5.375 0.875-1.625 0.5-3 1.375-4.125 2.375-2.375 2.25-3.625 5.5-3.625 9.25 0 1.875 0.375 3.75 1.125 5.75 0.75 2.25 2 4.375 3.5 6.125 3.375 4 5.25 6.125 12.125 10.625 5 3.375 8.125 4.5 9.25 4.875 1.125-0.375 4.25-1.5 9.25-4.875 6.875-4.5 8.75-6.625 12.125-10.625z" />
              </svg>
            </div>
            Branding
          </a>
        </li>
        <li className="nav-item" role="presentation">
          <a
            href="#service-ui-ux-design"
            className="nav-link"
            data-bs-toggle="tab"
            role="tab"
            aria-selected="false"
          >
            <div className="alt-tabs-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={60}
                height={64}
                viewBox="0 0 60 64"
                aria-hidden="true"
              >
                <path d="M60 48h-22v2h8v2h-32.125v-2h8v-2h-21.875v-36h60v36zM2 14v32h56v-32h-56z" />
              </svg>
            </div>
            UI/UX Design
          </a>
        </li>
        <li className="nav-item" role="presentation">
          <a
            href="#service-animation"
            className="nav-link"
            data-bs-toggle="tab"
            role="tab"
            aria-selected="false"
          >
            <div className="alt-tabs-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={50}
                height={64}
                viewBox="0 0 50 64"
                aria-hidden="true"
              >
                <path d="M0 11h50v42h-50v-42zM9 51v-6h-7v6h7zM9 43v-6h-7v6h7zM9 35v-6h-7v6h7zM9 27v-6h-7v6h7zM9 19v-6h-7v6h7zM39 51v-18h-28v18h28zM39 31v-18h-28v18h28zM48 51v-6h-7v6h7zM48 43v-6h-7v6h7zM48 35v-6h-7v6h7zM48 27v-6h-7v6h7zM48 19v-6h-7v6h7z" />
              </svg>
            </div>
            Animation Design
          </a>
        </li>
        <li className="nav-item" role="presentation">
          <a
            href="#service-development"
            className="nav-link"
            data-bs-toggle="tab"
            role="tab"
            aria-selected="false"
          >
            <div className="alt-tabs-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={48}
                height={64}
                viewBox="0 0 48 64"
                aria-hidden="true"
              >
                <path d="M24.125 20c3.25 0 6.25 1.25 8.5 3.5s3.5 5.25 3.5 8.5-1.25 6.25-3.5 8.5-5.25 3.5-8.5 3.5-6.25-1.25-8.5-3.5-3.5-5.25-3.5-8.5 1.25-6.25 3.5-8.5 5.25-3.5 8.5-3.5zM24.125 42c5.5 0 10-4.5 10-10s-4.5-10-10-10-10 4.5-10 10 4.5 10 10 10zM17.25 10.375c-1.25 0.375-2.5 0.875-3.75 1.5 0.25 1 0.125 2 0 3-0.25 1.625-1 3.125-2.25 4.375-1.5 1.5-3.625 2.375-5.75 2.375-0.5 0-1.125 0-1.625-0.125-0.625 1.25-1.125 2.5-1.5 3.75 0.875 0.5 1.5 1.25 2.125 2.125 1 1.375 1.5 3 1.5 4.625s-0.5 3.25-1.5 4.625c-0.625 0.875-1.25 1.625-2.125 2.125 0.375 1.25 0.875 2.5 1.5 3.75 0.5-0.125 1.125-0.125 1.625-0.125 2.125 0 4.25 0.875 5.75 2.375 1.25 1.25 2 2.75 2.25 4.375 0.125 1 0.25 2 0 3 1.25 0.625 2.5 1.125 3.75 1.5 0.5-0.875 1.25-1.5 2.125-2.125 1.375-1 3-1.5 4.625-1.5s3.25 0.5 4.625 1.5c0.875 0.625 1.625 1.25 2.125 2.125 1.25-0.375 2.5-0.875 3.75-1.5-0.25-1-0.125-2 0-3 0.25-1.625 1-3.125 2.25-4.375 1.5-1.5 3.625-2.375 5.75-2.375 0.5 0 1.125 0 1.625 0.125 0.625-1.25 1.125-2.5 1.5-3.75-0.875-0.5-1.5-1.25-2.125-2.125-1-1.375-1.5-3-1.5-4.625s0.5-3.25 1.5-4.625c0.625-0.875 1.25-1.625 2.125-2.125-0.375-1.25-0.875-2.5-1.5-3.75-0.5 0.125-1.125 0.125-1.625 0.125-2.125 0-4.25-0.875-5.75-2.375-1.25-1.25-2-2.75-2.25-4.375-0.125-1-0.25-2 0-3-1.25-0.625-2.5-1.125-3.75-1.5-0.5 0.875-1.25 1.5-2.125 2.125-1.375 1-3 1.5-4.625 1.5s-3.25-0.5-4.625-1.5c-0.875-0.625-1.625-1.25-2.125-2.125zM29.75 8v0c2.5 0.625 5 1.625 7.125 3-1 2.25-0.625 5 1.25 6.875 1.25 1.25 2.75 1.75 4.375 1.75 0.875 0 1.75-0.125 2.5-0.5 1.375 2.125 2.375 4.625 3 7.125-2.375 0.875-4 3.125-4 5.75s1.75 4.875 4 5.75c-0.625 2.5-1.625 5-3 7.125-0.75-0.375-1.625-0.5-2.5-0.5-1.625 0-3.125 0.5-4.375 1.75-1.875 1.875-2.25 4.625-1.25 6.875-2.125 1.375-4.625 2.375-7.125 3-0.875-2.25-3.125-4-5.75-4s-4.875 1.75-5.75 4c-2.5-0.625-5-1.625-7.125-3 1-2.25 0.625-5-1.25-6.875-1.25-1.25-2.75-1.75-4.375-1.75-0.875 0-1.75 0.125-2.5 0.5-1.375-2.125-2.375-4.625-3-7.125 2.25-0.875 4-3.125 4-5.75s-1.625-4.875-4-5.75c0.625-2.5 1.625-5 3-7.125 0.75 0.375 1.625 0.5 2.5 0.5 1.625 0 3.125-0.5 4.375-1.75 1.875-1.875 2.25-4.625 1.25-6.875 2.125-1.375 4.625-2.375 7.125-3 0.875 2.375 3.125 4 5.75 4s4.875-1.625 5.75-4z" />
              </svg>
            </div>
            Development
          </a>
        </li>
        <li className="nav-item" role="presentation">
          <a
            href="#service-photography"
            className="nav-link"
            data-bs-toggle="tab"
            role="tab"
            aria-selected="false"
          >
            <div className="alt-tabs-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={48}
                height={64}
                viewBox="0 0 48 64"
                aria-hidden="true"
              >
                <path d="M44.25 20c2.25 0 3.75 1.625 3.75 3.875v22c0 2.25-1.5 4.125-3.75 4.125h-40c-2.25 0-4.25-1.875-4.25-4.125v-22c0-2.25 2-3.875 4.25-3.875h1.625v-2h4.25v2h1.625c4-4.5 5.375-6 6.875-6h11c1.5 0 2.875 1.5 6.875 6h7.75zM46 45.875v-22c0-1.125-0.625-1.875-1.75-1.875h-8.625l-0.625-0.375c-0.375-0.5-0.875-1-1.25-1.375-1.5-1.625-2.5-3-3.25-3.75-0.625-0.625-0.875-0.5-0.875-0.5h-11s-0.25 0-0.875 0.5c-0.75 0.625-1.75 1.75-3.125 3.375-0.375 0.5-0.875 1.25-1.375 1.75l-0.625 0.375h-8.375c-1.125 0-2.25 0.875-2.25 1.875v22c0 1.125 1.125 2.125 2.25 2.125h40c1 0 1.75-1 1.75-2.125zM24 23.75c5.875 0 10.75 4.75 10.75 10.625s-4.875 10.625-10.75 10.625-10.75-4.75-10.75-10.625 4.875-10.625 10.75-10.625zM24 43c4.75 0 8.75-3.875 8.75-8.625s-4-8.625-8.75-8.625-8.75 3.875-8.75 8.625 4 8.625 8.75 8.625zM36 26.125v-2.125h2.125v2.125h-2.125zM20 34.375c0-2.625 1.375-4 4-4s4 1.375 4 4-1.375 4-4 4-4-1.375-4-4z" />
              </svg>
            </div>
            Photography
          </a>
        </li>
      </ul>
      {/* End Nav tabs */}
      {/* Tab panes */}
      <div className="tab-content tpl-tabs-cont">
        {/* Service Item */}
        <div
          className="tab-pane fade show active"
          id="service-branding"
          role="tabpanel"
        >
          <div className="row">
            <div
              className="col-lg-4 mb-md-40 mb-xs-30 wow linesAnimIn"
              data-splitting="lines"
            >
              <blockquote className="mt-0 mb-0">
                <p className="mb-20 mb-sm-10">
                  Brand equity is the measurable totality of a brand's worth and
                  is validated by observing the effectiveness of these branding
                  components.
                </p>
                <footer>Thomas Anderson</footer>
              </blockquote>
            </div>
            <div
              className="col-md-6 col-lg-4 mb-sm-30 wow linesAnimIn"
              data-splitting="lines"
            >
              Maecenas volutpat, diam enim sagittis quam, id porta quam. Sed id
              dolor consectetur fermentum volutpat nibh, accumsan purus. Lorem
              ipsum dolor sit semper amet, consectetur adipiscing elit. In
              maximus ligula metus pellentesque mattis.
            </div>
            <div
              className="col-md-6 col-lg-4 wow linesAnimIn"
              data-splitting="lines"
            >
              Donec vel ultricies purus. Nam dictum sem, ipsum aliquam . Etiam
              sit amet fringilla lacus. Peleque suscipit ante at ullamcorper
              pulvinar quportor. Integer lectus. Praesent sed nisi eleifend,
              ferme orci amet, iaculis libero.
            </div>
          </div>
        </div>
        {/* End Service Item */}
        {/* Service Item */}
        <div
          className="tab-pane fade"
          id="service-ui-ux-design"
          role="tabpanel"
        >
          <div className="row">
            <div className="col-lg-4 mb-md-40 mb-xs-30">
              <blockquote className="mt-0 mb-0">
                <p>
                  It&nbsp;doesn’t matter how many times&nbsp;I have
                  to&nbsp;click, as&nbsp;long as&nbsp;each click
                  is&nbsp;a&nbsp;mindless, unambiguous choice.
                </p>
                <footer>Steve Krug</footer>
              </blockquote>
            </div>
            <div className="col-md-6 col-lg-4 mb-sm-30">
              Cras mi tortor, laoreet id ornare et, accumsan non magna. Maecenas
              vulputate accumsan velit. Curabitur a nulla ex. Nam a tincidunt
              ante. Vitae gravida turpis. Vestibulum varius nulla non nulla
              scelerisque tristique.
            </div>
            <div className="col-md-6 col-lg-4">
              Mauris id viverra augue, eu porttitor diam. Praesent faucibus est
              a interdum elementum. Nam varius at ipsum id dignissim. Nam a
              tincidunt ante lorem. Pellentesque suscipit ante at ullamcorper
              pulvinar neque porttitor.
            </div>
          </div>
        </div>
        {/* End Service Item */}
        {/* Service Item */}
        <div className="tab-pane fade" id="service-animation" role="tabpanel">
          <div className="row">
            <div className="col-lg-4 mb-md-40 mb-xs-30">
              <blockquote className="mt-0 mb-0">
                <p>
                  Never fall in&nbsp;love with an&nbsp;idea. They’re whores.
                  If&nbsp;the one you’re with isn’t doing the job, there’s
                  always another.
                </p>
                <footer>Chip Kidd</footer>
              </blockquote>
            </div>
            <div className="col-md-6 col-lg-4 mb-sm-30">
              Lorem ipsum dolor sit semper amet, consectetur adipiscing elit. In
              maximus ligula metus lorem teretem pellentesque mattis. Donec vel
              ultricies purus. Nam dictum sem, ipsum aliquam. Praesent sed nisi
              eleifend, fermentum orci amet, iaculis libero lorem ipsom dolor
              sit.
            </div>
            <div className="col-md-6 col-lg-4">
              Pellentesque suscipit ante at ullamcorper pulvinar neque
              porttitor. Integer lectus. Etiam sit amet fringilla lacus.
              Maecenas volutpat, diam enim sagittis quam, id porta quam. Sed
              id&nbsp;dolor lorem consectetur fermentum volutpat nibh, accumsan
              purus ipsum remeb.
            </div>
          </div>
        </div>
        {/* End Service Item */}
        {/* Service Item */}
        <div className="tab-pane fade" id="service-development" role="tabpanel">
          <div className="row">
            <div className="col-lg-4 mb-md-40 mb-xs-30">
              <blockquote className="mt-0 mb-0">
                <p>
                  All that is&nbsp;valuable in&nbsp;human society depends upon
                  the opportunity for development accorded the individual.
                </p>
                <footer>Albert Einstein</footer>
              </blockquote>
            </div>
            <div className="col-md-6 col-lg-4 mb-sm-30">
              Fusce hendrerit vitae nunc id gravida. Donec euismod quis ante at
              mattis. Mauris dictum ante sit amet enim interdum semper.
              Vestibulum odio justo, faucibus et dictum eu, malesuada nec neque.
              Maecenas volutpat, diam enim sagittis lorem ipsum sit amet.
            </div>
            <div className="col-md-6 col-lg-4">
              Pellentesque suscipit ante at ullamcorper pulvinar neque
              porttitor. Sed id dolor consectetur dolor sit amet fermentum
              volutpat nibh, accumsan purus. Lorem ipsum dolor sit semper amet,
              consectetur adipiscing elit. Inmed maximus ligula metus
              pellentesque.
            </div>
          </div>
        </div>
        {/* End Service Item */}
        {/* Service Item */}
        <div className="tab-pane fade" id="service-photography" role="tabpanel">
          <div className="row">
            <div className="col-lg-4 mb-md-40 mb-xs-30">
              <blockquote className="mt-0 mb-0">
                <p>
                  Photography is&nbsp;the simplest thing in&nbsp;the world, but
                  it&nbsp;is&nbsp;incredibly complicated to&nbsp;make
                  it&nbsp;really work.
                </p>
                <footer>Martin Parr</footer>
              </blockquote>
            </div>
            <div className="col-md-6 col-lg-4 mb-sm-30">
              Donec vel ultricies purus. Nam dictum sem, ipsum aliquam . Etiam
              sit amet fringilla lacus. Pelenteque suscipit ante at ullamcorper
              pulvinar neque portor. Integer lectus. Praesent sed nisi eleifend,
              fermetum orci amet, iaculis libero.
            </div>
            <div className="col-md-6 col-lg-4">
              Maecenas volutpat, diam enim sagittis quam, id porta quam. Sed id
              dolor consectetur fermentum volutpat nibh, accumsan purus. Lorem
              ipsum dolor sit semper amet, consectetur adipiscing elit. In
              maximus ligula metus pellentesque mattis.
            </div>
          </div>
        </div>
        {/* End Service Item */}
      </div>{" "}
    </>
  );
}
