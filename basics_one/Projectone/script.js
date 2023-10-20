var colors = document.querySelectorAll(".color");
var body = document.querySelector("body");
colors.forEach(function(s){
    console.log(s);
    s.addEventListener("click",function(e){
        console.log(e.target);
        if(e.target.id==="grey"){
            body.style.backgroundColor="grey";
        }
    })
})