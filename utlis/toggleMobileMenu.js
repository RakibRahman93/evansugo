export const toggleMobileMenu = () => {
  var mobile_nav = document.querySelector(".mobile-nav");
  var desktop_nav = document.querySelector(".desktop-nav");

  if (desktop_nav.classList.contains("js-opened")) {
    desktop_nav.style.maxHeight = "0px";
    desktop_nav.classList.remove("js-opened");
    mobile_nav.classList.remove("active");
  } else {
    desktop_nav.style.maxHeight = "calc(100vh - 60px)";
    desktop_nav.classList.add("js-opened");
    mobile_nav.classList.add("active");
  }
};
export const closeMobileMenu = () => {
  var mobile_nav = document.querySelector(".mobile-nav");
  var desktop_nav = document.querySelector(".desktop-nav");

  if (desktop_nav.classList.contains("js-opened")) {
    desktop_nav.style.maxHeight = "0px";
    desktop_nav.classList.remove("js-opened");
    mobile_nav.classList.remove("active");
  }
};
