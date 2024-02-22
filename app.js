let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turn0 = true;    //turn for O

// 2D array start from here

const winPatterns= [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8],
];

// function for reset game

const resetGame = ()=>{
    turn0= true;
    enableBoxes();
    msgContainer.classList.add("hide");
}


//  Code to apply Click event
boxes.forEach((box)=> {
   box.addEventListener("click",() =>{
    // console.log("box was clicked");
    if(turn0)
    {
        box.innerText = "O";
       turn0= false;
    }
    else
    {
        box.innerText="X";
        turn0= true ;
     }

     box.disabled = true;

       checkWinner();
      
   });
   
});

// function for disable boxes after winner is decide
const disableBoxes = ()=>{
    for(let box of boxes){
        box.disabled = true;
    }
}


// function to disble boxes 
const enableBoxes = ()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText= "";
    }
}


// function to show or decide winner
const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

// Function to decide winner, which one will be winner
const checkWinner = () =>{
    for( let pattern of winPatterns ) 
    {
        // console.log(pattern[0], pattern[1], pattern[2]);
      let  pos1Val= boxes[pattern[0]].innerText;
      let  pos2Val= boxes[pattern[1]].innerText;
      let  pos3Val= boxes[pattern[2]].innerText;
            
      if(pos1Val != "" && pos2Val != "" && pos3Val != "")
      {
        if(pos1Val === pos2Val && pos2Val === pos3Val)
        {
            // console.log("winner", pos1Val);
            showWinner(pos1Val);
        }
      }      
    }
}


newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click",resetGame);


    
