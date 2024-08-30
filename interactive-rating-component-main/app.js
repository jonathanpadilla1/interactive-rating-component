
const button = document.querySelector(".button1");
const button2 = document.querySelector(".button2");
const button3 = document.querySelector(".button3");
const button4 = document.querySelector(".button4");
const button5 = document.querySelector(".button5");

button.addEventListener("click", function() {
    button.classList.toggle("selected");
    console.log(button);
});

