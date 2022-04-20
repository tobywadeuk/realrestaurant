import Logo from "../src/salad.png"



export default function loadmenupage(){

    const myLogo = new Image();
    myLogo.src = Logo;

    let contentDiv = document.createElement("div");

    contentDiv.classList.add("contentdiv");

    // let btn = document.createElement("button")
    // btn.innerHTML   = "Home"
    // contentDiv.appendChild(btn)
  
    let titleDiv = document.createElement("div");
    titleDiv.innerHTML = "MENU";
    contentDiv.appendChild(titleDiv)
    
    contentDiv.appendChild(myLogo)
  
    let copyDiv = document.createElement("div");
    copyDiv.innerHTML = "We sell fruit and avocados";
    contentDiv.appendChild(copyDiv)
    
    document.body.appendChild(contentDiv);
}


