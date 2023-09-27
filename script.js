var stat = document.querySelector("h5");
var add = document.querySelector("#add");
var flag = 0

add.addEventListener("click",function(){
    if(flag==0){
        stat.innerHTML = "Friends"
        stat.style.color="green";
        flag=1;
        add.innerHTML = "Remove Friend"
    }
    else{
        stat.innerHTML = "Stranger"
        stat.style.color="red";
        flag=0;
        add.innerHTML = "Add Friend"
    }
})

