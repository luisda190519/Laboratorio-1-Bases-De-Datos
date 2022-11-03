const btn = document.getElementById("btn-error");

try {
  btn.addEventListener("click", () => {
    btn.style.display = "none";
  });
} catch (error) {}

