"use strict"

const bMenu = document.querySelector("#bMenu")
const logo = document.querySelector("#bLogo")
const verMenu = document.querySelector("ul")


function menu() {
    const barra = document.querySelector(".barra")
    if (verMenu.style.display == "block") {
        verMenu.style.display = "none"
        //bMenu.style.marginTop= "0"
        //barra.style.marginTop = "0px"
        logo.style.display = "flex"
    } else {
        verMenu.style.display = "block"
        logo.style.display = "none"
        verMenu.style.marginTop = "0px"
    }
    //bMenu.style.display = "flex"


}

bMenu.addEventListener("click", menu)
