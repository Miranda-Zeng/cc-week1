console.log("this is working");
// a list
// let colors = ['darkOrchid','dodgerBlue','pink'];

// target the img
const folders = document.querySelectorAll(".folders figure");

for (let i=0; i< folders.length;i++){
    let RandomX =  Math.random()*700;
    let RandomY =  Math.random()*400;

    folders[i].style.left = RandomX + "px";
    folders[i].style.top = RandomY + "px";
}
// create a random number assign it to a variable
// create a string with that random number
// let randomWidth = Math.random()*400;
// let randomHeight = Math.random()*400;
// console.log(randomWidth);
// let widthString = randomWidth + "px";
// let HeightString = randomHeight + "px";
// console.log(widthString);

// pic.style.left = widthString;
// pic.style.top = HeightString;
// move it to random position





