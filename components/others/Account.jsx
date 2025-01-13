"use client";

export default function Account() {
  return (
    <div className="container wow fadeInUp">
      {/* Nav Tabs */}
      <div className="align-center mb-40 mb-sm-30">
        <ul
          className="nav nav-tabs tpl-minimal-tabs animate"
          id="myTab-account"
          role="tablist"
        >
          <li className="nav-item" role="presentation">
            <a
              href="#account-login"
              className="nav-link active"
              id="account-login-tab"
              data-bs-toggle="tab"
              role="tab"
              aria-controls="account-login"
              aria-selected="true"
            >
              Login
            </a>
          </li>
          <li className="nav-item" role="presentation">
            <a
              href="#account-registration"
              className="nav-link"
              id="account-registration-tab"
              data-bs-toggle="tab"
              role="tab"
              aria-controls="account-registration"
              aria-selected="false"
            >
              Registration
            </a>
          </li>
        </ul>
      </div>
      {/* End Nav Tabs */}
      {/* Tab panes */}
      <div
        className="tab-content tpl-minimal-tabs-cont section-text"
        id="myTabContent-1"
      >
        <div
          className="tab-pane fade show active"
          id="account-login"
          role="tabpanel"
          aria-labelledby="account-login-tab"
        >
          {/* Login Form */}
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <form
                onSubmit={(e) => e.preventDefault()}
                className="form contact-form"
              >
                <div className="mb-30">
                  {/* Name */}
                  <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input
                      type="text"
                      name="username"
                      id="username"
                      className="input-lg round form-control"
                      placeholder="Enter username"
                      pattern=".{3,100}"
                      required
                      aria-required="true"
                    />
                  </div>
                  {/* Password */}
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      className="input-lg round form-control"
                      placeholder="Enter password"
                      pattern=".{5,100}"
                      required
                      aria-required="true"
                    />
                  </div>
                </div>
                <div className="row mb-30">
                  <div className="col-6">
                    {/* Inform Tip */}
                    <div className="form-tip pt-10">
                      <a href="#">Forgot Password?</a>
                    </div>
                  </div>
                  <div className="col-6">
                    {/* Send Button */}
                    <div className="text-end">
                      <button
                        className="submit_btn btn btn-white btn-mod btn-large btn-round btn-hover-anim"
                        id="login-btn"
                      >
                        <span>Login</span>
                      </button>
                    </div>
                  </div>
                </div>
                {/* Inform Tip */}
                <div className="form-tip bg-gray-light-1 round p-3 form-tip-2">
                  <i className="icon-info size-16" />
                  All the fields are required. By sending the form you agree to
                  the <a href="#">Terms &amp; Conditions</a> and
                  <a href="#">Privacy Policy</a>.
                </div>
              </form>
            </div>
          </div>
          {/* End Login Form */}
        </div>
        <div
          className="tab-pane fade"
          id="account-registration"
          role="tabpanel"
          aria-labelledby="account-registration-tab"
        >
          {/* Registry Form */}
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <form
                onSubmit={(e) => e.preventDefault()}
                className="form contact-form"
              >
                <div className="clearfix">
                  {/* Email */}
                  <div className="form-group">
                    <label htmlFor="reg-email">Email</label>
                    <input
                      type="text"
                      name="reg-email"
                      id="reg-email"
                      className="input-lg round form-control"
                      placeholder="Enter email"
                      pattern=".{3,100}"
                      required
                      aria-required="true"
                    />
                  </div>
                  {/* Username */}
                  <div className="form-group">
                    <label htmlFor="reg-username">Username</label>
                    <input
                      type="text"
                      name="reg-username"
                      id="reg-username"
                      className="input-lg round form-control"
                      placeholder="Enter username"
                      pattern=".{3,100}"
                      required
                      aria-required="true"
                    />
                  </div>
                  {/* Password */}
                  <div className="form-group">
                    <label htmlFor="reg-password">Password</label>
                    <input
                      type="password"
                      name="reg-password"
                      id="reg-password"
                      className="input-lg round form-control"
                      placeholder="Enter password"
                      pattern=".{5,100}"
                      required
                      aria-required="true"
                    />
                  </div>
                  {/* Re-enter Password */}
                  <div className="form-group">
                    <label htmlFor="reg-confirm-password">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      name="reg-confirm-password"
                      id="reg-confirm-password"
                      className="input-lg round form-control"
                      placeholder="Confirm password"
                      pattern=".{5,100}"
                      required
                      aria-required="true"
                    />
                  </div>
                </div>
                {/* Send Button */}
                <div className="pt-10 mb-30">
                  <button
                    className="submit_btn btn btn-mod btn-white btn-large btn-round btn-full btn-hover-anim"
                    id="reg-btn"
                  >
                    <span>Register</span>
                  </button>
                </div>
                {/* Inform Tip */}
                <div className="form-tip bg-gray-light-1 round p-3 form-tip-2">
                  <i className="icon-info size-16" />
                  All the fields are required. By sending the form you agree to
                  the <a href="#">Terms &amp; Conditions</a> and
                  <a href="#">Privacy Policy</a>.
                </div>
              </form>
            </div>
          </div>
          {/* End Registry Form */}
        </div>
      </div>
    </div>
  );
}
