"use client";
import { allHomes, menuItems } from "@/data/menu";
import { toggleMobileMenu } from "@/utlis/toggleMobileMenu";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import LanguageSelect from "./components/LanguageSelect";
import { init_classic_menu_resize } from "@/utlis/menuToggle";
import { scrollToElement } from "@/utlis/scrollToElement";
export default function HeaderPreview() {
  const [menuOpen, setMenuOpen] = useState([-1, -1]);

  const toggleParent1 = (i) => {
    const tempMenuOpen = [...menuOpen];
    if (menuOpen[0] == i) {
      tempMenuOpen[0] = -1;
    } else {
      tempMenuOpen[0] = i;
    }
    setMenuOpen(tempMenuOpen);
  };
  const toggleParent2 = (i) => {
    const tempMenuOpen = [...menuOpen];
    if (menuOpen[1] == i) {
      tempMenuOpen[1] = -1;
    } else {
      tempMenuOpen[1] = i;
    }
    setMenuOpen(tempMenuOpen);
  };
  const toggleParent3 = (i) => {
    const tempMenuOpen = [...menuOpen];
    if (menuOpen[2] == i) {
      tempMenuOpen[2] = -1;
    } else {
      tempMenuOpen[2] = i;
    }
    setMenuOpen(tempMenuOpen);
  };

  useEffect(() => {
    setTimeout(() => {
      scrollToElement();
    }, 1000);
    init_classic_menu_resize();
    // window.addEventListener("scroll", addScrollspy);

    window.addEventListener("resize", init_classic_menu_resize);

    return () => {
      // window.removeEventListener("scroll", addScrollspy);
      window.removeEventListener("resize", init_classic_menu_resize);
    };
  }, []);

  return (
    <div className="main-nav-sub full-wrapper">
      {/* Logo  (* Add your text or image to the link tag. Use SVG or PNG image format. 
              If you use a PNG logo image, the image resolution must be equal 200% of the visible logo
              image size for support of retina screens. See details in the template documentation. *) */}
      <div className="nav-logo-wrap local-scroll">
        <Link href={`/`} className="logo">
          <Image
            src="/assets/images/logo-dark.svg"
            alt="Your Company Logo"
            width={105}
            height={34}
          />
        </Link>
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
        <ul className="clearlist local-scroll">
          {/* Item With Sub */}
          <li className={menuOpen[0] == 0 ? "js-opened" : ""}>
            <a onClick={() => toggleParent1(0)} className="mn-has-sub active">
              Home <i className="mi-chevron-down" />
            </a>
            {/* Sub */}
            <ul
              className={`mn-sub   ${
                menuOpen[0] == 0 ? "mobile-sub-active" : ""
              } `}
            >
              {allHomes.map((elm, i) => (
                <li className={menuOpen[1] == i ? "js-opened" : ""} key={i}>
                  <a
                    href="#"
                    onClick={() => toggleParent2(i)}
                    className="mn-has-sub"
                  >
                    {elm.title} <i className="mi-chevron-right right" />
                  </a>
                  {/* Sub Sub */}
                  <ul
                    className={`mn-sub   ${
                      menuOpen[1] == i ? "mobile-sub-active" : ""
                    } `}
                  >
                    {elm.links.map((elm2, i2) => (
                      <li
                        key={i2}
                        className={menuOpen[2] == i2 ? "js-opened" : ""}
                      >
                        <a
                          href="#"
                          onClick={() => toggleParent3(i2)}
                          className="mn-has-sub"
                        >
                          {elm2.title} <i className="mi-chevron-right right" />
                        </a>
                        <ul
                          className={`mn-sub   ${
                            menuOpen[2] == i2 ? "mobile-sub-active" : ""
                          } `}
                        >
                          {elm2.links.map((elm3, i3) => (
                            <li key={i3}>
                              <Link href={elm3.href} target="_blank">
                                {elm3.text}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </li>
                    ))}
                  </ul>
                  {/* End Sub Sub */}
                </li>
              ))}
            </ul>
            {/* End Sub */}
          </li>
          {/* End Item With Sub */}
          {/* Item With Sub */}
          {menuItems.slice(1, 3).map((item, index) => (
            <li
              className={menuOpen[0] == index + 1 ? "js-opened" : ""}
              key={index}
            >
              <a
                href="#"
                onClick={() => toggleParent1(index + 1)}
                className="mn-has-sub"
              >
                {item.title} <i className="mi-chevron-down" />
              </a>
              <ul
                className={`mn-sub mn-has-multi ${
                  menuOpen[0] == index + 1 ? "mobile-sub-active" : ""
                } `}
              >
                {item.subMenu.map((subItem, subIndex) => (
                  <li className="mn-sub-multi" key={subIndex}>
                    {subItem.title && (
                      <span className="mn-group-title">{subItem.title}</span>
                    )}
                    <ul>
                      {subItem.links.map((link, linkIndex) => (
                        <li key={linkIndex}>
                          <Link href={link.href}>
                            {link.icon && <i className={link.icon} />}{" "}
                            {link.text}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </li>
          ))}
          {/* End Item With Sub */}
          {/* Item With Sub */}
          {menuItems.slice(3, 5).map((item, index) => (
            <li
              className={menuOpen[0] == index + 3 ? "js-opened" : ""}
              key={index}
            >
              <a
                onClick={() => toggleParent1(index + 3)}
                href="#"
                className="mn-has-sub"
              >
                {item.title} <i className="mi-chevron-down" />
              </a>
              {item.subItems && (
                <ul
                  className={`mn-sub  ${
                    menuOpen[0] == index + 3 ? "mobile-sub-active" : ""
                  } `}
                >
                  {item.subItems.map((subItem, subIndex) => (
                    <li
                      className={menuOpen[1] == subIndex ? "js-opened" : ""}
                      key={subIndex}
                    >
                      <a
                        href="#"
                        onClick={() => toggleParent2(subIndex)}
                        className="mn-has-sub"
                      >
                        {subItem.title} <i className="mi-chevron-right right" />
                      </a>
                      {subItem.links && (
                        <ul
                          className={`mn-sub  ${
                            menuOpen[1] == subIndex ? "mobile-sub-active" : ""
                          } `}
                        >
                          {subItem.links.map((link, linkIndex) => (
                            <li key={linkIndex}>
                              <Link href={link.href}>{link.label}</Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
          {/* End Item With Sub */}
        </ul>
        <ul className="items-end clearlist">
          {/* Languages */}
          <LanguageSelect />
          {/* End Languages */}
          <li>
            <a
              href="https://themeforest.net/user/ib-themes/portfolio"
              target="_blank"
              rel="nofollow noopener"
              className="opacity-1 no-hover"
            >
              <span className="link-hover-anim underline" data-link-animate="y">
                <span className="link-strong link-strong-unhovered">
                  Buy on Envato Market
                </span>
                <span
                  className="link-strong link-strong-hovered"
                  aria-hidden="true"
                >
                  Buy on Envato Market
                </span>
              </span>
            </a>
          </li>
        </ul>
      </div>
      {/* End Main Menu */}
    </div>
  );
}
