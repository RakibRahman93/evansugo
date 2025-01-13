"use client";
import { toggleMobileMenu } from "@/utlis/toggleMobileMenu";
import Nav from "./components/Nav";

import Image from "next/image";

export default function Header4({ links }) {
  return (
    <div className="main-nav-sub container">
      {/* Logo  (* Add your text or image to the link tag. Use SVG or PNG image format. 
              If you use a PNG logo image, the image resolution must be equal 200% of the visible logo
              image size for support of retina screens. See details in the template documentation. *) */}
      <div className="nav-logo-wrap position-static local-scroll">
        <a href="top" className="logo">
          <Image
            src="/assets/images/demo-corporate/logo-dark.svg"
            alt="Your Company Logo"
            width={106}
            height={36}
            className="light-mode-logo"
          />
          <Image
            src="/assets/images/demo-corporate/logo-white.svg"
            alt="Your Company Logo"
            width={106}
            height={36}
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
        <ul className="clearlist scroll-nav local-scroll justify-content-end scrollspyLinks">
          <Nav links={links} />
          <li className="desktop-nav-display">
            <div className="vr mt-2" />
          </li>
          <li>
            <a href="tel:+18376528800">
              <i className="mi-mobile size-24 color-primary-1 align-center" />
              +1 (837) 652 8800
            </a>
          </li>
          {/* Social Links */}
          <li>
            <a href="#" className="no-hover opacity-1 pe-1">
              <span className="mn-soc-link mn-soc-link-color" title="Facebook">
                <i className="fa-facebook-f" />
              </span>
              <span className="mobile-nav-display-i">Facebook</span>
            </a>
            <a href="#" className="no-hover opacity-1 pe-1">
              <span className="mn-soc-link mn-soc-link-color" title="LinkedIn">
                <i className="fa-linkedin-in" />
              </span>
              <span className="mobile-nav-display-i">LinkedIn</span>
            </a>
            <a href="#" className="no-hover opacity-1">
              <span className="mn-soc-link mn-soc-link-color" title="Youtube">
                <i className="fa-youtube" />
              </span>
              <span className="mobile-nav-display-i">Youtube</span>
            </a>
          </li>
          {/* End Social Links  */}
        </ul>
      </div>
      {/* End Main Menu */}
    </div>
  );
}
