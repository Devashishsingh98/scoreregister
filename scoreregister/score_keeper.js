var p1button=document.querySelector("#p1");
var p2button=document.querySelector("#p2");
var p1display= document.querySelector("#p1display");
var p2display= document.querySelector("#p2display");
var resetbutton=document.querySelector("#reset");
var numInput=document.querySelector("input");
var winningscoredisplay=document.querySelector("p span");
var p1score=0, p2score=0;
var gameover=false;
var winningscore=5;

console.log(p1display)
p1button.addEventListener("click",function(){
    if(!gameover){
    p1score++;
    if(p1score===winningscore){
        p1display.classList.add("winner");
        gameover=true;
    }
    p1display.textContent=p1score;
    }
    
})
p2button.addEventListener("click",function(){
    if(!gameover){
        p2score++;
        if(p2score===winningscore){
            p2display.classList.add("winner");
            gameover=true;
        }
        p2display.textContent=p2score;
    }
})
resetbutton.addEventListener("click",function(){
    reset();    
})
resetbutton.addEventListener("click",function(){
    p1score=0;
    p2score=0;
    p1display.textContent=0;
    p2display.textContent=0;
    p1display.classList.remove("winner");
    p2display.classList.remove("winner");
    gameover=false;
})
function reset(){
    p1score=0;
    p2score=0;
    p1display.textContent=0;
    p2display.textContent=0;
    p1display.classList.remove("winner");
    p2display.classList.remove("winner");
    gameover=false;
}
numInput.addEventListener("change",function(){
    winningscoredisplay.textContent=numInput.value;
    winningscore=Number(numInput.value);
    reset();
}) 