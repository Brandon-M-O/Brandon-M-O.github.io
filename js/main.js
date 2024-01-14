document.addEventListener("DOMContentLoaded", function () {
  const button_menu = document.getElementById("b-menu");
  const header_menu = document.getElementById("header-menu");

  button_menu.addEventListener("click", function () {
    header_menu.classList.toggle("block");
  });

  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach((link) => {
    link.addEventListener("click", scrollToSection);
  });

  function scrollToSection(e) {
    e.preventDefault();

    const targetId = this.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      header_menu.classList.toggle("block");
      window.scrollTo({
        top: targetElement.offsetTop-100,
        behavior: "smooth",
      });
    }
  }
});
