var h1= document.querySelector("h1");
var lis=document.querySelectorAll("li");

h1.addEventListener("click",function back(){
    alert("someone clicked");
    h1.style.background="pink";
})

for(var i=0; i< lis.length;i++){
    lis[i].addEventListener("click",function(){
        this.style.color="orange";
    })
}