//Slick slider
$(document).ready(function () {
  $(".quote-container").slick({
    prevArrow:
      "<button type='button' class='slick-prev pull-left'><i class='fal fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow:
      "<button type='button' class='slick-next pull-right'><i class='fal fa-angle-right' aria-hidden='true'></i></button>",
    responsive: [
      {
        breakpoint: 767,
        settings: {
          arrows: false,
        },
      },
    ],
  });
});
const headerToggle = document.querySelector(".header-toggle");
console.log(headerToggle);
const headerMenu = document.querySelector(".header-menu");
const headerTop = document.querySelector(".header-top");
const headerMenuItem = document.querySelectorAll(".header-menu-link");
const btnscrollTop = document.getElementById("scrollTop");
console.log(btnscrollTop);
console.log(headerMenu);
const expanToggle = "is-toggle";
headerToggle.addEventListener("click", () => {
  headerMenu.classList.add(expanToggle);
  console.log("da click");
});
//Couter Number
var section_number = document.querySelector(".number");
var isRun = false;
var heightN =
  section_number.offsetTop + section_number.getBoundingClientRect().height;
var heightNumber = heightN - window.innerHeight;
console.log(window.innerHeight);
console.log(heightN);
console.log(heightNumber);
function Couter1() {
  let number = document.querySelectorAll(".number-item-count");
  let coutUp = (e, count, end) => {
    let start = count;
    e.innerHTML = start;
    if (start < end) {
      setTimeout(() => coutUp(e, start + 1, end), 10);
    } else {
      isRun = true;
    }
  };
  number.forEach((e) => {
    let end = Number.parseInt(e.innerText);
    coutUp(e, 0, end);
  });
}
Couter1();
window.addEventListener("click", function (e) {
  if (!headerMenu.contains(e.target) && !e.target.matches(".header-toggle")) {
    headerMenu.classList.remove(expanToggle);
    console.log("da xoas");
  }
});

window.addEventListener("scroll", function () {
  console.log(window.pageYOffset);
  const headerTopHeight = headerTop.offsetTop;
  if (window.pageYOffset > headerTopHeight) {
    headerTop.classList.add("header-top-fixed");
  } else {
    headerTop.classList.remove("header-top-fixed");
  }
  if (window.pageYOffset > 1000) {
    btnscrollTop.style.display = "block";
  } else {
    btnscrollTop.style.display = "none";
  }
  if (window.pageYOffset > heightNumber && window.pageYOffset < heightN) {
    if (!isRun) {
      Couter1();
    }
  } else if (
    window.pageYOffset < heightNumber ||
    window.pageYOffset > heightN
  ) {
    isRun = false;
  }
});
btnscrollTop.addEventListener("click", function () {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});
console.log(headerMenuItem);
headerMenuItem.forEach((element) => {
  element.addEventListener("click", function () {
    headerMenuItem.forEach((e) => {
      e.classList.remove("menu-active");
    });
    element.classList.add("menu-active");
  });
});
// WEDO CLicking

var wedoItems = document.querySelectorAll(".wedo-item");
console.log(wedoItems);
wedoItems.forEach((e) => {
  e.addEventListener("click", function () {
    wedoItems.forEach((e) => {
      e.classList.remove("is-active");
    });
    e.classList.add("is-active");
  });
});
