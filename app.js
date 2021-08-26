const h1 = document.querySelector("div.hello:first-child h1");
let colors = ["#FF8000", "#01DFD7", "#2E9AFE", "#8904B1"];

function handleRightClick() {
  h1.innerText = "That was right click!";
  h1.style.color = colors[0];
}

function handleMouseEnter() {
  h1.innerText = "The mouse is here!";
  h1.style.color = colors[1];
}

function handleMouseLeave() {
  h1.innerText = "The mouse was gone!";
  h1.style.color = colors[2];
}

function handleViewResize() {
  h1.innerText = "You just resized!";
  h1.style.color = colors[3];
}

h1.addEventListener("mouseenter", handleMouseEnter);
h1.addEventListener("mouseleave", handleMouseLeave);
// window.addEventListener("resize", handleViewResize);
window.addEventListener("contextmenu", handleRightClick);

// // <?? DONT DELETE THIS ??>
// import "./styles.css";
// const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// // <?? /DONT DELETE THIS ??>

// /*
// ? The text of the title should change when the mouse is on top of it.
// ? The text of the title should change when the mouse is leaves it.
// ? When the window is resized the title should change.
// ? On right click the title should also change.
// ? The colors of the title should come from a color from the colors array.
// ? DO NOT CHANGE .css, or .html files.
// ? ALL function handlers should be INSIDE of "superEventHandler"
// */
// const superEventHandler = {
//   handleMouseOver: function () {
//     title.innerHTML = "The mouse is here!";
//     title.style.color = colors[0];
//   },
//   handleMouseLeave: function () {
//     title.innerHTML = "The mouse is gone!";
//     title.style.color = colors[1];
//   },
//   handleWindowResize: function () {
//     title.innerHTML = "You just resized!";
//     title.style.color = colors[2];
//   },
//   handleRightClick: function () {
//     title.innerHTML = "That was a right click!";
//     title.style.color = colors[3];
//   }
// };

// const title = document.querySelector("h2");

// title.addEventListener("mouseover", superEventHandler.handleMouseOver);
// title.addEventListener("mouseleave", superEventHandler.handleMouseLeave);

// window.addEventListener("resize", superEventHandler.handleWindowResize);
// window.addEventListener("contextmenu", superEventHandler.handleRightClick);

import "./style.css";

const body = document.body;

const BIG_SCREEN = "bigScreen";
const MEDIUM_SCREEN = "mediumScreen";
const SMALL_SCREEN = "smallScreen";

function handleResize() {
  const width = window.innerWidth;
  if (width > 1000) {
    body.classList.add(BIG_SCREEN);
    body.classList.remove(MEDIUM_SCREEN);
  } else if (width <= 1000 && width >= 600) {
    body.classList.add(MEDIUM_SCREEN);
    body.classList.remove(BIG_SCREEN, SMALL_SCREEN);
  } else {
    body.classList.add(SMALL_SCREEN);
    body.classList.remove(MEDIUM_SCREEN);
  }
}

window.addEventListener("resize", handleResize);
