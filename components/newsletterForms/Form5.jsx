"use client";

export default function Form5() {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      id="mailchimp"
      className="form newsletter-modern"
    >
      <div className="d-md-flex justify-content-between mb-40">
        <label htmlFor="newsletter-email" className="visually-hidden">
          Your email
        </label>
        <input
          placeholder="Enter your email"
          className="newsletter-field mb-sm-20 me-md-4"
          id="newsletter-email"
          name="newsletter-email"
          type="email"
          pattern=".{5,100}"
          required
          aria-required="true"
        />
        <div className="d-md-flex align-items-end">
          <button
            type="submit"
            aria-controls="subscribe-result"
            className="btn btn-mod btn-border btn-medium btn-circle text-nowrap"
            data-btn-animate="y"
          >
            Subscribe Now
          </button>
        </div>
      </div>
      <div className="form-tip">
        <i className="icon-info size-16" />
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
