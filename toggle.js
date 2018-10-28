console.log("connected!!!");
var button = document.querySelector("button");
var body= document.querySelector("body");
var isColored = false;
button.addEventListener("click", clicked);
function clicked(){
    if (isColored){
        body.style.background= "rgb(255, 233, 182)";
    }else {body.style.background= "#ddcb44";}
    isColored =!isColored
}