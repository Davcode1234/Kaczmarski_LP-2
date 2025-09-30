const toggleBtn = document.querySelector(".toggle-btn");
const textToWrap = document.querySelector(".expanded");

toggleBtn.addEventListener("click", (e) => {
  e.preventDefault();
  textToWrap.classList.toggle("expanded");

  const open = textToWrap.classList.contains("expanded");
  toggleBtn.textContent = open ? "Zwiń" : "Rozwiń";
});
