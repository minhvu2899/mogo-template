//Slick slider
$(document).ready(function () {
  $(".quote-container").slick({
    prevArrow:
      "<button type='button' class='slick-prev pull-left'><i class='fal fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow:
      "<button type='button' class='slick-next pull-right'><i class='fal fa-angle-right' aria-hidden='true'></i></button>",
    responsive: [
      {
        breakpoint: 767,
        settings: {
          arrows: false,
        },
      },
    ],
  });
});
const headerToggle= document.querySelector('.header-toggle');
console.log(headerToggle);
const headerMenu = document.querySelector('.header-menu');
console.log(headerMenu);
const expanToggle ='is-toggle';
headerToggle.addEventListener("click",()=> {
    headerMenu.classList.add(expanToggle);
    console.log("da click");
})

window.addEventListener("click",function(e){
   if(!headerMenu.contains(e.target) && !e.target.matches(".header-toggle")){
       headerMenu.classList.remove(expanToggle);
       console.log('da xoas');
   }
})