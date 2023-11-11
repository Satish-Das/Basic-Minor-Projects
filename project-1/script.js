var clk = document.querySelector("h5");
var add = document.querySelector("#Add");

var check = 0;

add.addEventListener("click",function(){
    if(check == 0){
        clk.innerHTML = "Friends";
        clk.style.color = "blue";
        add.innerHTML = "Remove Friend";
        check = 1;
    }
    else{
        clk.innerHTML = "Stranger";
        clk.style.color = "Red";
        add.innerHTML = "Add Friends";
        check = 0;
    }
})

