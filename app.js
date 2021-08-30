import "./styles.css";

const form = document.querySelector(".js-form"),
  input = form.querySelector(".js-input"),
  submitBtn = form.querySelector("button"),
  choose = document.querySelector(".js-choose"),
  result = document.querySelector(".js-result");

let randomNumber = Math.floor(Math.random() * range);
let range = document.querySelector(".js-range");

let maxValue = range;

function handleRange() {
  if (range <= 0) {
    alert("0보다 큰 양수를 입력하세요!");
    range.value = "";
    range.innerHTML = "";
    maxValue = 0;
  }
}

function handleSubmit(event) {
  event.preventDefault();
}

function handleChoose() {
  if (parseInt(maxValue) < parseInt(input.value)) {
    alert("최대값보다 입력값이 커요!");
    console.log("함수 실행");
    input.value = "";
  } else {
    choose.innerHTML = `You chose : ${input.value}, the machine chose : ${randomNumber}`;
    if (randomNumber === parseInt(input.value)) {
      result.innerHTML = "You Win!!";
    } else {
      result.innerHTML = "You Lost..";
    }
  }
}

function init() {}
range.addEventListener("change", handleRange);
form.addEventListener("submit", handleSubmit);
submitBtn.addEventListener("click", handleChoose);

init();

// const h1 = document.querySelector("div.hello:first-child h1");
// let colors = ["#FF8000", "#01DFD7", "#2E9AFE", "#8904B1"];

// function handleRightClick() {
//   h1.innerText = "That was right click!";
//   h1.style.color = colors[0];
// }

// function handleMouseEnter() {
//   h1.innerText = "The mouse is here!";
//   h1.style.color = colors[1];
// }

// function handleMouseLeave() {
//   h1.innerText = "The mouse was gone!";
//   h1.style.color = colors[2];
// }

// function handleViewResize() {
//   h1.innerText = "You just resized!";
//   h1.style.color = colors[3];
// }

// h1.addEventListener("mouseenter", handleMouseEnter);
// h1.addEventListener("mouseleave", handleMouseLeave);
// // window.addEventListener("resize", handleViewResize);
// window.addEventListener("contextmenu", handleRightClick);

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

// import "./style.css";

// const body = document.body;

// const BIG_SCREEN = "bigScreen";
// const MEDIUM_SCREEN = "mediumScreen";
// const SMALL_SCREEN = "smallScreen";

// function handleResize() {
//   const width = window.innerWidth;
//   if (width > 1000) {
//     body.classList.add(BIG_SCREEN);
//     body.classList.remove(MEDIUM_SCREEN);
//   } else if (width <= 1000 && width >= 600) {
//     body.classList.add(MEDIUM_SCREEN);
//     body.classList.remove(BIG_SCREEN, SMALL_SCREEN);
//   } else {
//     body.classList.add(SMALL_SCREEN);
//     body.classList.remove(MEDIUM_SCREEN);
//   }
// }

// window.addEventListener("resize", handleResize);

// const loginForm = document.querySelector("#login-form");
// const loginInput = document.querySelector("#login-form input");
// const greeting = document.querySelector("#greeting");

// const HIDDEN_CLASSNAME = "hidden";
// const USERNAME_KEY = "username";

// function onLoginSubmit(event) {
//   event.preventDefault();
//   loginForm.classList.add(HIDDEN_CLASSNAME);
//   const username = loginInput.value;
//   localStorage.setItem(USERNAME_KEY, username);
//   paintGreetings(username);
// }

// function paintGreetings(username) {
//   greeting.innerText = `Hello ${username}`;
//   greeting.classList.remove(HIDDEN_CLASSNAME);
// }

// const savedUsername = localStorage.getItem(USERNAME_KEY);

// if (savedUsername === null) {
//   loginForm.classList.remove(HIDDEN_CLASSNAME);
//   loginForm.addEventListener("submit", onLoginSubmit);
// } else {
//   paintGreetings(savedUsername);
// }
