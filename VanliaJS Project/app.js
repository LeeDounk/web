const title = document.querySelector("#title");

function handleTitleClick(){
    title.style.color="blue";

}

function handleMouseEnter(){
    console.log("holy shit");
}

function handleWindowResize(){
    document.body.style.backgroundColor="red";
}
title.addEventListener("click", handleTitleClick);
title.addEventListener("mouseenter",handleMouseEnter); 

window.addEventListener("resize",handleWindowResize);