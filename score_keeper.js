var p1button=document.querySelector("#p1");
var p2button=document.querySelector("#p2");
var p1display= document.querySelector("#p1display")
var p2display= document.querySelector("#p2display")
var p1score=0, p2score=0;
var gameover=false;
var winningscore=5;

console.log(p1display)
p1button.addEventListener("click",function(){
    if(!gameover){
    p1score++;
    if(p1score===winningscore){
        gameover=true;
    }
    p1display.textContent=p1score;
    }
    
})

p2button.addEventListener("click",function(){
    if(!gameover){
        p2score++;
        if(p2score===winningscore){
            gameover=true;
        }
        p2display.textContent=p2score;
    }
})

