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
   const playerXOrganizer = [
    "","","","","","","","",""
 ];
  const playerOOrganizer = [
  "","","","","","","","",""
];
   var   chanceCount =1 ;

   const addCount = ()=>{
    chanceCount +=1;
   }
   const organizer = ()=>{
    
    for(let i=0;i<=gameboard.length;i++){
      if(gameboard[i] == PlayerX){
        playerXOrganizer[i] = PlayerX;
      }else if(gameboard[i] == PlayerO ){
        playerOOrganizer[i] = PlayerO
      }
    }
    
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
   function playerXWon(){
    document.querySelector("#winnerStatus").innerHTML = "<h1>X won</h1>"
   }function playerOWon(){
    document.querySelector("#winnerStatus").innerHTML = "<h1>O won</h1>"
   }
   function checkFree(index){
    
   }
   
  return {gameboard,findPlayer,checkWinner,chanceCount,addCount,organizer,checkFree} 
}
)()


const displayChanges = (()=>{
  const boxes = document.querySelectorAll('.box')
  boxes.forEach((box,index,nodeIndex) =>{
    box.addEventListener('click',()=>{
       
      valuesNeeded.gameboard[index] = valuesNeeded.findPlayer();
      box.innerHTML = `<h1 class="box-sign">${valuesNeeded.findPlayer()}</h1>`;
      
      valuesNeeded.addCount();
      valuesNeeded.organizer();
      valuesNeeded.checkFree(index);
      valuesNeeded.checkWinner();

      

      } )
  })

  

})()



  
  
