// FOR THE FILTERS - SHOW N HIDE

// Get references to the button and the genre-filters div
const filterToggler = document.getElementById("filter-toggler");
const genreFilters = document.getElementById("genre-filters");

// Add a click event listener to the button
filterToggler.addEventListener("click", function () {
  // Toggle the 'hide' class on the genre-filters div
  genreFilters.classList.toggle("hide");
});



