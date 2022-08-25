// modal
let burger = document.querySelector(".burger")
let modal = document.querySelector(".modal")
let close_modal = document.querySelector(".close-modal")

burger.addEventListener("click" , ()=> {
    modal.classList.add("db")
})
close_modal.addEventListener("click" , ()=> {
    modal.classList.remove("db")
})

// header

let header = document.querySelector(".header")
let header__nav = document.querySelector(".header__nav")
let header__top_bar = document.querySelector(".header__top-bar")


window.addEventListener("scroll", () => {

    if (window.scrollY > 20) {
      header.classList.add("purple");
    //   header__nav.style = "display:none"
      header__top_bar.style = "margin-bottom:1rem"
    } else {
      header.classList.remove("purple");
    //   header__nav.style = "display:flex"

  
    }
  });