import "./styles.css";

const form = document.querySelector(".js-form"),
  range = document.querySelector(".js-range"),
  input = form.querySelector(".js-input"),
  submitBtn = form.querySelector("button"),
  choose = document.querySelector(".js-choose"),
  result = document.querySelector(".js-result");

let maxValue = 0;

function handleRange() {
  if (range.value <= 0) {
    alert("0���� ū ����� �Է��ϼ���!");
    range.value = "";
    range.innerHTML = "";
  } else {
    maxValue = range.value;
  }
}

function handleSubmit(event) {
  event.preventDefault();
}

function handleChoose() {
  if (maxValue < parseInt(input.value, 10)) {
    alert("�ִ밪���� �Է°��� Ŀ��!");
    input.value = "";
  } else {
    let randomNumber = Math.floor(Math.random() * maxValue) + 1;
    choose.innerHTML = `You chose : ${input.value}, the machine chose : ${randomNumber}.`;
    if (randomNumber === parseInt(input.value, 10)) {
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
