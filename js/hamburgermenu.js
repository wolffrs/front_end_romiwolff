var hamburger = document.querySelector("button");
var menu = document.querySelector("div");

hamburger.addEventListener("click", function() {
    menu.classList.toggle("menuhidden");
});

hamburger.addEventListener("click", function() {
    hamburger.classList.toggle("buttonclicked");
});
