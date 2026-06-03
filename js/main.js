const hamburger = document.querySelector(".hamburger");
const closeBtn = document.querySelector(".close");
const navside = document.querySelector(".navside");

hamburger.addEventListener("click", () => {
    navside.classList.add("active");
});

closeBtn.addEventListener("click", () => {
    navside.classList.remove("active");
});
