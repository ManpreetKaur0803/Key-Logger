const logDiv = document.getElementById("log");
const stateDiv = document.getElementById("state");

const startBtn = document.getElementById("start-btn");
const stopBtn = document.getElementById("stop-btn");

startBtn.addEventListener("click", () => {
  document.addEventListener("keydown", handleDown);
  document.addEventListener("keyup", handleUp);
  startBtn.disabled = true;
  stopBtn.disabled = false;
});

stopBtn.addEventListener("click", () => {
  document.removeEventListener("keydown", handleDown);
  document.removeEventListener("keyup", handleUp);
  logDiv.textContent = "";
  stateDiv.textContent = "";
  startBtn.disabled = false;
  stopBtn.disabled = true;
});

function handleDown(e) {
  logDiv.textContent = `Key ${e.key} is Pressed`;
  stateDiv.textContent = "Key is Pressed";
}

function handleUp(e) {
  logDiv.textContent = `Key ${e.key} is Pressed up`;
  stateDiv.textContent = "Key is not Pressed";
}
