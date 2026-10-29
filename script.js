
const button = document.getElementById("exploreBtn");
const message = document.getElementById("message");

button.addEventListener("click", () => {
  message.textContent =
    "Thanks for visiting! Your next big idea starts here.";

  document.getElementById("about").scrollIntoView({
    behavior: "smooth"
  });
});
