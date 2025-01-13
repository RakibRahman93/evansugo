"use client";
import { toggleMobileMenu } from "@/utlis/toggleMobileMenu";
import Nav from "./components/Nav";
import Image from "next/image";
import LanguageSelect from "./components/LanguageSelect";
import Link from "next/link";
export default function Header10({ links }) {
  return (
    <div className="main-nav-sub full-wrapper">
      {/* Logo  (* Add your text or image to the link tag. Use SVG or PNG image format. 
              If you use a PNG logo image, the image resolution must be equal 200% of the visible logo
              image size for support of retina screens. See details in the template documentation. *) */}
      <div className="nav-logo-wrap local-scroll">
        <a href="#top" className="logo font-alt">
          <Image
            src="/assets/images/demo-strong/logo-white.svg"
            alt="Your Company Logo"
            width={176}
            height={34}
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
        <ul className="clearlist scroll-nav local-scroll scrollspyLinks">
          <Nav links={links} />
        </ul>
        <ul className="items-end clearlist local-scroll">
          {/* Languages */}

          <LanguageSelect />

          {/* End Languages */}
          {links[0].href.includes("/") ? (
            <li>
              <Link
                href={links[links.length - 1].href}
                className="opacity-1 no-hover"
              >
                <span className="link-hover-anim" data-link-animate="y">
                  <span className="icon-ellipse me-1" /> Say hello
                </span>
              </Link>
            </li>
          ) : (
            <li>
              <a href="#contact" className="opacity-1 no-hover">
                <span className="link-hover-anim" data-link-animate="y">
                  <span className="icon-ellipse me-1" /> Say hello
                </span>
              </a>
            </li>
          )}
        </ul>
      </div>
      {/* End Main Menu */}
    </div>
  );
}
