console.info("Hello JS")
document.getElementById("myHeading").innerHTML = "Harrison A-T"
document.querySelector("nav>ul>li").setAttribute("class", "currentPage")
let colourButtons = document.querySelectorAll(".colpicker")
console.dir(colourButtons)

document.getElementById("myTestBtn").addEventListener("click", function(){
    console.info("hi I was clicked")
})

let redBtn = document.querySelector(".red")
redBtn.addEventListener("click", function(){
    document.body.setAttribute("class", "redBack")
})

let greenBtn = document.querySelector(".green")
greenBtn.addEventListener("click", function(){
    document.body.setAttribute("class", "greenBack")
})

let blueBtn = document.querySelector(".blue")
blueBtn.addEventListener("click", function(){
    document.body.setAttribute("class", "blueBack")
})

let defaultBtn = document.querySelector(".reset")
defaultBtn.addEventListener("click", function(){
    document.body.removeAttribute("class")
})