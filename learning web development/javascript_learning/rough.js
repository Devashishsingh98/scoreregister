var body= document.querySelector("body");
var isBlue= false;

setInterval(function(){
if(isBlue){
    body.style.background="white";
}
else{
    body.style.background="blue";
}
isBlue= !isBlue;
},100000000000000000000 )