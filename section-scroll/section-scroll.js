function enableSectionScroll() {
  let sectionButton;

  const sections = document.querySelectorAll(".fusection");

  const highestZIndex = Array.from(document.querySelectorAll("body *"))
    .map(a => parseFloat(window.getComputedStyle(a).zIndex))
    .filter(a => !isNaN(a))
    .sort()
    .pop();

  const controller = document.createElement("nav");
  controller.classList.add("section-scroll-controller");
  controller.style.top = (100 - 5 * sections.length) / 2 + "%";
  controller.style.zIndex = highestZIndex + 1;

  sections.forEach((_, i) => {
    sectionButton = document.createElement("div");
    sectionButton.classList.add("section-scroll-controller-button");
    sectionButton.addEventListener("click", () =>
      sections[i].scrollIntoView({ behavior: "smooth" })
    );
    controller.appendChild(sectionButton);
  });

  document.querySelector("body").appendChild(controller);

  $.scrollify({
    section: ".section",
    easing: "easeOutExpo",
    setHeights: false
  });

  console.log("Section Scroll enabled.");
}
