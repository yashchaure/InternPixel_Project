const cursor = document.querySelector(".cursor");
const Scursor = document.querySelector(".small-cursor");
const change = document.querySelectorAll(".change-cur");
const links = document.querySelectorAll(".links");
const menu = document.querySelector(".menu-btn");
const options = document.querySelector(".options");
const page = document.querySelector(".page1");

window.addEventListener("mousemove", (e) => {
  const x = e.clientX;
  const y = e.clientY;

  cursor.style.top = `${y}px`;
  cursor.style.left = `${x}px`;

  Scursor.style.top = `${y}px`;
  Scursor.style.left = `${x}px`;

  change.forEach((elem) => {
    elem.addEventListener("mouseenter", () => {
      cursor.classList.add("hovers");
      Scursor.style.display = "none";
    });
    elem.addEventListener("mouseleave", () => {
      cursor.classList.remove("hovers");
      Scursor.style.display = "block";
    });
  });

  links.forEach((elem) => {
    elem.addEventListener("mouseenter", () => {
      cursor.style.display = "none";
      Scursor.style.display = "none";
    });
    elem.addEventListener("mouseleave", () => {
      cursor.style.display = "block";
      Scursor.style.display = "block";
    });
  });
});

let optValue = false;

menu.addEventListener("click", () => {
  if (optValue) {
    options.style.display = "block";
    optValue = false;
  } else {
    options.style.display = "none";
    optValue = true;
  }
  page.addEventListener("click", () => {
    options.style.display = "none";
    optValue = true;
  });
});

const tl = gsap.timeline({ defaults: { ease: "power1.out" } });
tl.to(".techne", {
  y: "50%",
  duration: 1.5,
});
tl.to(".loader", {
  y: "-120%",
  duration: 1,
  delay: 1,
});
