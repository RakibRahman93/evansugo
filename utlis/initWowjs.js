export function init_wow() {
  const { WOW } = require("wowjs");
  setTimeout(() => {
    /* Wow init */
    if (document.body.classList.contains("appear-animate")) {
      document
        .querySelectorAll(".wow")
        .forEach((el) => el.classList.add("no-animate"));
    }
    var wow = new WOW({
      boxClass: "wow",
      animateClass: "animatedfgfg",
      offset: 100,

      live: false,
      callback: function (box) {
        box.classList.add("animated");
      },
    });

    if (document.body.classList.contains("appear-animate")) {
      wow.init();
    } else {
      document
        .querySelectorAll(".wow")
        .forEach((el) => (el.style.opacity = "1"));
    }

    /* Wow for portfolio init */
    if (document.body.classList.contains("appear-animate")) {
      document
        .querySelectorAll(".wow-p")
        .forEach((el) => el.classList.add("no-animate"));
    }
    var wow_p = new WOW({
      boxClass: "wow-p",
      animateClass: "animatedfgfg",
      offset: 100,

      live: false,
      callback: function (box) {
        box.classList.add("animated");
      },
    });

    if (document.body.classList.contains("appear-animate")) {
      wow_p.init();
    } else {
      document
        .querySelectorAll(".wow-p")
        .forEach((el) => (el.style.opacity = "1"));
    }

    /* Wow for menu bar init */
    if (
      document.body.classList.contains("appear-animate") &&
      window.innerWidth >= 1024 &&
      document.documentElement.classList.contains("no-mobile")
    ) {
      document.querySelectorAll(".wow-menubar").forEach((el) => {
        el.classList.add("no-animate", "fadeInDown", "animated");
        setInterval(() => {
          el.classList.remove("no-animate");
        }, 1500);
      });
    } else {
      document
        .querySelectorAll(".wow-menubar")
        .forEach((el) => (el.style.opacity = "1"));
    }
  }, 100);
}
