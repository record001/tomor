let menu = document.querySelectorAll(".menu");
let content = document.querySelectorAll(".content");
let icon = document.querySelectorAll(".icon");

for (let i = 0; i < menu.length; i++) {
  menu[i].addEventListener("click", () => {
    for (let j = 0; j < content.length; j++) {
      if (i == j) {
        icon[j].src = !content[i].classList.contains("content-transition")
          ? "./image/plp/up.svg"
          : "./image/plp/down.svg";

        //  icon[j].src = content[i].style.display == "block" ? "./image/plp/up.svg" : "./image/plp/down.svg";

        content[j].classList.toggle("content-transition");
      } else {
        icon[j].src = "./image/plp/down.svg";
        content[j].classList.remove("content-transition");
      }
    }
  });
}

// rendering products

function renderProducts() {
  let product__list = document.querySelector(".product__list");
  let productFrag = document.createDocumentFragment();
//   

  PRODUCT_LIST.forEach((item) => {
    let wrp = document.createElement("div");
    wrp.setAttribute("class", "new-collection__card");
    wrp.setAttribute("id", item.id);
    wrp.innerHTML = `
        
        <div class = "card__top">
            <span>New</span>
            
            <img class="heart" src="./image/home/heart-${
                    item.heart ? "full" : "empty"
                      }.svg" alt="heart">
            
         </div>
          

          <img class = "card__img" src="${item.image}" alt="dress-blue">
          <div class ="card__icons">
         ${
           item.recicle
             ? `<img src="./image/plp/recicle.svg" alt="icons"></img>`
             : ""
         } 
         ${item.leaf ? `<img src="./image/plp/leaf.svg" alt="icons">` : ""} 
         ${item.rabbit ? `<img src="./image/plp/rabbit.svg" alt="icons">` : ""}
          
          
          </div>
          <div class="card__text">
            <h4>${item.title}</h4>
            <p>${item.subtitle}</p>
            <p>${item.price}</p>
          </div>

          <ul class="color-list">
            <li class="color__item">            
                <label class="color"  >
                    <input checked class="color-input" type="radio"  name="${
                      item.id
                    }">
                    <span class="checkmark"></span>
                </label>
            </li>
            <li class="color__item">            
                <label class="color"   >
                    <input class="color-input" type="radio" name="${item.id}">
                    <span class="checkmark"></span>
                </label>
            </li>
            <li class="color__item">           
                <label class="color"  >
                    <input class="color-input" type="radio"  name="${item.id}">
                    <span class="checkmark"></span>
                </label>
            </li>
         </ul>
       
          `;
    productFrag.appendChild(wrp);
  });

  product__list.appendChild(productFrag);
}
renderProducts();


let hrt = document.querySelectorAll(".heart");
let heart_badge = document.querySelector(".heart__badge");

let heart_modal = document.querySelector(".heart-modal");
let heart_modal_blur = document.querySelector(".heart-modal-blur");
let heart_close = document.querySelector("#heart-close");
let header_heart = document.querySelector(".header__heart")

header_heart.addEventListener("click", e=>{
  heart_modal_blur.classList.add("db")
  document.querySelector("body").style = "overflow:hidden"
})
heart_close.addEventListener("click", e=>{
  heart_modal_blur.classList.remove("db")
  document.querySelector("body").style = "overflow:none"

})

  hrt.forEach((h) => {
   
    h.addEventListener("click", (e) => {
        if (e.target.src.includes("empty")) {
            e.target.src ="./image/home/heart-full.svg"
           heart_modal.innerHTML +=e.target.parentElement.parentElement.outerHTML

          
        }else{
            e.target.src ="./image/home/heart-empty.svg"
           heart_modal.children[heart_modal.children.length-1].remove()

        }

        // badge 

        if(heart_modal.children.length >0) {
            heart_badge.style = "display:flex"
            heart_badge.textContent = heart_modal.children.length
        }else {
            heart_badge.style = "display:none"

        }

    });
  });


