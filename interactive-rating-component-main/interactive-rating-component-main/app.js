
// const button = document.querySelector(".button1");


// button.addEventListener("click", function() {
//     button.classList.toggle("selected");
// });

const textColorChange = document.querySelector(".button1");
const textColorChange2 = document.querySelector(".button2");
const textColorChange3 = document.querySelector(".button3");
const textColorChange4 = document.querySelector(".button4");
const textColorChange5 = document.querySelector(".button5");

const textButton1 = document.getElementById("button1").innerHTML;
const textButton2 = document.getElementById("button2").innerHTML;
const textButton3 = document.getElementById("button3").innerHTML;
const textButton4 = document.getElementById("button4").innerHTML;
const textButton5 = document.getElementById("button5").innerHTML;

function myFunction() {
    const x = document.getElementById("rating-component");
        x.style.display = "none";
};

function myFunction2() {
    const x = document.getElementById("thankyou-component");
        x.style.display = "block";
};

const submitButton = document.querySelector(".submit");
submitButton.addEventListener("click", (event) => {
    myFunction();
    myFunction2();
});






textColorChange.addEventListener("click", (event) => {
    document.getElementById("selected").innerHTML = "You selected 1 of 5"
});
textColorChange2.addEventListener("click", (event) => {
    document.getElementById("selected").innerHTML = "You selected 2 of 5"
});
textColorChange3.addEventListener("click", (event) => {
    document.getElementById("selected").innerHTML = "You selected 3 of 5"
});
textColorChange4.addEventListener("click", (event) => {
    document.getElementById("selected").innerHTML = "You selected 4 of 5"
});
textColorChange5.addEventListener("click", (event) => {
    document.getElementById("selected").innerHTML = "You selected 5 of 5"
});



const nodeList = document.querySelectorAll(".numbers p");

const array1 = Array.prototype.slice.call(nodeList);
// console.log(array1);


textColorChange.addEventListener("click", (event) => {
    event.target.style.background = "rgb(251, 116, 19)";
    event.target.style.color = "black";
});
textColorChange.addEventListener("mouseover", (event) => {
    if (event.target.style.background === "rgb(251, 116, 19)") {
        event.target.style.background = "rgb(251, 116, 19)";
        event.target.style.color = "black";
    } else {
        event.target.style.background = "white";
        event.target.style.color = "black";
    };
    // console.log(event.target.style.background, event.target.style.color);
});
textColorChange.addEventListener("mouseout", (event) => {
    if (event.target.style.background === "rgb(251, 116, 19)") {
        event.target.style.background = "rgb(251, 116, 19)";
        event.target.style.color = "black";
    } else {
        event.target.style.background = "rgba(83, 74, 74, 0.486)";
        event.target.style.color = "rgb(149, 158, 172)";
    };
    // console.log(event.target.style.background, event.target.style.color);
});

textColorChange2.addEventListener("click", (event) => {
    event.target.style.background = "rgb(251, 116, 19)";
    event.target.style.color = "black";
});
textColorChange2.addEventListener("mouseover", (event) => {
    if (event.target.style.background === "rgb(251, 116, 19)") {
        event.target.style.background = "rgb(251, 116, 19)";
        event.target.style.color = "black";
    } else {
        event.target.style.background = "white";
        event.target.style.color = "black";
    };
    // console.log(event.target.style.background, event.target.style.color);
});
textColorChange2.addEventListener("mouseout", (event) => {
    if (event.target.style.background === "rgb(251, 116, 19)") {
        event.target.style.background = "rgb(251, 116, 19)";
        event.target.style.color = "black";
    } else {
        event.target.style.background = "rgba(83, 74, 74, 0.486)";
        event.target.style.color = "rgb(149, 158, 172)";
    };
    // console.log(event.target.style.background, event.target.style.color);
});

textColorChange3.addEventListener("click", (event) => {
    event.target.style.background = "rgb(251, 116, 19)";
    event.target.style.color = "black";
});
textColorChange3.addEventListener("mouseover", (event) => {
    if (event.target.style.background === "rgb(251, 116, 19)") {
        event.target.style.background = "rgb(251, 116, 19)";
        event.target.style.color = "black";
    } else {
        event.target.style.background = "white";
        event.target.style.color = "black";
    };
    // console.log(event.target.style.background, event.target.style.color);
});
textColorChange3.addEventListener("mouseout", (event) => {
    if (event.target.style.background === "rgb(251, 116, 19)") {
        event.target.style.background = "rgb(251, 116, 19)";
        event.target.style.color = "black";
    } else {
        event.target.style.background = "rgba(83, 74, 74, 0.486)";
        event.target.style.color = "rgb(149, 158, 172)";
    };
    // console.log(event.target.style.background, event.target.style.color);
});

textColorChange4.addEventListener("click", (event) => {
    event.target.style.background = "rgb(251, 116, 19)";
    event.target.style.color = "black";
});
textColorChange4.addEventListener("mouseover", (event) => {
    if (event.target.style.background === "rgb(251, 116, 19)") {
        event.target.style.background = "rgb(251, 116, 19)";
        event.target.style.color = "black";
    } else {
        event.target.style.background = "white";
        event.target.style.color = "black";
    };
    // console.log(event.target.style.background, event.target.style.color);
});
textColorChange4.addEventListener("mouseout", (event) => {
    if (event.target.style.background === "rgb(251, 116, 19)") {
        event.target.style.background = "rgb(251, 116, 19)";
        event.target.style.color = "black";
    } else {
        event.target.style.background = "rgba(83, 74, 74, 0.486)";
        event.target.style.color = "rgb(149, 158, 172)";
    };
    // console.log(event.target.style.background, event.target.style.color);
});

