"use client";
import { toggleMobileMenu } from "@/utlis/toggleMobileMenu";
import Nav from "./components/Nav";

import Image from "next/image";
import LanguageSelect from "./components/LanguageSelect";

export default function Header7({ links }) {
  return (
    <div className="main-nav-sub container">
      {/* Logo  (* Add your text or image to the link tag. Use SVG or PNG image format. 
              If you use a PNG logo image, the image resolution must be equal 200% of the visible logo
              image size for support of retina screens. See details in the template documentation. *) */}
      <div className="nav-logo-wrap position-static pe-lg-4 me-lg-5 local-scroll">
        <a href="#top" className="logo">
          <Image
            src="/assets/images/demo-gradient/logo-dark.png"
            alt="Your Company Logo"
            width={95}
            height={40}
            className="light-mode-logo"
          />
          <Image
            src="/assets/images/demo-gradient/logo-white.png"
            alt="Your Company Logo"
            width={95}
            height={40}
            className="dark-mode-logo"
          />
        </a>
      </div>
      {/* Mobile Menu Button */}
      <div
        onClick={toggleMobileMenu}
        className="mobile-nav"
        role="button"
        tabIndex={0}
      >
        <i className="mobile-nav-icon" />
        <span className="visually-hidden">Menu</span>
      </div>
      {/* Main Menu */}
      <div className="inner-nav desktop-nav">
        <ul className="clearlist scroll-nav local-scroll justify-content-start scrollspyLinks">
          <Nav links={links} animateY />
        </ul>
        <ul className="items-end clearlist local-scroll">
          {/* Languages */}
          <LanguageSelect />
          {/* End Languages */}
          <li>
            <a href="#contact" className="opacity-1 no-hover">
              <span className="btn btn-mod btn-border-grad btn-small btn-round">
                <span data-btn-animate="y">Get in touch</span>
              </span>
            </a>
          </li>
        </ul>
      </div>
      {/* End Main Menu */}
    </div>
  );
}
