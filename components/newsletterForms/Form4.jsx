"use client";

export default function Form4() {
  return (
    <form onSubmit={(e) => e.preventDefault()} className="form" id="mailchimp">
      <div className="mb-20">Stay informed with our newsletter.</div>
      <div className="mb-20">
        <input
          placeholder="Enter your email"
          className="newsletter-field form-control input-md round mb-10"
          type="email"
          pattern=".{5,100}"
          required
          aria-required="true"
        />
        <button
          type="submit"
          className="btn btn-mod btn-grad btn-medium btn-round form-control"
          data-btn-animate="y"
        >
          <span className="btn-animate-y">
            <span className="btn-animate-y-1">Subscribe</span>
            <span className="btn-animate-y-2" aria-hidden="true">
              Subscribe
            </span>
          </span>
        </button>
      </div>
      <div className="form-tip">
        <i className="icon-info size-16" aria-hidden="true" />
        By sending the form you agree to the{" "}
        <a href="#">Terms &amp; Conditions</a> and{" "}
        <a href="#">Privacy Policy</a>.
      </div>
      <div
        id="subscribe-result"
        role="region"
        aria-live="polite"
        aria-atomic="true"
      />
    </form>
  );
}
