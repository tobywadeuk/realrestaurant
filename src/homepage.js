import Logo from "../src/salad.png"

export default function loadhomepage() {
    

    const myLogo = new Image();
    myLogo.src = Logo;

    let contentDiv = document.createElement("div");

    contentDiv.classList.add("contentdiv");


    // let btn = document.createElement("button")
    // btn.innerHTML = "Menu"
    // contentDiv.appendChild(btn)

    let titleDiv = document.createElement("div");
    titleDiv.innerHTML = "REAL";
    contentDiv.appendChild(titleDiv)

    contentDiv.appendChild(myLogo)

    let copyDiv = document.createElement("div");
    copyDiv.innerHTML = "Welcome. Real food by real people.";
    contentDiv.appendChild(copyDiv)

    document.body.appendChild(contentDiv);
}