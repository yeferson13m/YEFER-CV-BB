document.addEventListener("DOMContentLoaded", () => {
  const printButton = document.getElementById("printBtn");
  if (printButton) {
    printButton.addEventListener("click", () => window.print());
  }

  // Smooth scrolling for internal navigation links.
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const target = document.querySelector(link.getAttribute("href"));
      if (target) {
        event.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
});
