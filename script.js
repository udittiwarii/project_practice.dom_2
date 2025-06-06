let change = document.querySelector("button");
let color = document.querySelector(".box");


change.addEventListener("click", function () {
    let C1 = Math.floor(Math.random() * 255);
    let C2 = Math.floor(Math.random() * 255);
    let C3 = Math.floor(Math.random() * 255);
    console.log(C1, C2, C3)
    color.style.backgroundColor = `rgb(${C1}, ${C2},${C3})`
})