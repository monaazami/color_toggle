console.log("connected!!!");
var button = document.querySelector("button");
var body= document.querySelector("body");
button.addEventListener("click", clicked);
function clicked(){
    console.log("clicked!");
    body.style.background= "#ddcb44";
    alert("Good job, I am so proud of you!");
}