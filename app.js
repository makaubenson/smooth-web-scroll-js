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
  const containerHeight = linksContainer.getBoundingClientRect().height;
  //   console.log(containerHeight);
  const linksHeight = Links.getBoundingClientRect().height;
  //   console.log(linksHeight);
  if (containerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    linksContainer.style.height = 0;
  }
});
// ********** fixed navbar ************
const navbar = document.getElementById("nav");
const topLink = document.querySelector(".top-link");
window.addEventListener("scroll", function () {
  ////////////////#############################################////////////////////
  // The read-only Window property pageYOffset is an alias for scrollY;
  //  as such, it returns the number of pixels the document is currently
  //  scrolled along the vertical axis (that is, up or down) with a value of 0.0,
  //  indicating that the top edge of the Document is currently aligned
  //  with the top edge of the window's content area.
  ////////////////#############################################////////////////////
  //   console.log(window.pageYOffset);
  const scrollHeight = window.pageYOffset;
  const navHeight = navbar.getBoundingClientRect().height;
  if (scrollHeight > navHeight) {
    navbar.classList.add("fixed-nav");
  } else {
    navbar.classList.remove("fixed-nav");
  }

  if (scrollHeight > 500) {
    topLink.classList.add("show-link");
  } else {
    topLink.classList.remove("show-link");
  }
});
// ********** smooth scroll ************
// select links
