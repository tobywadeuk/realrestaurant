import './style.css';
import loadhomepage from "./homepage.js";
import loadmenupage from "./menupage.js";
import loadaboutpage from './aboutpage';

let buttonDiv = document.createElement("div");
let menuBtn = document.createElement("button");
let homeBtn = document.createElement("button");
let aboutBtn = document.createElement("button");

buttonDiv.classList.add("buttonDiv")

menuBtn.innerHTML = "Menu"
homeBtn.innerHTML = "Home"
aboutBtn.innerHTML = "About Us"


buttonDiv.appendChild(menuBtn)
buttonDiv.appendChild(homeBtn)
buttonDiv.appendChild(aboutBtn)

document.body.appendChild(buttonDiv);

loadhomepage()


homeBtn.addEventListener("click", function () {
    document.getElementsByClassName("contentdiv")[0].remove()
    loadhomepage()
}
)

menuBtn.addEventListener("click", function () {
    document.getElementsByClassName("contentdiv")[0].remove()
    loadmenupage()
}
)

aboutBtn.addEventListener("click", function () {
    document.getElementsByClassName("contentdiv")[0].remove()
    loadaboutpage()
}
)
