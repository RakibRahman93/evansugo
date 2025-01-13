"use client";

export default function ContactDark() {
  return (
    <div className="row g-0 wow fadeInUp" data-wow-delay="0.1s">
      <div className="col-lg-5 d-flex align-items-stretch mb-md-50">
        <div className="contact-1-left bg-dark-3 border-dark light-content">
          <div className="p-4 p-md-5">
            <h3 className="contact-1-title">Call Us</h3>
            <div className="contact-1-text">+1 837 652 8800</div>
            <div className="contact-1-link">
              {/* Change the phone number in the "href" attribute */}
              <a href="tel:+18376528800">Call now</a>
            </div>
          </div>
          <hr className="contact-1-line mt-0 mb-0" />
          <div className="p-4 p-md-5">
            <h3 className="contact-1-title">Address</h3>
            <div className="contact-1-text mb-10">245 Quigley Blvd, Ste K</div>
            <div className="contact-1-link">
              <a href="#">See map</a>
            </div>
          </div>
          <hr className="contact-1-line mt-0 mb-0" />
          <div className="p-4 p-md-5">
            <h3 className="contact-1-title">Email</h3>
            <div className="contact-1-text text-break mb-10">
              ibthemes21@gmail.com
            </div>
            <div className="contact-1-link">
              {/* Change the email address in the "href" attribute */}
              <a href="mailto:ibthemes21@gmail.com">Say hello</a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-7 d-flex align-items-stretch">
        <div className="contact-1-right bg-dark-2 p-4 p-md-5">
          {/* Contact Form */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="form contact-form"
            id="contact_form"
          >
            {/* Name */}
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                className="input-lg input-circle form-control"
                placeholder="Enter your name"
                pattern=".{3,100}"
                required
                aria-required="true"
              />
            </div>
            {/* Email */}
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                className="input-lg input-circle form-control"
                placeholder="Enter your email"
                pattern=".{5,100}"
                required
                aria-required="true"
              />
            </div>
            {/* Message */}
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                id="message"
                className="input-lg input-circle form-control"
                style={{ height: 120 }}
                placeholder="Enter your message"
                defaultValue={""}
              />
            </div>
            {/* Send Button */}
            <div className="pt-20">
              <button
                className="submit_btn btn btn-mod btn-w btn-large btn-circle btn-hover-anim btn-full"
                id="submit_btn"
                aria-controls="result"
              >
                <span>Send Message</span>
              </button>
            </div>
            {/* Inform Tip */}
            <div className="form-tip pt-30 pt-sm-20">
              <i className="icon-info size-16" />
              All the fields are required. By sending the form you agree to the{" "}
              <a href="#">Terms &amp; Conditions</a> and{" "}
              <a href="#">Privacy Policy</a>.
            </div>
            <div
              id="result"
              role="region"
              aria-live="polite"
              aria-atomic="true"
            />
          </form>
          {/* End Contact Form */}
        </div>
      </div>
    </div>
  );
}
