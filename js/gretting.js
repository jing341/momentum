const form = document.querySelector(".js-form"),
  input = form.querySelector(".nameInput"),
  greeting = document.querySelector(".js-greetings"),
  removeClock = document.querySelector("h1"),
  TODoInput = document.querySelector(".toDoInput"),
  dates = new Date(),
  hour = dates.getHours();

const clock = document.createElement("h1");

const USER_LS = "currentUser",
  SHOWING_CN = "showing";

function saveName(text) {
  localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) {
  event.preventDefault();
  document.querySelector(".js-clock").appendChild(clock);

  const currentValue = input.value;
  paintGreeting(currentValue);
  saveName(currentValue);
  setInterval(clockInnerTextChange, 1000);
}

function askForName() {
  form.classList.add(SHOWING_CN);
  form.addEventListener("submit", handleSubmit);
  removeClock.remove();
}

function paintGreeting(text) {
  form.classList.remove(SHOWING_CN);
  greeting.classList.add(SHOWING_CN);
  TODoInput.classList.add ("top-toDoInput");
  if(hour > 11) {
  greeting.innerText = `Good afternoon
  ${text}!`;
} else {
  greeting.innerText = `Good morning
  ${text}!`
}
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    askForName();
  } else {
    paintGreeting(currentUser);
  }
}

function clockInnerTextChange() {
  const date = new Date();
  const minute = date.getMinutes();
  const hour = date.getHours();
  clock.innerText = `${hour < 10 ? `0${hour}` : hour}:${minute < 10 ? `0${minute}` : minute}`;
}

function init() {
  loadName();
}

init();