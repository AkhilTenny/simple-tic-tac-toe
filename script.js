const valuesNeeded = (()=>{
   const winnerCombinations =[
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
   ]
   const PlayerX = "X";
   const PlayerO = "O";
  
   var   chanceCount =1 ;

   const addCount = ()=>{
    chanceCount +=1;
   }
   
   
   const findPlayer = ()=>{
    
    if(chanceCount % 2 == 0){
     return PlayerX;
   }else{
      return PlayerO;
    }

   }
   var gameboard = [
      "","","","","","","","",""
   ];
   const checkWinner = ()=>{
    
    const winConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for(let i=0;i<winConditions.length;i++){
      let winCount =0;
      for(let j=0;j<3;j++){
      if(gameboard[winConditions[i][j]] == PlayerX){
      winCount +=1;
       if(winCount == 3){
        playerXWon();
       }
      }
    }
      }for(let i=0;i<winConditions.length;i++){
        let winCount =0;
        for(let j=0;j<3;j++){
        if(gameboard[winConditions[i][j]] == PlayerO){
        winCount +=1;
         if(winCount == 3){
          playerOWon();
         }
        }
      }
        }
      
   }
 
   function reset(){
    for(let i=0;i<gameboard.length;i++){
      gameboard[i]="";
    }
   const everyBox = document.querySelectorAll('.box');
   everyBox.forEach((box)=>{
    box.innerHTML = ""
   })
   document.querySelector("#winnerStatus").innerHTML = "";

   }

   function playerXWon(){
    document.querySelector("#winnerStatus").innerHTML = "<h1>X won</h1>"
   }function playerOWon(){
    document.querySelector("#winnerStatus").innerHTML = "<h1>O won</h1>"
   }
   function checkFree(index){
    if(gameboard[index] != ''){
      return true;
    }
   }
   
  return {gameboard,findPlayer,checkWinner,chanceCount,addCount,checkFree,reset} 
}
)()


const displayChanges = (()=>{
  const boxes = document.querySelectorAll('.box')
  boxes.forEach((box,index,nodeIndex) =>{
    box.addEventListener('click',()=>{
       
      if(valuesNeeded.checkFree(index)){
        alert("try another box");
        return; }

      valuesNeeded.gameboard[index] = valuesNeeded.findPlayer();
      box.innerHTML = `<h1 class="box-sign">${valuesNeeded.findPlayer()}</h1>`;
      
      valuesNeeded.addCount();
      valuesNeeded.checkWinner();
      console.log(valuesNeeded.gameboard);

      

      } )
  })
   document.querySelector('.butn-reset').addEventListener('click',()=>{
    valuesNeeded.reset();
   })
  

})()



  
  
