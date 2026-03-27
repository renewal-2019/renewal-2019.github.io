const navLinks = [...document.querySelectorAll(".side-nav a")];
const sections = navLinks
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

const scrollTopButton = document.querySelector(".scroll-top");

const activateSection = () => {
  const current = sections.find((section) => {
    const rect = section.getBoundingClientRect();
    return rect.top <= 180 && rect.bottom >= 180;
  });

  navLinks.forEach((link) => {
    const active = current && link.getAttribute("href") === `#${current.id}`;
    link.classList.toggle("is-active", active);
  });
};

const toggleScrollTop = () => {
  scrollTopButton.classList.toggle("is-visible", window.scrollY > 480);
};

window.addEventListener("scroll", () => {
  activateSection();
  toggleScrollTop();
});

scrollTopButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

activateSection();
toggleScrollTop();
