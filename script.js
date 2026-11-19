let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector(".resetbtn")

let turnO=true;
const winpatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
boxes.forEach((box)=>{
    box.addEventListener("click",() => {
        if(box.innerText !==""){
         return;
        }

        if(turnO){
            box.innerText="O";
            box.style.color="#bbe524";
            turnO=false;
        }else{
            box.innerText="X";
            box.style.color="#FF5B42";
            turnO=true;

        }
        box.disabled=true;
        checkwiner();
        });
    });

    
