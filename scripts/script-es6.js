(function () {
  const header = document.querySelector(".header");
  window.onscroll = () => {
    if (window.pageYOffset > 50) {
      header.classList.add("header_active");
    } else {
      header.classList.remove("header_active");
    }
  };
})();

// Burger handler
(function () {
  const burgerItem = document.querySelector(".burger");
  const menu = document.querySelector(".header__nav");
  const menuCloseItem = document.querySelector(".header__nav-close");
  const menuLinks = document.querySelectorAll(".header__link");
  burgerItem.addEventListener("click", () => {
    menu.classList.add("header__nav_active");
  });
  menuCloseItem.addEventListener("click", () => {
    menu.classList.remove("header__nav_active");
  });
  if (window.innerWidth <= 767) {
    for (let i = 0; i < menuLinks.length; i += 1) {
      menuLinks[i].addEventListener("click", () => {
        menu.classList.remove("header__nav_active");
      });
    }
  }
})();

// Scroll to anchors
(function () {
  const smoothScroll = function (targetEl, duration) {
    const headerElHeight = document.querySelector(".header").clientHeight;
    let target = document.querySelector(targetEl);
    let targetPosition = target.getBoundingClientRect().top - headerElHeight;
    let startPosition = window.pageYOffset;
    let startTime = null;

    const ease = function (t, b, c, d) {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    };

    const animation = function (currentTime) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = ease(timeElapsed, startPosition, targetPosition, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    };
    requestAnimationFrame(animation);
  };

  const scrollTo = function () {
    const links = document.querySelectorAll(".js-scroll");
    links.forEach((each) => {
      each.addEventListener("click", function () {
        const currentTarget = this.getAttribute("href");
        smoothScroll(currentTarget, 1000);
      });
    });
  };
  scrollTo();
})();
(function () {
  const logotype = document.querySelector(".header__logo-link");
  logotype.onclick = function () {
    location.reload();
  };
})();
(function () {
  const darkside = document.querySelector(".header__link");
  const bcolorfirst = document.querySelector("body");
  const bcolorsecond = document.querySelector(".benefits__wrap");
  const bcolorthird = document.querySelector(".benefits__title");
  const forlink = document.querySelectorAll(".movies_link");
  darkside.onclick = function () {
    if (darkside.classList.contains("darkside")) {
      darkside.classList.remove("darkside");
      bcolorfirst.style.backgroundColor = "white";
      bcolorfirst.style.color = "#102746";
      for (let i = 0; i < forlink.length; i++) {
        forlink[i].style.color = "#102746";
      }
      bcolorsecond.style.backgroundColor = "white";
      bcolorthird.style.backgroundColor = "white";
    } else {
      darkside.classList.add("darkside");
      bcolorfirst.style.backgroundColor = "black";
      bcolorfirst.style.color = "white";
      for (let i = 0; i < forlink.length; i++) {
        forlink[i].style.color = "white";
      }
      bcolorsecond.style.backgroundColor = "black";
      bcolorthird.style.backgroundColor = "black";
    }
  };
})();
