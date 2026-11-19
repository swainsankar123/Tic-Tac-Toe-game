let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector(".resetbtn")
let msgContainer=document.querySelector(".msg-container");
let msgP=document.querySelector(".msgP");
let newGame=document.querySelector(".new-game");

let turnO=true;
let count=0;
const winPatterns=[
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
        count++;
        checkWiner();
        });
    });

    const resetgame = () => {
        turnO=true;
        count=0;
        anableBoxes();
        msgContainer.classList.add("hiden");
    }

      const showDraw=()=>{
        msgP.innerText="the match was draw";
        msgContainer.classList.remove("hiden");
        disableBoxes();
      }
      
     const anableBoxes= () =>{
      for(let box of boxes){
        box.disabled=false;
        box.innerText="";
      }
    }

    const disableBoxes= () =>{
      for(let box of boxes){
        box.disabled=true;
      }
    }

    const showWiner =(winer) =>{
      msgP.innerText=`congratulation,winer is ${winer}`;
     msgContainer.classList.remove("hiden");
     disableBoxes();
    }

    const checkWiner=() =>{
       for( let pattern of winPatterns){
        let position1=boxes[pattern[0]].innerText;
          let position2=boxes[pattern[1]].innerText;
            let position3=boxes[pattern[2]].innerText;

            if(position1 !=="" && position2 !=="" && position3 !==""){
                if(position1 == position2 && position2 == position3){
                    showWiner(position1);
                    return;
                }
            }
       }
       if(count == 9 ) {
        showDraw() ;
       }
    };

    newGame.addEventListener("click",resetgame);
    resetBtn.addEventListener("click",resetgame);
