const like = document.querySelector('i');
const con = document.querySelector('.container');
var count=0;
con.addEventListener('dblclick',function(e){
     like.style.transform = "translate(-50%,-50%) scale(0.8)";
     like.style.opacity="0.8"
     setTimeout(function(e){
        like.style.opacity="0";
     },1000)
setTimeout(function(){
         like.style.transform = "translate(-50%,-50%) scale(0)";
     },1000)
})