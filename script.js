const valuesNeeded = (()=>{
   const playerX = "X";
   const PlayerO = "O";
   var   chanceCount = 1 ;
   
   const findPlayer = ()=>{
    
    chanceCount +=1;
    
    if(chanceCount % 2 == 0){
     return playerX;
   }else{
      return PlayerO;
    }

   }
   var gameboard = [
      "","","","","","","","",""
   ];
   const endGame = ()=>{
    if (chanceCount > 9){
      document.querySelector("#winnerStatus").innerHTML = "its a draw";
      
      
    }else if(
      gameboard[0] == "playerX" && gameboard[1] == "playerX" && gameboard[2] == "playerX" ){ 
     
        document.querySelector("#winnerStatus").innerHTML = "X is the Winner";
    }
   }
  return {gameboard,findPlayer,endGame} 
}
)()


const displayChanges = (()=>{
  const boxes = document.querySelectorAll('.box')
  boxes.forEach((box,index,nodeIndex) =>{
    box.addEventListener('click',()=>{
       
       
    
      box.innerHTML = `<h1 class="box-sign">${valuesNeeded.findPlayer()}</h1>`;
      valuesNeeded.endGame();

      } )
  })



})()



  
  
