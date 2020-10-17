const menu = document.querySelector(".icon");
const list = document.querySelector(".nav-items");

menu.addEventListener("click", () => {
    menu.classList.toggle("show-x");
    list.classList.toggle("show");
})