const button = document.getElementById("clickButton");
const outputText = document.getElementById("outputText");

button.addEventListener("click", () => {
  outputText.textContent = "Вы нажали кнопку!";
});
