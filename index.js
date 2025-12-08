$(document).ready(() => {
  const lightIconHTML =
    '<img src=assets/icons/brightness-high.svg style="filter: invert(100%)" alt="light mode icon">';
  const darkIconHTML =
    '<img src=assets/icons/moon-stars-fill.svg style="filter: invert(100%)" alt="dark mode icon">';

  function updateLightDarkMode() {
    if ($("body").attr("data-bs-theme") == "dark") {
      $("#dark-light-button").html(darkIconHTML);
    } else {
      $("#dark-light-button").html(lightIconHTML);
    }
  }

  updateLightDarkMode();

  $("#dark-light-button").on("click", () => {
    if ($("body").attr("data-bs-theme") == "dark") {
      $("body").attr("data-bs-theme", "light");
    } else {
      $("body").attr("data-bs-theme", "dark");
    }
    updateLightDarkMode();
  });
});
