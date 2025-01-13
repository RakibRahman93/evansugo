"use client";

export default function Form8() {
  return (
    <form className="form" onSubmit={(e) => e.preventDefault()}>
      <div className="row mb-30 mb-md-20">
        <div className="col-md-6 mb-md-20">
          {/* Name */}
          <label htmlFor="name">Name *</label>
          <input
            type="text"
            name="name"
            id="name"
            className="input-lg input-circle form-control"
            placeholder="Enter your name"
            maxLength={100}
            required
            aria-required="true"
          />
        </div>
        <div className="col-md-6">
          {/* Email */}
          <label htmlFor="email">Email *</label>
          <input
            type="email"
            name="email"
            id="email"
            className="input-lg input-circle form-control"
            placeholder="Enter your email"
            maxLength={100}
            required
            aria-required="true"
          />
        </div>
      </div>
      <div className="mb-30 mb-md-20">
        {/* Website */}
        <label htmlFor="website">Website</label>
        <input
          type="text"
          name="website"
          id="website"
          className="input-lg input-circle form-control"
          placeholder="Enter your website"
          maxLength={100}
        />
      </div>
      {/* Comment */}
      <div className="mb-30 mb-md-20">
        <label htmlFor="comment">Comment</label>
        <textarea
          name="comment"
          id="comment"
          className="input-lg input-circle form-control"
          rows={6}
          placeholder="Enter your comment"
          maxLength={400}
          defaultValue={""}
        />
      </div>
      {/* Send Button */}
      <button
        type="submit"
        className="submit_btn btn btn-mod btn-color btn-medium btn-circle btn-hover-anim"
      >
        <span>Send Comment</span>
      </button>
      {/* Inform Tip */}
      <div className="form-tip form-tip-2   bg-gray-light-1 round mt-30 p-3">
        * - these fields are required. By sending the form you agree to the{" "}
        <a href="#">Terms &amp; Conditions</a> and{" "}
        <a href="#">Privacy Policy</a>.
      </div>
    </form>
  );
}
