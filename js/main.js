document.querySelectorAll('#year').forEach(el => { el.textContent = new Date().getFullYear(); });
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("a").forEach(link => {
    const href = link.getAttribute("href");

    if (
      !href ||
      href.startsWith("#") ||
      href.startsWith("mailto:") ||
      href.startsWith("tel:") ||
      link.target === "_blank" ||
      link.hostname !== window.location.hostname
    ) {
      return;
    }

    link.addEventListener("click", event => {
      event.preventDefault();

      const destination = link.href;
      document.body.classList.add("page-transition");

      setTimeout(() => {
        window.location.href = destination;
      }, 300);
    });
  });
});
