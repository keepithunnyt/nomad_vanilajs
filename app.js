const colors = [
  "#ef5777",
  "#575fcf",
  "#4bcffa",
  "#34e7e4",
  "#0be881",
  "#f53b57",
  "#3c40c6",
  "#0fbcf9",
  "#00d8d6",
  "#05c46b",
  "#ffc048",
  "#ffdd59",
  "#ff5e57",
  "#d2dae2",
  "#485460",
  "#ffa801",
  "#ffd32a",
  "#ff3f34",
];

const btn = document.querySelector("button");
function randomBackground() {
  const firstColor = colors[Math.floor(Math.random() * colors.length)];
  const secondColor = colors[Math.floor(Math.random() * colors.length)];

  document.body.style.background = `linear-gradient(0.25turn, ${firstColor}, ${secondColor})`;
}

btn.addEventListener("click", randomBackground);

// import "./styles.css";

// const form = document.querySelector(".js-form"),
//   range = document.querySelector(".js-range"),
//   input = form.querySelector(".js-input"),
//   submitBtn = form.querySelector("button"),
//   choose = document.querySelector(".js-choose"),
//   result = document.querySelector(".js-result");

// let maxValue = 0;

// function handleRange() {
//   if (range.value <= 0) {
//     alert("0보다 큰 양수를 입력하세요!");
//     range.value = "";
//     range.innerHTML = "";
//   } else {
//     maxValue = range.value;
//   }
// }

// function handleSubmit(event) {
//   event.preventDefault();
// }

// function handleChoose() {
//   if (maxValue < parseInt(input.value, 10)) {
//     alert("최대값보다 입력값이 커요!");
//     input.value = "";
//   } else {
//     let randomNumber = Math.floor(Math.random() * maxValue) + 1;
//     choose.innerHTML = `You chose : ${input.value}, the machine chose : ${randomNumber}.`;
//     if (randomNumber === parseInt(input.value, 10)) {
//       result.innerHTML = "You Win!!";
//     } else {
//       result.innerHTML = "You Lost..";
//     }
//   }
// }

// function init() {}
// range.addEventListener("change", handleRange);
// form.addEventListener("submit", handleSubmit);
// submitBtn.addEventListener("click", handleChoose);

// init();
