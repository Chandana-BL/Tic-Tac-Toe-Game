let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let newGame=document.querySelector("#new-game");
let msgCOntainer=document.querySelector(".message-container");
let message=document.querySelector("#message")

let turnO=true;//playerO
let count=0;
//now storing winning pattren in 3D form
const winPattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [3,4,5],
    [6,7,8],
];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        count++;
        if(turnO){
            box.style.color = "ghostwhite";
            box.innerText="O";
            turnO=false;
        }
        else{
            box.style.color = "black";
            box.innerText="X";
            turnO=true;
        }
       box.disabled=true; 
       winnerCheck();
    })
})
//to rest the game
const resetGame=()=>{
    turnO=true;
    EnableBox();
    msgCOntainer.classList.add("hide");
};
//to disable boxes after winner 
const disableBox=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
//to enable boxees after reste
const EnableBox=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
//to show winner
const ShowWinner=(winner)=>{
    message.innerHTML=`Congratulations, Winner is ${winner}`;
    msgCOntainer.classList.remove("hide");
    disableBox();
}
//for draw condition
const draw=()=>{
    message.innerHTML="OOPS! Game is Draw";
    msgCOntainer.classList.remove("hide");
}
//to check the winner

const winnerCheck=()=>{
    for(let pattern of winPattern){
        // console.log(boxes[pattern[0]].innerText,
        // boxes[pattern[1]].innerText,boxes[pattern[2]].innerText);

        let pos1Val=boxes[pattern[0]].innerText;
        let pos2Val=boxes[pattern[1]].innerText;
        let pos3Val=boxes[pattern[2]].innerText;
        if(pos1Val!="" && pos2Val!="" && pos3Val!=""){
            if(pos1Val===pos2Val && pos2Val===pos3Val){
                ShowWinner(pos1Val);
            }
            else if(count==9){
                draw();
            }
        }
    }
};

newGame.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);