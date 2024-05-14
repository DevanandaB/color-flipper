const colorChange = document.getElementById("color-change");

function changeColor() { 
    let red = Math.floor(Math.random() * 256); 
    let green = Math.floor(Math.random() * 256); 
    let blue = Math.floor(Math.random() * 256); 
    let color = `rgb(${red}, ${green}, ${blue})`; 
    colorChange.style.backgroundColor = color; 
    colorChange.style.transition = " all 1s";
}
