// nav-button logic 

let list = document.querySelector(".mobile");
let menuBtn = document.querySelector("#nav-btn");

menuBtn.onclick = () => {
    
    if (menuBtn.classList == "bx bx-menu") {
        list.classList.remove("hide");
    } else {
        list.classList.add("hide");
    }

    menuBtn.classList.toggle("rotate");
    menuBtn.classList.toggle("bx-x");
}

list.onclick = () => {
    if (menuBtn.classList == "bx bx-menu") {
        list.classList.remove("hide");
    } else {
        list.classList.add("hide");
    }

    menuBtn.classList.toggle("rotate");
    menuBtn.classList.toggle("bx-x");
}