textColorChange5.addEventListener("click", (event) => {
    event.target.style.background = "rgb(251, 116, 19)";
    event.target.style.color = "black";
});
textColorChange5.addEventListener("mouseover", (event) => {
    if (event.target.style.background === "rgb(251, 116, 19)") {
        event.target.style.background = "rgb(251, 116, 19)";
        event.target.style.color = "black";
    } else {
        event.target.style.background = "white";
        event.target.style.color = "black";
    };
    // console.log(event.target.style.background, event.target.style.color);
});
textColorChange5.addEventListener("mouseout", (event) => {
    if (event.target.style.background === "rgb(251, 116, 19)") {
        event.target.style.background = "rgb(251, 116, 19)";
        event.target.style.color = "black";
    } else {
        event.target.style.background = "rgba(83, 74, 74, 0.486)";
        event.target.style.color = "rgb(149, 158, 172)";
    };
    // console.log(event.target.style.background, event.target.style.color);
});


textColorChange.addEventListener("click", (event) => {
    event.target.style.background = "rgb(251, 116, 19)";
    event.target.style.color = "black";

    if(array1[0].style.background === "rgb(251, 116, 19)") {
        array1[1].style.background = "rgba(83, 74, 74, 0.486)";
        array1[1].style.color = "rgb(149, 158, 172)";
        array1[2].style.background = "rgba(83, 74, 74, 0.486)";
        array1[2].style.color = "rgb(149, 158, 172)";
        array1[3].style.background = "rgba(83, 74, 74, 0.486)";
        array1[3].style.color = "rgb(149, 158, 172)";
        array1[4].style.background = "rgba(83, 74, 74, 0.486)";
        array1[4].style.color = "rgb(149, 158, 172)";
    };

// console.log(textColorChange);
});
textColorChange2.addEventListener("click", (event) => {
    event.target.style.background = "rgb(251,116, 19)";
    event.target.style.color = "black";

    if(array1[1].style.background === "rgb(251, 116, 19)") {
        array1[0].style.background = "rgba(83, 74, 74, 0.486)";
        array1[0].style.color = "rgb(149, 158, 172)";
        array1[2].style.background = "rgba(83, 74, 74, 0.486)";
        array1[2].style.color = "rgb(149, 158, 172)";
        array1[3].style.background = "rgba(83, 74, 74, 0.486)";
        array1[3].style.color = "rgb(149, 158, 172)";
        array1[4].style.background = "rgba(83, 74, 74, 0.486)";
        array1[4].style.color = "rgb(149, 158, 172)";
    };

// console.log(textColorChange2);
});
textColorChange3.addEventListener("click", (event) => {
    event.target.style.background = "rgb(251,116, 19)";
    event.target.style.color = "black";

    if(array1[2].style.background === "rgb(251, 116, 19)") {
        array1[0].style.background = "rgba(83, 74, 74, 0.486)";
        array1[0].style.color = "rgb(149, 158, 172)";
        array1[1].style.background = "rgba(83, 74, 74, 0.486)";
        array1[1].style.color = "rgb(149, 158, 172)";
        array1[3].style.background = "rgba(83, 74, 74, 0.486)";
        array1[3].style.color = "rgb(149, 158, 172)";
        array1[4].style.background = "rgba(83, 74, 74, 0.486)";
        array1[4].style.color = "rgb(149, 158, 172)";
    };

// console.log(textColorChange3);
});
textColorChange4.addEventListener("click", (event) => {
    event.target.style.background = "rgb(251,116, 19)";
    event.target.style.color = "black";

    if(array1[3].style.background === "rgb(251, 116, 19)") {
        array1[0].style.background = "rgba(83, 74, 74, 0.486)";
        array1[0].style.color = "rgb(149, 158, 172)";
        array1[1].style.background = "rgba(83, 74, 74, 0.486)";
        array1[1].style.color = "rgb(149, 158, 172)";
        array1[2].style.background = "rgba(83, 74, 74, 0.486)";
        array1[2].style.color = "rgb(149, 158, 172)";
        array1[4].style.background = "rgba(83, 74, 74, 0.486)";
        array1[4].style.color = "rgb(149, 158, 172)";
    };

// console.log(textColorChange4);
});
textColorChange5.addEventListener("click", (event) => {
    event.target.style.background = "rgb(251,116, 19)";
    event.target.style.color = "black";

    if(array1[4].style.background === "rgb(251, 116, 19)") {
        array1[0].style.background = "rgba(83, 74, 74, 0.486)";
        array1[0].style.color = "rgb(149, 158, 172)";
        array1[1].style.background = "rgba(83, 74, 74, 0.486)";
        array1[1].style.color = "rgb(149, 158, 172)";
        array1[2].style.background = "rgba(83, 74, 74, 0.486)";
        array1[2].style.color = "rgb(149, 158, 172)";
        array1[3].style.background = "rgba(83, 74, 74, 0.486)";
        array1[3].style.color = "rgb(149, 158, 172)";
    };

// console.log(textColorChange5);
});



