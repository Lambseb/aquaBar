var showHeight = window.innerHeight;
var showWidth = window.innerWidth;
console.log(showHeight, showWidth);


// script show list menu


/* crée les const pour chaque bouton !!

btnSalad.addEventListener("click", () => {
    saladeSlide.style.display = "flex";
    burgerSlide.style.display = "none";
    tartineSlide.style.display ="none";
   if (saladeSlide.style.display === "flex"){
    saladeSlide.style.transition = "opacity 2s ease";
    saladeSlide.style.opacity = "0";
   }
})
btnTartine.addEventListener("click", () => {
    saladeSlide.style.display = "none";
    burgerSlide.style.display = "none";
    tartineSlide.style.display ="flex";
    if (tartineSlide.style.display === "flex"){
        tartineSlide.style.transition = "opacity 2s ease";
        tartineSlide.style.opacity ="0";
    }
})
btnBurger.addEventListener("click", () => {
    saladeSlide.style.display = "none";
    burgerSlide.style.display = "flex";
    tartineSlide.style.display = "none";
})

const btnSlide = document.querySelector(".btn-slide");
var state = 1;
const btnSalad = document.querySelector(".btn-salad");
const btnTartine = document.querySelector(".btn-tartine");
const btnBurger = document.querySelector(".btn-burger");
const saladeSlide = document.querySelector(".salade");
const tartineSlide = document.querySelector(".tartine");
const burgerSlide = document.querySelector(".burger");
const platSlide = document.querySelector(".plat");
btnSlide.addEventListener("click", () => {
    if (state === 0) {
        tartineSlide.style.display ="none";
        saladeSlide.style.display ="flex";
        burgerSlide.style.display ="none";
        platSlide.style.display ="none";
        state = 1;
    } else if (state === 1) {
        burgerSlide.style.display ="none"
        tartineSlide.style.display ="flex";
        saladeSlide.style.display ="none";
        platSlide.style.display ="none";
        state = 2;
    } else if (state === 2) {
        saladeSlide.style.display="none";
        tartineSlide.style.display ="none";
        burgerSlide.style.display ="flex";
        platSlide.style.display ="none";
        state = 3;
    } else if (state === 3) {
    saladeSlide.style.display="none";
    tartineSlide.style.display ="none";
    burgerSlide.style.display ="none";
    platSlide.style.display ="flex";
    state = 0;
}
});
*/
