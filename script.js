var arr=[
    { dp: "https://images.unsplash.com/photo-1697275021697-59e7ff8760ec?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDUxfFM0TUtMQXNCQjc0fHxlbnwwfHx8fHw%3D", story:"https://images.unsplash.com/photo-1687825512118-5ee2ddded118?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDU4fFM0TUtMQXNCQjc0fHxlbnwwfHx8fHw%3D"},
    { dp: "https://images.unsplash.com/photo-1695509038650-7dd05e5cf6a4?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDkwfFM0TUtMQXNCQjc0fHxlbnwwfHx8fHw%3D", story:"https://images.unsplash.com/photo-1694269476304-5c49949797b1?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE1N3xTNE1LTEFzQkI3NHx8ZW58MHx8fHx8"},
    { dp: "https://images.unsplash.com/photo-1695509038650-7dd05e5cf6a4?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDkwfFM0TUtMQXNCQjc0fHxlbnwwfHx8fHw%3D", story:"https://images.unsplash.com/photo-1694269476304-5c49949797b1?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE1N3xTNE1LTEFzQkI3NHx8ZW58MHx8fHx8"},
    { dp: "https://images.unsplash.com/photo-1697275021697-59e7ff8760ec?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDUxfFM0TUtMQXNCQjc0fHxlbnwwfHx8fHw%3D", story:"https://images.unsplash.com/photo-1694269476304-5c49949797b1?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE1N3xTNE1LTEFzQkI3NHx8ZW58MHx8fHx8"}
]
var storyians = document.querySelector("#storyian")
var clutter=" "
arr.forEach(function(elem,idx){
    clutter +=` <div class="story">
        <img id="${idx}"src="${elem.dp}" alt="">
</div>`
})
storyians.innerHTML=clutter
storyians.addEventListener("click",function(dets){
   document.querySelector('#full-screen').style.display="block";
    document.querySelector('#full-screen').style.backgroundImage =`url(${arr[dets.target.id].story})`
     setTimeout(() => {
         document.querySelector('#full-screen').style.display = "none";

     }, 5000);
});