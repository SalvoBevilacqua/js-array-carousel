// array con le immagini da inserire
const arrayImage = ["./img/01.jpg","./img/02.jpg","./img/03.jpg","./img/04.jpg","./img/05.jpg"];
// test
console.log(arrayImage[2]);

// inizializzo ciò che andrà in html
let stringImageForHtml = "";
for (let i = 0; i < arrayImage.length; i++) {
    stringImageForHtml += `<div class="item"><img src="${arrayImage[i]}" alt=""></div>`
}

console.log(stringImageForHtml);

// seleziono dove devo inserire la stringa
const divSlider = document.querySelector(".items");

// inserisco la stringa
divSlider.innerHTML += stringImageForHtml;
console.log(divSlider);

// seleziono tutti i div con le immagini
const slide = document.querySelectorAll(".item");
console.log(slide);

// inserisco la classe active nel primo elemento
let index = 0;
slide[index].classList.add("active");

// inserisco la classe active nello slide
document.querySelector(".next").addEventListener
("click", function(event)
{
    event.preventDefault();
    next();
})

document.querySelector(".prev").addEventListener
("click", function(event)
{
    event.preventDefault();
    prec();
})

let interval  = setInterval(next, 3000);

document.querySelector(".items").addEventListener("mouseover", function() {
    clearInterval(interval);
})

// FUNCTIONS
function next(){
    if(index < arrayImage.length - 1) {
        slide[index].classList.remove("active");
        index++;
        slide[index].classList.add("active");
    } else {
        slide[index].classList.remove("active");
        index = 0;
        slide[index].classList.add("active");
    }
}

function prec() {
    if(index > 0){
        slide[index].classList.remove("active");
        index--;
        slide[index].classList.add("active");
    } else {
        slide[index].classList.remove("active");
        index = arrayImage.length -1;
        slide[index].classList.add("active");        
    }
}