$(document).ready(() => {
  const lightIconHTML =
    '<img src=assets/icons/brightness-high.svg style="filter: invert(100%)" alt="light mode icon">';
  const darkIconHTML =
    '<img src=assets/icons/moon-stars-fill.svg style="filter: invert(100%)" alt="dark mode icon">';
  const themeElement = "html";

  function getTheme() {
    if ($(themeElement).attr("data-bs-theme") === "dark") {
      return "dark";
    } else {
      return "light";
    }
  }

  function updateTheme() {
    if (getTheme() === "dark") {
      $("#dark-light-button").html(darkIconHTML);
    } else {
      $("#dark-light-button").html(lightIconHTML);
    }
  }

  function flipTheme() {
    if (getTheme() === "dark") {
      $(themeElement).attr("data-bs-theme", "light");
    } else {
      $(themeElement).attr("data-bs-theme", "dark");
    }
  }

  $("#dark-light-button").on("click", () => {
    flipTheme();
    updateTheme();
  });

  updateTheme();
});
