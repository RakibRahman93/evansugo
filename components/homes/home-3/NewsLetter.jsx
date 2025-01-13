"use client";

export default function NewsLetter() {
  return (
    <>
      <div className="container position-relative">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 wow fadeInUp">
            <div className="row">
              <div className="col-lg-9 col-xl-6">
                <h2 className="section-title-small font-alt mb-40 mb-md-20">
                  Stay informed with our newsletter.
                </h2>
              </div>
            </div>
            <form
              onSubmit={(e) => e.preventDefault()}
              id="mailchimp"
              className="form"
            >
              <div className="d-sm-flex justify-content-between mb-20">
                <input
                  placeholder="Enter your email"
                  className="newsletter-field input-lg circle"
                  type="email"
                  pattern=".{5,100}"
                  required
                  aria-required="true"
                />
                <button
                  type="submit"
                  aria-controls="subscribe-result"
                  className="newsletter-button btn btn-mod btn-large btn-circle btn-hover-anim"
                >
                  <span>Subscribe Now</span>
                </button>
              </div>
              <div className="form-tip">
                <i className="icon-info size-16" /> By sending the form you
                agree to the <a href="#">Terms &amp; Conditions</a> and{" "}
                <a href="#">Privacy Policy</a>.
              </div>
              <div
                id="subscribe-result"
                role="region"
                aria-live="polite"
                aria-atomic="true"
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
