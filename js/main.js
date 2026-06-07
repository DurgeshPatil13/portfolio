const hamburger = document.querySelector(".hamburger");
const closeBtn = document.querySelector(".close");
const navside = document.querySelector(".navside");

hamburger.addEventListener("click", () => {
    navside.classList.add("active");
});

closeBtn.addEventListener("click", () => {
    navside.classList.remove("active");
});
const navLinks = document.querySelectorAll(".navside a");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navside.classList.remove("active");
    });
});
const workbtn=document.querySelector(".work");
const cvbtn=document.querySelector(".cvbtn");
workbtn.addEventListener("click",()=>{
        document.getElementById("worksection").scrollIntoView({
        behavior: "smooth"
    });
})
const div = document.querySelector(".talk-btn");
const icon = div.querySelector("i");

div.addEventListener("click", () => {
    icon.classList.toggle("fa-moon");
    icon.classList.toggle("fa-sun");
});


div.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});