let btn=document.querySelector("button");
btn.addEventListener("click",function (){
    let h1=document.querySelector("h1");
    let randomColor=generateRandomColor();
    h1.innerText=randomColor;
    let div=document.querySelector("div");
    div.style.backgroundColor=randomColor;
    console.log("color updated");
});
function generateRandomColor(){
    let R=Math.floor(Math.random()*255);
    let G=Math.floor(Math.random()*255);
    let B=Math.floor(Math.random()*255);
    let rgbColor=`rgb(${R},${G},${B})`
    return rgbColor;
}
