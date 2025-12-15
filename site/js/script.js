document.getElementById("year").textContent = new Date().getFullYear();

const form = document.getElementById("waitlistForm");
const msg = document.getElementById("formMsg");

form.addEventListener("submit", e => {
  e.preventDefault();
  msg.textContent = "✅ You're on the list!";
});
