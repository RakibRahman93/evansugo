"use client";
import { toggleMobileMenu } from "@/utlis/toggleMobileMenu";
import Nav from "./components/Nav";

import Image from "next/image";
import Link from "next/link";

export default function Header3({ links }) {
  return (
    <div className="main-nav-sub full-wrapper">
      {/* Logo  (* Add your text or image to the link tag. Use SVG or PNG image format. 
              If you use a PNG logo image, the image resolution must be equal 200% of the visible logo
              image size for support of retina screens. See details in the template documentation. *) */}
      <div className="nav-logo-wrap local-scroll">
        <a href="#top" className="logo font-alt">
          <Image
            src="/assets/images/demo-brutalist/logo-white.svg"
            alt="Your Company Logo"
            width={170}
            height={12}
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
      <div className="inner-nav desktop-nav font-alt">
        <ul className="clearlist scroll-nav local-scroll justify-content-end scrollspyLinks">
          <Nav animateY links={links} />
          <li>
            {links[0].href.includes("/") ? (
              <Link href="/brutalist-contact" className="opacity-1 no-hover">
                <span
                  className="btn btn-mod btn-medium btn-border-w btn-circle-alt"
                  data-btn-animate="y"
                >
                  <span className="btn-animate-y">
                    <span className="btn-animate-y-1">Get in touch</span>
                    <span className="btn-animate-y-2" aria-hidden="true">
                      Get in touch
                    </span>
                  </span>
                </span>
              </Link>
            ) : (
              <a href="#contact" className="opacity-1 no-hover">
                <span
                  className="btn btn-mod btn-medium btn-border-w btn-circle-alt"
                  data-btn-animate="y"
                >
                  <span className="btn-animate-y">
                    <span className="btn-animate-y-1">Get in touch</span>
                    <span className="btn-animate-y-2" aria-hidden="true">
                      Get in touch
                    </span>
                  </span>
                </span>
              </a>
            )}
          </li>
        </ul>
      </div>
      {/* End Main Menu */}
    </div>
  );
}
