// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
const year = document.getElementById("date");
year.innerHTML = new Date().getFullYear();
// ********** close links ************
const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const Links = document.querySelector(".links");

//toggle css class to hide and display nav links
navToggle.addEventListener("click", function () {
  //   linksContainer.classList.toggle("show-links"); method 1
  //method 2
  const containerHeight = linksContainer.getBoundingClientRect();
  console.log(containerHeight);
});
// ********** fixed navbar ************

// ********** smooth scroll ************
// select links
