let header = document.body.querySelector("header");
let logo = document.body.querySelector(".logo").firstElementChild;


window.onscroll = function(){
    if(header){
        if(window.scrollY > 400){
            header.lastElementChild.classList.add("hidden");
            header.firstElementChild.classList.add("hidden");
            header.classList.add("sticky")
            header.classList.add("light")
            logo.setAttribute("src", "./assets/images/header/logo.png")
        }
        else if(window.scrollY < 400){
            header.lastElementChild.classList.remove("hidden")
            header.firstElementChild.classList.remove("hidden");
            header.classList.remove("sticky")
            header.classList.remove("light")
            logo.setAttribute("src", "./assets/images/header/logo-white.png")
        }
    }
}

window.onscroll