var butt = document.querySelector("button");

var text = document.querySelector("h5");

var flag = 0;

butt.addEventListener("click",function(){
    if(flag==0){
        text.innerHTML = "Friend";
        text.style.color = "green";
        butt.innerHTML = "Remove Friend"
        flag = 1;
    } 
    else{
        text.innerHTML = "Stranger";
        text.style.color = "red";
        butt.innerHTML = "Add Friend"
        flag = 0;
    }
})