const nav = document.querySelector("#nav");
const navBtn = document.querySelector("#nav-btn");
const navBtnImg = document.querySelector("#nav-btn-img");
const openPopUp = document.getElementById("btn-open-message");
const closePopUp = document.getElementById("pop-up-close");
const popUp = document.getElementById("pop-up");
const sendPopUp = document.getElementById("send-message");

sendPopUp.addEventListener("click", () => {
  popUp.classList.remove("active");
});

openPopUp.addEventListener("click", function (e) {
  e.preventDefault();
  popUp.classList.add("active");
});

closePopUp.addEventListener("click", () => {
  popUp.classList.remove("active");
});

navBtn.onclick = () => {
  if (nav.classList.toggle("open")) {
    navBtnImg.src = "./img/menu2.png";
  } else {
    navBtnImg.src = "./img/menu.png";
  }
};

AOS.init();
