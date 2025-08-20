let a=true;
let player1=0
let player2=0
const winnerCombo=[[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]];
const winner=document.getElementById("winner");
const buttons=document.querySelectorAll(".button");
const newGame=document.getElementById("newGame");
const reset=document.getElementById("reset");
const play1=document.getElementById("player1")
const play2=document.getElementById("player2")
buttons.forEach((btn) => {
    if (btn.innerHTML==""){
        btn.addEventListener("click",()=>{
            if (a===true){
                btn.innerHTML="x";
                btn.disabled=true;
                a=false;
            }
            else{
                btn.innerHTML="o";
                btn.disabled=true;
                a=true;
            }
            checkWinner()
            draw()
        })
        
    }
}); 
function checkWinner(){
    for( let combo of winnerCombo){
        const [x,y,z]=combo;
        const a = buttons[x-1];
        const b = buttons[y-1];
        const c = buttons[z-1];
        if(a.innerHTML!="" && a.innerHTML==b.innerHTML && b.innerHTML==c.innerHTML){
            winner.style.display="block";
            if(a.innerHTML=="x"){
                winner.innerHTML="player one is winner";
                player1+=1
                play1.innerHTML=`player1 = ${player1}`
            }
            else{
                winner.innerHTML="player two is winner";
                player2+=1
                play2.innerHTML=`player2 = ${player2}`
            }
            buttons.forEach((btn)=>{
                btn.disabled=true;
            })   
            newGame.style.display="block";            
        }        
    }   
}
function draw(){
    let filled= true
    buttons.forEach((btn)=>{
        if(btn.innerHTML==""){
            filled=false
        }    
    })         
    if (winner.innerHTML=="" && filled==true){
        winner.innerHTML="It's a Draw"
        newGame.style.display="block"
    }
}
newGame.addEventListener("click", ()=>{
    buttons.forEach((btn)=>{
        btn.innerHTML="";
        btn.disabled=false;
    })
    winner.innerHTML="";
    newGame.style.display="none";    
})
reset.addEventListener("click", ()=>{
    buttons.forEach((btn)=>{
        btn.innerHTML="";
        btn.disabled=false;
    })
    winner.innerHTML="";
    newGame.style.display="none";
    play1.innerHTML="player1"
    play2.innerHTML="player2"
    player1=0;
    player2=0;
    a=true;    
})