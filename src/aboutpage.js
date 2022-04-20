import Logo from "../src/salad.png"



export default function loadaboutpage(){

    const myLogo = new Image();
    myLogo.src = Logo;

    let contentDiv = document.createElement("div");

    contentDiv.classList.add("contentdiv");
  
    let titleDiv = document.createElement("div");
    titleDiv.innerHTML = "ABOUT US";
    contentDiv.appendChild(titleDiv)
    
    contentDiv.appendChild(myLogo)
  
    let copyDiv = document.createElement("div");
    copyDiv.innerHTML = "We are current in Madrid. We will be expanding to Leeds, UK very soon.";
    contentDiv.appendChild(copyDiv)
    
    document.body.appendChild(contentDiv);
}


