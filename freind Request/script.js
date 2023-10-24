const friend=document.querySelector('h5');
const demo = document.querySelector('.add')
const remove=document.querySelector('.remove')
demo.addEventListener('click',function(e){
    demo.innerHTML="Added Friend"
    demo.style.backgroundColor="grey"
    friend.innerHTML="Friend"
    friend.style.color="blue";
    console.log("hui hui hui");
})
remove.addEventListener('click',function(e){
    demo.innerHTML ="Add friend"
    demo.style.color="#fff";
    demo.style.backgroundColor ="cadetblue";
    friend.innerHTML="Stranger"
    friend.style.color="red"
    console.log();

})