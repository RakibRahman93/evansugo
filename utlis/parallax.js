import Rellax from "rellax";

export const parallaxMouseMovement = () => {
  document.querySelectorAll(".parallax-mousemove-scene").forEach((scene) => {
    scene.addEventListener("mousemove", function (e) {
      const w = window.innerWidth;
      const h = window.innerHeight;
      const offsetX = 0.5 - (e.pageX - this.offsetLeft) / w;
      const offsetY = 0.5 - (e.pageY - this.offsetTop) / h;

      this.querySelectorAll(".parallax-mousemove").forEach((el) => {
        const offset = parseInt(el.getAttribute("data-offset"));
        const translate = `translate3d(${Math.round(
          offsetX * offset
        )}px, ${Math.round(offsetY * offset)}px, 0px)`;
        el.style.transform = translate;
      });

      let sceneOffsetX = e.pageX - this.offsetLeft;
      let sceneOffsetY = e.pageY - this.offsetTop;

      this.querySelectorAll(".parallax-mousemove-follow").forEach((el) => {
        el.style.left = `${sceneOffsetX}px`;
        el.style.top = `${31}px`;
      });

      // document.querySelectorAll(".parallax-mousemove-follow").forEach((el) => {
      //   el.style.left = `${sceneOffsetX}px`;
      // });
    });

    scene.addEventListener("mouseenter", function (e) {
      this.querySelectorAll(".parallax-mousemove-follow").forEach((el) => {
        setTimeout(() => {
          el.style.transition = "all .27s var(--ease-out-short)";
          el.style.willChange = "transform";
        }, 27);
      });
    });

    scene.addEventListener("mouseout", function (e) {
      this.querySelectorAll(".parallax-mousemove-follow").forEach((el) => {
        el.style.transition = "none";
      });
    });
  });
};

export function parallaxScroll() {
  const mobileTest = false; // Assuming mobileTest is defined elsewhere

  if (document.querySelectorAll("[data-rellax-y]").length) {
    if (window.innerWidth >= 1280 && !mobileTest) {
      const rellax_y = new Rellax("[data-rellax-y]", {
        vertical: true,
        horizontal: false,
      });

      function addScrollParallax() {
        document.querySelectorAll("[data-rellax-y]").forEach((element) => {
          if (
            element.getBoundingClientRect().top < window.innerHeight &&
            element.getBoundingClientRect().bottom > 0
          ) {
            if (!element.classList.contains("js-in-viewport")) {
              element.classList.add("js-in-viewport");
              rellax_y.refresh();
            }
          } else {
            if (element.classList.contains("js-in-viewport")) {
              element.classList.remove("js-in-viewport");
            }
          }
        });
      }

      window.addEventListener("scroll", addScrollParallax);
      // window.removeEventListener("scroll", addScrollParallax);
      // rellax_y.destroy();
    }
  }

  if (document.querySelectorAll("[data-rellax-x]").length) {
    if (window.innerWidth >= 1280 && !mobileTest) {
      const rellax_x = new Rellax("[data-rellax-x]", {
        horizontal: true,
      });
      function addParallaxX() {
        document.querySelectorAll("[data-rellax-x]").forEach((element) => {
          if (
            element.getBoundingClientRect().top < window.innerHeight &&
            element.getBoundingClientRect().bottom > 0
          ) {
            if (!element.classList.contains("js-in-viewport")) {
              element.classList.add("js-in-viewport");
              rellax_x.refresh();
            }
          } else {
            if (element.classList.contains("js-in-viewport")) {
              element.classList.remove("js-in-viewport");
            }
          }
        });
      }
      window.addEventListener("scroll", addParallaxX);
      // window.removeEventListener("scroll", addParallaxX);
    }
  }
}
